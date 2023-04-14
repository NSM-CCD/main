import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"
import ConversionIntegration from "../components/CoversionIntegration"
import ResultsMain from "../components/ResultsComponents"
import { useContext, useEffect } from "react"
import { ACIContext } from "../contexts/ACIContext"

const ResultsPage = props => {
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
    setTrim,
  ])

  return (
    <Layout ctaBackgroundColor="bg-red">
      <ResultsMain />
      <ConversionPanel ctaButtonColor="bg-red" />
      <ConversionIntegration />
    </Layout>
  )
}

export default ResultsPage

export const Head = () => <Seo title="Results" />
