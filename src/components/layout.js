import * as React from "react"

import Header from "./Header"
import "../styles/layout.scss"
import Footer from "./Footer"

const Layout = ({ ctaBackgroundColor = "bg-white", children }) => (
  <div className="container-fluid p-0">
    <Header ctaBackgroundColor={ctaBackgroundColor} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
