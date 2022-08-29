import React from "react"
import cpImage from "../../images/firebird-car.webp"
import arrowRight from "../../images/icons/chevron-right.svg"
import {
  Content,
  ConversionPanelSection,
  ImageWrapper,
  TextBlock,
} from "./conversion.styles"

const ConversionPanel = () => (
  <ConversionPanelSection>
    <div className="container p-0">
      <Content>
        <ImageWrapper>
          <img src={cpImage} alt="Conversion Panel" />
        </ImageWrapper>
        <TextBlock>
          <span className="kicker">Need Insurance</span>
          <p className="cp-title">Insurance for Any Collector</p>
          <p className="cp-description">
            At American Collectors Insurance, we provide top-rated insurance for
            a wide variety of collectibles and collector’s items, including
            Agreed Value auto insurance for collector vehicles, classic cars,
            vintage cars, antique trucks and even classic motorcycles.
          </p>

          <button className="cp-cta">
            Get Insured <img src={arrowRight} alt="arrow right" />
          </button>
        </TextBlock>
      </Content>
    </div>
  </ConversionPanelSection>
)

export default ConversionPanel
