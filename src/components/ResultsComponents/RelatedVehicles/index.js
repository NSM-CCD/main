import React, { useContext } from "react"
import { CalculatorContext } from "../../../contexts/Calculator"

const RelatedVehicles = () => {
  const { relatedVehicles, selectedMake, selectedModel } =
    useContext(CalculatorContext)

  return (
    <div className="related-vehicles" id="relatedVehicles">
      <h2 className="related-vehicles-title">Related Vehicles</h2>
      <div className="vehicles-list">
        {(relatedVehicles?.length > 4
          ? relatedVehicles.slice(0, 4)
          : relatedVehicles
        ).map(i => (
          <a key={i} href="#" className="vehicle-details">
            <p className="details m-0">
              <span className="name">{`${selectedMake} ${selectedModel}`}</span>
              <span className="model">{i}</span>
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedVehicles
