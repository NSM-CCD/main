import React, { useCallback, useContext, useMemo, useState } from "react"
import CircleIcon from "./CircleIcon"
import CircleActive from "./CircleActive"
import { ACIContext } from "../../../contexts/ACIContext"

const Features = () => {
  const { optionsList, selectedOptions, setSelectedOptions } =
    useContext(ACIContext)

  const handleActive = useCallback(
    option => setSelectedOptions(option),
    [setSelectedOptions]
  )

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  const list = useMemo(
    () =>
      optionsList?.length > 0 &&
      optionsList.map(option => {
        const selected = selectedOptions.find(s => s.id === option.id)

        return (
          <div
            key={option.id}
            className={`features-items ${selected ? "active" : ""}`}
            onClick={() => handleActive(option)}
          >
            <div className="content">
              <p className="item-title">{option.description}</p>
              {/*<span className="item-description">Basic Package</span>*/}
            </div>
            {selected ? <CircleActive /> : <CircleIcon />}
          </div>
        )
      }),
    [optionsList, selectedOptions, handleActive]
  )

  const featuresSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return <div className="items-wrapper">{list}</div>
  }, [isExpanded, list])

  return (
    <div className="features-block">
      <div className="features-collapse">
        <p className="features-title">
          Does your vehicle contain any non-standard features?
        </p>
        <button
          onClick={toggleExpand}
          className={`features-collapse-button ${isExpanded ? "active" : ""}`}
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
      </div>

      {featuresSection}
    </div>
  )
}

export default Features
