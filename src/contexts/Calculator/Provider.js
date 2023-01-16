import React, { useCallback, useEffect, useMemo, useState } from "react"

import { CalculatorContext } from "."
import { useMutation } from "@apollo/client"
import { MARKET_WIDGET } from "../../graphqlQueries/queries"

const CalculatorProvider = ({ children }) => {
  const [isLoadingMake, setIsLoadingMake] = useState(false)

  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedVariant, setSelectedVariant] = useState("")
  const [selectedGeneration, setSelectedGeneration] = useState("")
  const [selectedTrim, setSelectedTrim] = useState("")
  const [chartUrl, setChartUrl] = useState("")
  const [parentChartUrl, setParentChartUrl] = useState("")
  const [description, setDescription] = useState("")

  const [classicMakes, setClassicMakes] = useState([])
  const [makes, setMakes] = useState([])
  const [relatedVehicles, setRelatedVehicles] = useState([])

  const [createMarketWidgetFromTaxonomyName, { data, error }] =
    useMutation(MARKET_WIDGET)

  useEffect(() => {
    if (
      selectedMake &&
      selectedModel &&
      (selectedGeneration || selectedVariant)
    ) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: selectedMake,
          modelName: selectedModel,
          domain: "classiccarvalue.com",
          modelGenerationName: selectedGeneration,
          modelVariantName: selectedVariant,
          marketYear: parseInt(selectedYear),
        },
      }).then()
    }
  }, [
    selectedMake,
    selectedModel,
    selectedGeneration,
    selectedVariant,
    selectedYear,
  ])

  useEffect(() => {
    if (data) {
      console.log(data, "provider data")
      const chartUrl = data?.createMarketWidgetFromTaxonomyName?.data?.url

      const description =
        data?.createMarketWidgetFromTaxonomyName?.data?.description

      setDescription(description)
      setChartUrl(chartUrl)
    }

    if (error) {
      console.log(error, "provider")
    }
  }, [data, error])

  const resetForm = useCallback(() => {
    setSelectedMake("")
    setSelectedModel("")
    setSelectedYear("")
    setSelectedVariant("")
    setSelectedGeneration("")
    setSelectedTrim("")
    setRelatedVehicles([])
    setChartUrl("")
    setParentChartUrl("")
    setDescription("")
  }, [])

  const contextValue = useMemo(
    () => ({
      isLoadingMake,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedGeneration,
      selectedTrim,
      selectedYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      classicMakes,
      makes,
      setIsLoadingMake,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
      setSelectedGeneration,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
      setClassicMakes,
      setMakes,
      setRelatedVehicles,
      resetForm,
    }),
    [
      isLoadingMake,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedGeneration,
      selectedTrim,
      selectedYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      classicMakes,
      makes,
      setIsLoadingMake,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
      setSelectedGeneration,
      setSelectedTrim,
      setChartUrl,
      setParentChartUrl,
      setDescription,
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
