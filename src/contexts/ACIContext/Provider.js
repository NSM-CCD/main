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
          modelObjArr: data.filter(m => m.entryId === 1 || m.entryId === 5),
        })
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

  const getStandardDataByMakeYearModelTrim = useMemo(async () => {
    if (state.make && state.model && state.year && state.trim) {
      try {
        console.log("Fetching data...")
        const { data } = await aciClient.get(
          `/api/standard_table/${state.make}/${state.year}`
        )

        // NADA Pricing
        let standardPrice = []
        let standardPriceArr = []
        let listPrice = null
        const standardData = data
          .filter(m => m?.entryId === 1 || m?.entryId === 5)
          .filter(
            m =>
              m?.companynum === state.make &&
              m?.modelyear === state.year &&
              m?.modelcat === state.model &&
              m?.model === state.trim
          )
          .map(m => {
            const low = m?.valuelow
            const avg = m?.valueavg
            const high = m?.valuehigh

            // Sets standard price array for math in graph and table
            standardPrice.push(low, avg, high)

            const standardPriceObj = {
              low: low
                ? low.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              avg: avg
                ? avg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              high: high
                ? high.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
            }

            // standardPriceArr: Sets values for the table by pushing the above Object to an array
            standardPriceArr.push(standardPriceObj)

            // listPrice: Sets list price for a users final selection - display only, no math
            if (m?.valuelist === 0 || m?.valuelist === null) {
              listPrice = "n/a"
            } else {
              let num = m?.valuelist
              listPrice = num
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }

            return standardPriceObj
          })

        // @Todo remove before deploy - for testing purpose
        console.log(standardPrice, "standard Price")
        console.log(standardPriceArr, "standard Price array")
        console.log(listPrice)

        dispatch({ type: "set_standard_price", standardPrice })
        dispatch({ type: "set_standard_price_array", standardPriceArr })
        dispatch({ type: "set_list_price", listPrice })

        // OCW
        let ocwStandardPrice = []
        let ocwStandardPriceArr = []
        let ocwListPrice = null

        const ocwData = data
          .filter(m => m?.entryId === 2)
          .filter(
            m =>
              m?.companynum === state.make &&
              m?.modelyear === state.year &&
              m?.modelcat === state.model &&
              m?.model === state.trim
          )
          .map(m => {
            const low = m?.valuelow
            const lowavg = m?.valuelowavg
            const avg = m?.valueavg
            const highavg = m?.valuehighavg
            const high = m?.valuehigh

            // Sets OCW - standard price array for math in graph and table
            ocwStandardPrice.push(low, lowavg, avg, highavg, high)

            const ocwStandardPriceObj = {
              low: low
                ? low.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              midavg: lowavg
                ? lowavg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              avg: avg
                ? avg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              midhavg: highavg
                ? highavg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              high: high
                ? high.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
            }

            // standardPriceArr: Sets values for the table by pushing the above Object to an array
            ocwStandardPriceArr.push(ocwStandardPriceObj)

            // listPrice: Sets list price for a users final selection - display only, no math
            if (m?.valuelist === 0 || m?.valuelist == null) {
              ocwListPrice = "n/a"
            } else {
              let num = m?.valuelist
              ocwListPrice = num
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }

            return ocwStandardPriceObj
          })

        // @Todo remove before deploy - for testing purpose
        console.log(ocwStandardPrice, "standard Price")
        console.log(ocwStandardPriceArr, "standard Price array")
        console.log(ocwListPrice)

        dispatch({ type: "set_ocw_standard_price", ocwStandardPrice })
        dispatch({ type: "set_ocw-standard_price_array", ocwStandardPriceArr })
        dispatch({ type: "set_ocw_list_price", ocwListPrice })

        // VMR
        let vmrStandardPrice = []
        let vmrStandardPriceArr = []
        let vmrListPrice = null

        const vmrData = data
          .filter(m => m?.entryId === 3 || m?.entryId === 4)
          .filter(
            m =>
              m?.companynum === state.make &&
              m?.modelyear === state.year &&
              m?.modelcat === state.model &&
              m?.model === state.trim
          )
          .map(m => {
            const low = m?.valuelow
            const lowavg = m?.valuelowavg
            const avg = m?.valueavg
            const highavg = m?.valuehighavg
            const high = m?.valuehigh

            // Sets VMR - standard price array for math in graph and table
            if (m?.entryId === 3) {
              vmrStandardPrice.push(low, lowavg, highavg, high)
            } else if (m?.entryId === 4) {
              vmrStandardPrice.push(low, lowavg, avg, highavg, high)
            }

            const vmrStandardPriceObj = {
              low: low
                ? low.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              midavg: lowavg
                ? lowavg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              midhavg: highavg
                ? highavg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
              high: high
                ? high.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                : "N/A",
            }

            if (m?.entryId === 3) {
              vmrStandardPriceObj.avg = null
            } else if (m?.entryId === 4) {
              vmrStandardPriceObj.avg = avg
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }

            // standardPriceArr: Sets values for the table by pushing the above Object to an array
            vmrStandardPriceArr.push(vmrStandardPriceObj)

            // listPrice: Sets list price for a users final selection - display only, no math
            if (m?.valuelist === 0 || m?.valuelist === null) {
              vmrListPrice = "n/a"
            } else {
              let num = m?.valuelist
              vmrListPrice = num
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
            }

            // @Todo remove before deploy - for testing purpose
            console.log(vmrStandardPrice, "standard Price")
            console.log(vmrStandardPriceArr, "standard Price array")
            console.log(vmrListPrice)

            dispatch({ type: "set_vmr_standard_price", vmrStandardPrice })
            dispatch({
              type: "set_vmr-standard_price_array",
              vmrStandardPriceArr,
            })
            dispatch({ type: "set_vmr_list_price", vmrListPrice })

            return vmrStandardPriceObj
          })

        dispatch({ type: "set_nada", standardNADA: standardData })
        dispatch({ type: "set_ocw", standardOCW: ocwData })
        dispatch({ type: "set_vmr", standardVMR: vmrData })
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
  }, [state.make, state.model, state.year, state.trim])

  const getOptionPricingMods = useMemo(async () => {
    if (state.make && state.year) {
      const { data } = await aciClient.get(
        `/api/nada_raw_options/${state.make}/${state.year}`
      )

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
      //listOptions,
      getStandardDataByMakeYearModelTrim,
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
      //listOptions,
      getStandardDataByMakeYearModelTrim,
      setSelectedOptions,
    ]
  )

  return (
    <ACIContext.Provider value={contextValue}>{children}</ACIContext.Provider>
  )
}

export default ACIProvider
