import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"
import ConversionIntegration from "../components/CoversionIntegration"
import ResultsMain from "../components/ResultsComponents"
import { useMediaQuery } from "../utils/useMediaQuery"

const ResultsPage = props => {
  const isTablet = useMediaQuery("(min-width: 768px)")
  const isDesktop = useMediaQuery("(min-width: 992px)")

  let ctaColor

  if (isDesktop) {
    ctaColor = "bg-red"
  } else if (isTablet) {
    ctaColor = "bg-blue"
  } else {
    ctaColor = "bg-white"
  }

  return (
    <Layout ctaBackgroundColor={ctaColor}>
      <Seo title="Home" />
      <ResultsMain
        carName={props?.location?.state?.carName}
        model={props?.location?.state?.model}
        makeName={props?.location?.state?.makeName}
        modelName={props?.location?.state?.modelName}
      />
      <ConversionPanel ctaButtonColor="bg-red" />
      <ConversionIntegration />
    </Layout>
  )
}

export default ResultsPage
