import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"
import ResultsMain from "../components/ResultsComponents"

const ResultsPage = props => {
  return (
    <Layout ctaBackgroundColor="bg-red">
      <Seo title="Home" />
      <ResultsMain
        carName="1999 Acura NSX"
        model={props?.location?.state?.model}
      />
      <ConversionPanel ctaButtonColor="bg-red" />
    </Layout>
  )
}

export default ResultsPage
