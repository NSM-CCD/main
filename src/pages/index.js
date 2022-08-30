import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import OffsetGrid from "../components/OffsetGrid"
import ConversionPanel from "../components/ConversionPanel"
import ProcessSlider from "../components/ProcessSlider"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <OffsetGrid />
    <ProcessSlider />
    <ConversionPanel />
  </Layout>
)

export default IndexPage
