import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import OffsetGrid from "../components/OffsetGrid"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <OffsetGrid />
  </Layout>
)

export default IndexPage
