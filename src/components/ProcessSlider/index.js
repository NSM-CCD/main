import React, { useCallback, useRef, useState } from "react"
import SlidesContent from "./Slides"
import ArrowButtons from "./ArrowButtons"
import { Content, HeadingBlock, ProcessSliderSection } from "./slider.styles"

const ProcessSlider = () => {
  const [idx, setIndex] = useState(0)

  const sliderRef = useRef()

  const handlePrev = useCallback(
    () => sliderRef?.current?.slickPrev(),
    [sliderRef]
  )
  const handleNext = useCallback(
    () => sliderRef?.current?.slickNext(),
    [sliderRef]
  )

  const handleBeforeChange = (prev, next) => {
    console.log(prev, next)
    setIndex(next)
  }

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
            <SlidesContent ref={sliderRef} beforeChange={handleBeforeChange} />
          </div>
          <div className="m-arrows container p-0">
            <ArrowButtons idx={idx} onNext={handleNext} onPrev={handlePrev} />
          </div>
        </Content>
      </div>
    </ProcessSliderSection>
  )
}

export default ProcessSlider
