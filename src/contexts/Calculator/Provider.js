import React, { useCallback, useMemo, useState } from "react"

import { CalculatorContext } from "."

const CalculatorProvider = ({ children }) => {
  const [isLoadingMake, setIsLoadingMake] = useState(false)
  const [isLoadingYear, setIsLoadingYear] = useState(false)

  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedVariant, setSelectedVariant] = useState("")
  const [selectedGeneration, setSelectedGeneration] = useState("")
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

  const resetForm = useCallback(() => {
    setSelectedMake("")
    setSelectedModel("")
    setSelectedYear(0)
    setSelectedVariant("")
    setSelectedGeneration("")
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
      selectedGeneration,
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
      setSelectedGeneration,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
      setStartYear,
      setEndYear,
      setClassicMakes,
      setMakes,
      setRelatedVehicles,
      resetForm,
    }),
    [
      isLoadingMake,
      isLoadingYear,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedGeneration,
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
      setSelectedGeneration,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
      setStartYear,
      setEndYear,
      setClassicMakes,
      setMakes,
      setRelatedVehicles,
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
