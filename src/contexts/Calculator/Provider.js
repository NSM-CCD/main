import React, { useCallback, useEffect, useMemo, useState } from "react"

import { CalculatorContext } from "."
import { useMutation } from "@apollo/client"
import { MARKET_WIDGET } from "../../graphqlQueries/queries"

const CalculatorProvider = ({ children }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isLoadingMake, setIsLoadingMake] = useState(false)

  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMake, setSelectedMake] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedVariant, setSelectedVariant] = useState("")
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
    if (selectedMake && selectedModel && selectedVariant) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: selectedMake,
          modelName: selectedModel,
          domain: "classiccarvalue.com",
          modelVariantName: selectedVariant,
          marketYear: parseInt(selectedYear),
        },
      }).then()
    }
  }, [selectedMake, selectedModel, selectedVariant, selectedYear])

  useEffect(() => {
    if (data) {
      const chartUrl = data?.createMarketWidgetFromTaxonomyName?.data?.url

      const description =
        data?.createMarketWidgetFromTaxonomyName?.data?.market?.description

      setDescription(description)
      setChartUrl(chartUrl)
    }

    if (error) {
      console.log(error)
    }
  }, [data, error])

  const slugParams = useMemo(() => {
    const reportObj = {
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
    }

    if (selectedVariant) {
      reportObj["variant"] = selectedVariant
    }

    if (relatedVehicles?.length > 0) {
      reportObj["relatedVehicles"] = relatedVehicles
    }

    return JSON.stringify(reportObj)
  }, [
    selectedMake,
    selectedModel,
    selectedYear,
    selectedVariant,
    relatedVehicles,
  ])

  const resetForm = useCallback(() => {
    setSelectedMake("")
    setSelectedModel("")
    setSelectedYear("")
    setSelectedVariant("")
    setSelectedTrim("")
    setRelatedVehicles([])
    setChartUrl("")
    setParentChartUrl("")
    setDescription("")
  }, [
    setSelectedMake,
    setSelectedModel,
    setSelectedYear,
    setSelectedVariant,
    setRelatedVehicles,
    setChartUrl,
    setDescription,
    setParentChartUrl,
  ])

  const contextValue = useMemo(
    () => ({
      isFormSubmitted,
      isLoadingMake,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedTrim,
      selectedYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      classicMakes,
      makes,
      slugParams,
      setIsFormSubmitted,
      setIsLoadingMake,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
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
      isFormSubmitted,
      isLoadingMake,
      selectedMake,
      selectedModel,
      selectedVariant,
      selectedTrim,
      selectedYear,
      relatedVehicles,
      chartUrl,
      parentChartUrl,
      description,
      classicMakes,
      makes,
      slugParams,
      setIsFormSubmitted,
      setIsLoadingMake,
      setSelectedYear,
      setSelectedMake,
      setSelectedModel,
      setSelectedVariant,
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
