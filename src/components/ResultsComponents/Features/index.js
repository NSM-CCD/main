import React, {
  useCallback,
  useContext,
  useMemo,
  useState,
  useLayoutEffect,
} from "react"
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
  const [arrowTransform, setArrowTransform] = useState("rotate(270 0 0)")

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useLayoutEffect(() => {
    setArrowTransform(isExpanded ? "rotate(90 0 0)" : "rotate(270 0 0)")
  }, [isExpanded, setArrowTransform])

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
  }, [isExpanded])

  return (
    <div className="features-block">
      <div className="features-collapse">
        <p className="features-title">
          Does your vehicle contain any non-standard features?
        </p>
        <button onClick={toggleExpand} className="features-collapse-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={arrowTransform}
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#344054"
              strokeWidth="1.66667"
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
