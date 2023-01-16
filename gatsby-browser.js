import React from "react"

import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CalculatorProvider from "./src/contexts/Calculator/Provider"

export const wrapPageElement = ({ element, props }) => (
  <CalculatorProvider {...props}>{element}</CalculatorProvider>
)
