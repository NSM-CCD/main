import React from "react"

const ButtonChevron = ({ isExpanded, onToggleExpand, className }) => (
  <button
    onClick={onToggleExpand}
    className={`${className} ${isExpanded ? "active" : ""}`}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15L12 9L6 15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

export default ButtonChevron
