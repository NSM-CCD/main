import React, { useCallback, useMemo, useState } from "react"

import { CalculatorContext } from "."
import aciClient from "../../utils/aciClient"

const CalculatorProvider = ({ children }) => {
  const [isLoadingMake, setIsLoadingMake] = useState(false)
  const [isLoadingYear, setIsLoadingYear] = useState(false)

  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedVariant, setSelectedVariant] = useState("")
  const [selectedTrim, setSelectedTrim] = useState("")
  const [chartUrl, setChartUrl] = useState("")
  const [parentChartUrl, setParentChartUrl] = useState("")
  const [description, setDescription] = useState("")
  const [currentMarketId, setMarketId] = useState(null)
  const [startYear, setStartYear] = useState(0)
  const [endYear, setEndYear] = useState(0)

  const [classicMakes, setClassicMakes] = useState([])
  const [makes, setMakes] = useState([])
  const [relatedVehicles, setRelatedVehicles] = useState([])

  const fetchMarket = useCallback(async marketId => {
    // by pass cors issue with just cors - temporary solution
    //https://justcors.com/l_42d5nkpzh3g/
    await aciClient
      .get(
        `https://justcors.com/l_42d5nkpzh3g/https://api.classic.com/api/search_vehicles/insights/?markets__in=${marketId}`
      )
      .then(({ data }) => {
        console.log(data, "testing aci client")
        const yearStart = data?.market?.model_year_start
        const yearEnd = data?.market?.model_year_end
        if (yearStart && yearEnd) {
          setStartYear(yearStart)
          setEndYear(yearEnd)
        }
      })
      .catch(err => console.log(err, "error inside Provider"))
  }, [])

  const resetForm = useCallback(() => {
    setSelectedMake("")
    setSelectedModel("")
    setSelectedYear(0)
    setSelectedVariant("")
    setSelectedTrim("")
    setRelatedVehicles([])
    setChartUrl("")
    setParentChartUrl("")
    setDescription("")
    setStartYear(0)
    setEndYear(0)
    setMarketId(null)
  }, [])

  const contextValue = useMemo(
    () => ({
      isLoadingMake,
      isLoadingYear,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedTrim,
      selectedYear,
      startYear,
      endYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      currentMarketId,
      classicMakes,
      makes,
      setIsLoadingMake,
      setIsLoadingYear,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
      setStartYear,
      setEndYear,
      setClassicMakes,
      setMakes,
      setRelatedVehicles,
      setMarketId,
      fetchMarket,
      resetForm,
    }),
    [
      isLoadingMake,
      isLoadingYear,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedTrim,
      selectedYear,
      startYear,
      endYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      currentMarketId,
      classicMakes,
      makes,
      setIsLoadingMake,
      setIsLoadingYear,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
      setStartYear,
      setEndYear,
      setClassicMakes,
      setMakes,
      setRelatedVehicles,
      setMarketId,
      fetchMarket,
      resetForm,
    ]
  )

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  )
}

export default CalculatorProvider
