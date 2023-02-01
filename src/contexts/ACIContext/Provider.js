import React, { useCallback, useMemo, useReducer } from "react"
import { ACIContext } from "."
import aciClient from "../../utils/aciClient"
import { reducer, initialState } from "./reducer"
import { getYears, makesDB } from "../../components/HeroNew/helpers"

const ACIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setYear = useCallback(year => dispatch({ type: "set_year", year }), [])
  const setMake = useCallback(make => dispatch({ type: "set_make", make }), [])
  const setModel = useCallback(
    model => dispatch({ type: "set_model", model }),
    []
  )
  const setTrim = useCallback(trim => dispatch({ type: "set_trim", trim }), [])

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
    if (state.model && state.modelObjArr) {
      let trimList = []
      state.modelObjArr.forEach(trim => {
        if (trim.entryId === 1 || trim.entryId === 5) {
          if (!trimList.includes(trim.model)) trimList.push(trim.model)
        }
      })
      return trimList
    }
    return []
  }, [state.model, state.modelObjArr])

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
        dispatch({ type: "set_model_obj", modelObjArr: data })
        data.forEach(model => {
          if (model?.entryId === 1 || model?.entryId === 5) {
            if (!modelOptions.includes(model?.modelcat))
              modelOptions.push(model?.modelcat)
          }
        })
      }
      // model options "Select model"
      dispatch({ type: "set_models", modelList: modelOptions })
    }
  }, [state.make, state.year])

  const getTrimsByMakeYearModel = useCallback(
    async (companyNum, year, modelCat) =>
      await aciClient.get(
        `/api/standard_table/${companyNum}/${year}/${modelCat}`
      ),
    []
  )

  const getOptionPricingMods = useCallback(
    async (companyNum, year) =>
      await aciClient.get(`/api/nada_raw_options/${companyNum}/${year}`),
    []
  )

  const setIsYear = useCallback(
    isYear => {
      setYear("")
      setMake("")
      setModel("")
      setTrim("")
      dispatch({ type: "set_is_year", isYear })
    },
    [setYear, setMake, setModel, setTrim]
  )

  const resetForm = useCallback(() => {
    setYear("")
    setMake("")
    setModel("")
    setTrim("")
  }, [setYear, setMake, setModel, setTrim])

  const contextValue = useMemo(
    () => ({
      ...state,
      yearOptions,
      makeOptions,
      modelOptions,
      trimOptions,
      setIsYear,
      setYear,
      setMake,
      setModel,
      setTrim,
      resetForm,
      getMakesByYear,
      getYearsByMake,
      getModelsByCompNumYear,
      getTrimsByMakeYearModel,
      getOptionPricingMods,
    }),
    [
      state,
      yearOptions,
      makeOptions,
      modelOptions,
      trimOptions,
      setIsYear,
      setYear,
      setMake,
      setModel,
      setTrim,
      resetForm,
      getMakesByYear,
      getYearsByMake,
      getModelsByCompNumYear,
      getTrimsByMakeYearModel,
      getOptionPricingMods,
    ]
  )

  return (
    <ACIContext.Provider value={contextValue}>{children}</ACIContext.Provider>
  )
}

export default ACIProvider
