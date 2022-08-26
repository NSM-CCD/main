import React from "react"
import Footer2 from "./components/Footer2"

const Footer = () => <Footer2 topperProps={footer2Data.topperProps} />

export default Footer

const linkColumnData = {
  classiccarsCom: "Classiccars.com",
}

const linksData = {
  linkColumnProps: linkColumnData,
}

const topperData = {
  linksProps: linksData,
}

const footer2Data = {
  topperProps: topperData,
}
