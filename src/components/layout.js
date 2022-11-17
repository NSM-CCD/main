import * as React from "react"
import { ToastContainer } from "react-toastify"

import Header from "./Header"
import Footer from "./Footer"
import "../styles/layout.scss"
import "react-toastify/dist/ReactToastify.min.css"

const Layout = ({ ctaBackgroundColor = "bg-white", children }) => (
  <div className="container-fluid p-0">
    <Header ctaBackgroundColor={ctaBackgroundColor} />
    <main>{children}</main>
    <Footer />
    <ToastContainer />
  </div>
)

export default Layout
