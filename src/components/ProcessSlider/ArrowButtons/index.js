import React from "react"
import { ArrowButtonsWrapper } from "../slider.styles"

const ArrowButtons = ({ isFirst, isLast, onPrev, onNext }) => (
  <ArrowButtonsWrapper>
    <button className={isFirst ? "first-item" : ""} onClick={onPrev}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.3333 16H6.66666M6.66666 16L16 25.3333M6.66666 16L16 6.66663"
          stroke="#101828"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <button className={isLast ? "last-item" : ""} onClick={onNext}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66666 16H25.3333M25.3333 16L16 6.66663M25.3333 16L16 25.3333"
          stroke="#101828"
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </ArrowButtonsWrapper>
)

export default ArrowButtons
