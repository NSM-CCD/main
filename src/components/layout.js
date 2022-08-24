import * as React from "react"

import Header from "./Header"
import "../styles/layout.scss"

const Layout = ({ ctaBackgroundColor = "bg-white", children }) => (
  <div className="container-fluid p-0">
    <Header ctaBackgroundColor={ctaBackgroundColor} />
    <main>{children}</main>
  </div>
)

export default Layout
