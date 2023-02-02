import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"
import ConversionIntegration from "../components/CoversionIntegration"
import ResultsMain from "../components/ResultsComponents"
import { useMediaQuery } from "../utils/useMediaQuery"
import { useContext, useEffect } from "react"
import { ACIContext } from "../contexts/ACIContext"

const ResultsPage = props => {
  const isTablet = useMediaQuery("(min-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 992px)")

  const {
    make,
    model,
    year,
    setMake,
    setMakeLabel,
    setModel,
    setTrim,
    setYear,
  } = useContext(ACIContext)

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

    if (reportsData && !make && !model && !year) {
      const rData = JSON.parse(atob(reportsData))

      setMake(rData?.make)
      setMakeLabel(rData?.makeLabel)
      setModel(rData?.model)
      setYear(parseInt(rData?.year))
      setTrim(rData?.trim)
    }
  }, [
    make,
    model,
    year,
    props?.location?.search,
    setMake,
    setMakeLabel,
    setModel,
    setYear,
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
