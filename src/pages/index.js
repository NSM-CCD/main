import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/HeroNew"
import OffsetGrid from "../components/OffsetGrid"
import ConversionPanel from "../components/ConversionPanel"
import ProcessSlider from "../components/ProcessSlider"

const IndexPage = () => (
  <Layout ctaBackgroundColor="bg-red">
    <Hero />
    <OffsetGrid />
    <ProcessSlider />
    <ConversionPanel />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
