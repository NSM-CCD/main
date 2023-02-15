import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { useMutation } from "@apollo/client"
import { ACIContext } from "."
import aciClient from "../../utils/aciClient"
import { reducer, initialState } from "./reducer"
import { MARKET_WIDGET } from "../../graphqlQueries/queries"
import { getYears, makesDB } from "../../components/HeroNew/helpers"

const ACIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const [createMarketWidgetFromTaxonomyName, { error }] =
    useMutation(MARKET_WIDGET)

  const setYear = useCallback(year => dispatch({ type: "set_year", year }), [])
  const setMake = useCallback(make => dispatch({ type: "set_make", make }), [])
  const setModel = useCallback(
    model => dispatch({ type: "set_model", model }),
    []
  )
  const setMakeLabel = useCallback(
    makeLabel => dispatch({ type: "set_label", makeLabel }),
    []
  )

  const setTrim = useCallback(trim => dispatch({ type: "set_trim", trim }), [])

  const setRelatedVehicles = useCallback(
    relatedVehicles => dispatch({ type: "set_related", relatedVehicles }),
    []
  )

  const yearOptions = useMemo(() => {
    if (!state.isYear && state.make) {
      return state.yearsList
    }
    return getYears()
  }, [state.isYear, state.make, state.yearsList])

  const makeOptions = useMemo(() => {
    if (state.isYear && state.year) {
      return state.makesList
    }
    return makesDB
  }, [state.isYear, state.year, state.makesList])

  const modelOptions = useMemo(() => {
    if (state.modelList.length > 0) {
      return state.modelList
    }
    return []
  }, [state.modelList])

  const trimOptions = useMemo(() => {
    if (state.trimsList.length > 0) {
      let trims = []
      state.trimsList.forEach(trim => {
        if (trim.entryId === 1 || trim.entryId === 5) {
          if (!trims.includes(trim.model)) trims.push(trim.model)
        }
      })
      setRelatedVehicles(trims)
      return trims
    }
    return []
  }, [state.trimsList, setRelatedVehicles])

  const getMakesByYear = useMemo(async () => {
    if (state.year) {
      const { data } = await aciClient.get(
        `/api/nada_raw_companies/makes/${state.year}`
      )
      if (data) {
        dispatch({ type: "set_makes", makesList: data })
      }
    }
  }, [state.year])

  const getYearsByMake = useMemo(async () => {
    if (state.make) {
      const { data } = await aciClient.get(
        `/api/nada_raw_companies/${state.make}`
      )
      if (data?.modelyears) {
        dispatch({ type: "set_years", yearsList: data.modelyears.split(",") })
      }
    }
  }, [state.make])

  const getModelsByCompNumYear = useMemo(async () => {
    if (state.make && state.year) {
      const { data } = await aciClient.get(
        `/api/standard_table/${state.make}/${state.year}`
      )
      let modelOptions = []
      if (data?.length > 0) {
        // save original model obj
        dispatch({
          type: "set_model_obj",
          modelObjArr: data, // modelPayload
        })
        data.forEach(model => {
          if (model?.entryId === 1 || model?.entryId === 5) {
            if (!modelOptions.includes(model?.modelcat))
              modelOptions.push(model?.modelcat)
          }
        })
      }
      dispatch({ type: "set_models", modelList: modelOptions })
    }
  }, [state.make, state.year])

  const getTrimsByMakeYearModel = useMemo(async () => {
    if (state.make && state.model && state.year) {
      const { data } = await aciClient.get(
        `/api/standard_table/${state.make}/${state.year}/${state.model}`
      )
      if (data) {
        dispatch({ type: "set_trims", trimsList: data })
      }
    }
  }, [state.make, state.model, state.year])

  const getOptionPricingMods = useMemo(async () => {
    if (state.make && state.year) {
      const { data } = await aciClient.get(
        `/api/nada_raw_options/${state.make}/${state.year}`
      )

      let arr = []
      for (let i in data) {
        let x = data[i]
        let objA = {
          id: x["id"],
          optionnum: x["optionnum"],
          desc: x["description"],
          // math values
          valuelow: x["valuelow"],
          valueavg: x["valueavg"],
          valuehigh: x["valuehigh"],
          valuepercent: x["valuepercent"],
          // display values
          vLd: null,
          vAd: null,
          vHd: null,
          vP: null,
        }
        arr.push(objA)
      }

      console.log(arr, "arr")

      dispatch({ type: "set_options", optionsList: data })
    }
  }, [state.make, state.year])

  const setSelectedOptions = useCallback(
    option => {
      const selected = state.selectedOptions.find(s => s.id === option.id)

      if (selected) {
        dispatch({
          type: "set_selected_options",
          selectedOptions: state.selectedOptions.filter(
            s => s.id !== option.id
          ),
        })
      } else {
        dispatch({
          type: "set_selected_options",
          selectedOptions: [...state.selectedOptions, option],
        })
      }
    },
    [state.selectedOptions]
  )

  const setSlugParameters = useMemo(() => {
    const reportObj = {
      make: state.make,
      makeLabel: state.makeLabel,
      model: state.model,
      year: state.year,
      trim: state.trim,
    }

    dispatch({ type: "set_params", slugParams: JSON.stringify(reportObj) })
  }, [state.make, state.makeLabel, state.model, state.year, state.trim])

  const setIsYear = useCallback(
    isYear => {
      setYear("")
      setMake("")
      setMakeLabel("")
      setModel("")
      setTrim("")
      dispatch({ type: "set_is_year", isYear })
    },
    [setYear, setMake, setMakeLabel, setModel, setTrim]
  )

  const resetForm = useCallback(() => {
    setYear("")
    setMake("")
    setMakeLabel("")
    setModel("")
    setTrim("")
  }, [setYear, setMake, setMakeLabel, setModel, setTrim])

  useEffect(() => {
    if (state.makeLabel && state.model && state.year) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: state.makeLabel,
          modelName: state.model.split(" ")[0],
          domain: "classiccarvalue.com",
          marketYear: parseInt(state.year),
        },
      }).then(({ data }) => {
        const res = data?.createMarketWidgetFromTaxonomyName?.data

        const chartUrl = res?.url
        const description = res?.market?.description

        dispatch({ type: "set_description", description })
        dispatch({ type: "set_chart", chartUrl })
      })
    }
  }, [state.makeLabel, state.model, state.year])

  useEffect(() => {
    if (error) {
      console.log(error, "provider")
    }
  }, [error])

  const contextValue = useMemo(
    () => ({
      ...state,
      isFormSubmitted,
      yearOptions,
      makeOptions,
      modelOptions,
      trimOptions,
      setIsYear,
      setYear,
      setMake,
      setMakeLabel,
      setModel,
      setTrim,
      setSlugParameters,
      setIsFormSubmitted,
      setRelatedVehicles,
      resetForm,
      getMakesByYear,
      getYearsByMake,
      getModelsByCompNumYear,
      getTrimsByMakeYearModel,
      getOptionPricingMods,
      setSelectedOptions,
    }),
    [
      state,
      isFormSubmitted,
      yearOptions,
      makeOptions,
      modelOptions,
      trimOptions,
      setIsYear,
      setYear,
      setMake,
      setMakeLabel,
      setModel,
      setTrim,
      setSlugParameters,
      setIsFormSubmitted,
      setRelatedVehicles,
      resetForm,
      getMakesByYear,
      getYearsByMake,
      getModelsByCompNumYear,
      getTrimsByMakeYearModel,
      getOptionPricingMods,
      setSelectedOptions,
    ]
  )

  return (
    <ACIContext.Provider value={contextValue}>{children}</ACIContext.Provider>
  )
}

export default ACIProvider
