import React from "react"
import Container from "../Container"
import styled from "styled-components"
import {
  RalewayNormalFiord20px,
  RalewayBoldHippieBlue16px,
} from "../../styledMixins"

const FeatureGrid2 = props => {
  const {
    headingKicker,
    spanText1,
    spanText2,
    howMuchIsYourCla,
    containerProps,
  } = props

  return (
    <FeatureGrid>
      <Frame3 className="container p-0 p-md-4">
        <Content>
          <HeadingKicker>{headingKicker}</HeadingKicker>
          <SearchForAClassicCarValue>
            {spanText1} <span>{spanText2}</span>.
          </SearchForAClassicCarValue>
          <HowMuchIsYourCla>{howMuchIsYourCla}</HowMuchIsYourCla>
        </Content>
        <Container
          frame11Props={containerProps.frame11Props}
          frame12Props={containerProps.frame12Props}
        />
      </Frame3>
    </FeatureGrid>
  )
}

const FeatureGrid = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 24px;
  max-width: 100%;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 80px 24px;
  }

  @media (min-width: 992px) {
    padding: 96px 24px;
  }
`

const Frame3 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  flex-flow: column nowrap;
  gap: 48px;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 100%;
  max-width: 500px;
`

const HeadingKicker = styled.div`
  ${RalewayBoldHippieBlue16px};
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`

const SearchForAClassicCarValue = styled.h2`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }

  span {
    color: var(--hippie-blue);
  }
`

const HowMuchIsYourCla = styled.div`
  ${RalewayNormalFiord20px};
  align-self: stretch;
  letter-spacing: 0;
  line-height: 30px;
`

export default FeatureGrid2
