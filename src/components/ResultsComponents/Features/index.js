import React, { useCallback, useContext, useMemo, useState } from "react"
import CircleIcon from "./CircleIcon"
import CircleActive from "./CircleActive"
import { ACIContext } from "../../../contexts/ACIContext"
import ButtonChevron from "../ButtonChevron"

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
        <ButtonChevron
          className="features-collapse-button"
          isExpanded={isExpanded}
          onToggleExpand={toggleExpand}
        />
      </div>

      {featuresSection}
    </div>
  )
}

export default Features
