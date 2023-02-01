import React, { useCallback, useRef, useState } from "react"
import SlidesContent from "./Slides"
import ArrowButtons from "./ArrowButtons"
import { Content, HeadingBlock, ProcessSliderSection } from "./slider.styles"
import { processObj } from "../HeroNew/helpers"

const ProcessSlider = () => {
  const [isFirst, setFirst] = useState(true)
  const [isLast, setLast] = useState(false)

  const sliderRef = useRef()

  const handlePrev = useCallback(() => sliderRef?.current?.slickPrev(), [])
  const handleNext = useCallback(() => sliderRef?.current?.slickNext(), [])

  const handleBeforeChange = useCallback((prev, next) => {
    setFirst(next === 0)
    setLast(next === processObj.length - 1)
  }, [])

  return (
    <ProcessSliderSection>
      <div className="p-0">
        <Content>
          <div className="container p-0">
            <HeadingBlock>
              <span className="kicker">Our Process</span>
              <div className="wrapper">
                <p className="heading">
                  From Valuation to Protection with&nbsp;
                  <span>Top-Rated Customer Service</span>.
                </p>

                <div className="arrows">
                  <ArrowButtons
                    isFirst={isFirst}
                    isLast={isLast}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
                </div>
              </div>
            </HeadingBlock>
          </div>
          <div className="container d-container">
            <SlidesContent ref={sliderRef} beforeChange={handleBeforeChange} />
          </div>
          <div className="m-arrows container p-0">
            <ArrowButtons
              isFirst={isFirst}
              isLast={isLast}
              onNext={handleNext}
              onPrev={handlePrev}
            />
          </div>
        </Content>
      </div>
    </ProcessSliderSection>
  )
}

export default ProcessSlider
