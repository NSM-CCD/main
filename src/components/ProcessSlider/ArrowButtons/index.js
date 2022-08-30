import React from "react"
import prevArrow from "../../../images/icons/arrow-left.svg"
import nextArrow from "../../../images/icons/arrow-right.svg"
import { ArrowButtonsWrapper } from "../slider.styles"

const ArrowButtons = ({ onPrev, onNext }) => (
  <ArrowButtonsWrapper>
    <button onClick={onPrev}>
      <img src={prevArrow} alt="Previous Arrow" />
    </button>
    <button onClick={onNext}>
      <img src={nextArrow} alt="Next Arrow" />
    </button>
  </ArrowButtonsWrapper>
)

export default ArrowButtons
