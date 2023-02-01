import React from "react"

import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ACIProvider from "./src/contexts/ACIContext/Provider"

export const wrapPageElement = ({ element, props }) => (
  <ACIProvider {...props}>{element}</ACIProvider>
)
