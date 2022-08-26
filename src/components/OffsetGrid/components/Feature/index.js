import React from "react"
import styled from "styled-components"
import {
  RalewayNormalFiord18px,
  RalewaySemiBoldMirage18px,
} from "../../styledMixins"

const Feature = props => {
  const { marketValue, determinedAnalyzing } = props

  return (
    <Feature1>
      <CheckIcon src="https://anima-uploads.s3.amazonaws.com/projects/6304543bed0f464ca51d71c4/releases/6304555debf35aa1bab5d228/img/check-icon@2x.svg" />
      <TextContent>
        <MarketValue>{marketValue}</MarketValue>
        <DeterminedAnalyzing>{determinedAnalyzing}</DeterminedAnalyzing>
      </TextContent>
    </Feature1>
  )
}

const Feature1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  align-items: flex-start;
  gap: 32px;
`

const CheckIcon = styled.img`
  min-width: 32px;
  height: 32px;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

const MarketValue = styled.div`
  ${RalewaySemiBoldMirage18px}
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`

const DeterminedAnalyzing = styled.div`
  ${RalewayNormalFiord18px}
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
`

export default Feature
