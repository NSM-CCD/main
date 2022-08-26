import React from "react"
import FeatureGrid2 from "./components/FeatureGrid2"

const OffsetGrid = () => (
  <FeatureGrid2
    headingKicker="Top-tier Analysis"
    spanText1="Not just another "
    spanText2="valuation tool"
    spanText3="."
    howMuchIsYourCla="Information is power. American Collectors Insurance has partnered with experienced valuation experts like NADA and VMR Auto Guides to create a better classic car valuation tool."
    containerProps={featureGrid2Data.containerProps}
  />
)

export default OffsetGrid

const feature1Data = {
  marketValue: "Market Value",
  determinedAnalyzing:
    "Determined analyzing supply and demand, using historical sale prices and/or current asking prices on available inventory.",
}

const feature2Data = {
  marketValue: "Compare Sources",
  determinedAnalyzing:
    "Comparing results from multiple valuation sources will help develop a more accurate value estimate for your collector car!",
}

const frame11Data = {
  feature1Props: feature1Data,
  feature2Props: feature2Data,
}

const feature3Data = {
  marketValue: "Accurate Valuations",
  determinedAnalyzing:
    "No single valuation source can precisely determine a classic car’s value.",
}

const feature4Data = {
  marketValue: "Sales Background",
  determinedAnalyzing:
    "70% of classic / antique cars are sold through private party sales, 20% through auctions and 10% through dealerships.",
}

const frame12Data = {
  feature1Props: feature3Data,
  feature2Props: feature4Data,
}

const containerData = {
  frame11Props: frame11Data,
  frame12Props: frame12Data,
}

const featureGrid2Data = {
  containerProps: containerData,
}
