import React, { useCallback, useContext, useMemo } from "react"
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

  return (
    <div className="features-block">
      <p className="features-title m-0">
        Does your vehicle contain any non-standard features?
      </p>

      <div className="items-wrapper">{list}</div>
    </div>
  )
}

export default Features
