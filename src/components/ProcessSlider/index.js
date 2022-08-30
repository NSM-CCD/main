import React, { useCallback, useRef } from "react"
import SlidesContent from "./Slides"
import ArrowButtons from "./ArrowButtons"
import { Content, HeadingBlock, ProcessSliderSection } from "./slider.styles"

const ProcessSlider = () => {
  const sliderRef = useRef()

  const handlePrev = useCallback(
    () => sliderRef?.current?.slickPrev(),
    [sliderRef]
  )
  const handleNext = useCallback(
    () => sliderRef?.current?.slickNext(),
    [sliderRef]
  )

  return (
    <ProcessSliderSection>
      <div className="p-0">
        <Content>
          <div className="container p-0">
            <HeadingBlock>
              <span className="kicker">Our Process</span>
              <div className="wrapper">
                <p className="heading">
                  From consultation to <span>insured</span>.
                </p>

                <div className="arrows">
                  <ArrowButtons onNext={handleNext} onPrev={handlePrev} />
                </div>
              </div>
            </HeadingBlock>
          </div>
          <div className="container d-container">
            <SlidesContent ref={sliderRef} />
          </div>
          <div className="m-arrows container p-0">
            <ArrowButtons onNext={handleNext} onPrev={handlePrev} />
          </div>
        </Content>
      </div>
    </ProcessSliderSection>
  )
}

export default ProcessSlider
