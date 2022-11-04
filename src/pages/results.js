import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConversionPanel from "../components/ConversionPanel"

const ResultsPage = () => (
  <Layout ctaBackgroundColor="bg-red">
    <Seo title="Home" />
    <ConversionPanel ctaButtonColor="bg-red" />
  </Layout>
)

export default ResultsPage
