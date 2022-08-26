import React from "react"
import Feature from "../Feature"
import styled from "styled-components"

const Frame1 = props => {
  const { feature1Props, feature2Props } = props

  return (
    <Frame11>
      <Feature
        marketValue={feature1Props.marketValue}
        determinedAnalyzing={feature1Props.determinedAnalyzing}
      />
      <Feature
        marketValue={feature2Props.marketValue}
        determinedAnalyzing={feature2Props.determinedAnalyzing}
      />
    </Frame11>
  )
}

const Frame11 = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  flex-flow: column nowrap;
  gap: 32px;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
  }
`

export default Frame1
