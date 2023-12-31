import React from "react"
import cpImage from "../../images/firebird-car.webp"
import {
  Content,
  ConversionPanelSection,
  ImageWrapper,
  TextBlock,
} from "./conversion.styles"

const ConversionPanel = ({ ctaButtonColor = "bg-red" }) => (
  <ConversionPanelSection>
    <div className="container p-0">
      <Content>
        <ImageWrapper>
          <img src={cpImage} alt="Conversion Panel" />
        </ImageWrapper>
        <TextBlock>
          <span className="kicker">Protect Your Passion</span>
          <p className="cp-title">#1 Rated Collector Car Insurance</p>
          <p className="cp-description">
            At American Collectors Insurance, we provide top-rated insurance for
            a wide variety of collectibles and collector’s items, including
            Agreed Value auto insurance for collector vehicles, classic cars,
            vintage cars, antique trucks and even classic motorcycles.
          </p>

          <a
            className={`cp-cta ${ctaButtonColor}`}
            href="https://member.americancollectors.com/quote-portal/home?type=collectorauto"
          >
            Get an Insurance Quote&nbsp;
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#344054"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </TextBlock>
      </Content>
    </div>
  </ConversionPanelSection>
)

export default ConversionPanel
