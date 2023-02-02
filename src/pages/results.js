import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"
import ConversionIntegration from "../components/CoversionIntegration"
import ResultsMain from "../components/ResultsComponents"
import { useMediaQuery } from "../utils/useMediaQuery"
import { useContext, useEffect } from "react"
import { CalculatorContext } from "../contexts/Calculator"

const ResultsPage = props => {
  const isTablet = useMediaQuery("(min-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 992px)")

  const {
    selectedMake,
    selectedModel,
    setSelectedMake,
    setSelectedModel,
    setSelectedYear,
    setSelectedVariant,
    setRelatedVehicles,
  } = useContext(CalculatorContext)

  let ctaColor

  if (isDesktop) {
    ctaColor = "bg-red"
  } else if (isTablet) {
    ctaColor = "bg-blue"
  } else {
    ctaColor = "bg-white"
  }

  useEffect(() => {
    const params = new URLSearchParams(props?.location?.search)
    const reportsData = params.get("rdata")

    if (reportsData && !selectedMake && !selectedModel) {
      const rData = JSON.parse(atob(reportsData))

      setSelectedMake(rData?.make)
      setSelectedModel(rData?.model)
      setSelectedYear(parseInt(rData?.year))

      if (rData?.variant) {
        setSelectedVariant(rData.variant)
      }

      if (rData?.relatedVehicles) {
        setRelatedVehicles(rData.relatedVehicles)
      }
    }
  }, [
    selectedMake,
    selectedModel,
    props?.location?.search,
    setSelectedMake,
    setSelectedModel,
    setSelectedYear,
    setSelectedVariant,
    setRelatedVehicles,
  ])

  return (
    <Layout ctaBackgroundColor={ctaColor}>
      <Seo title="Home" />
      <ResultsMain />
      <ConversionPanel ctaButtonColor="bg-red" />
      <ConversionIntegration />
    </Layout>
  )
}

export default ResultsPage
