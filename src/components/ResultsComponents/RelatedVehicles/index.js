import React, { useCallback, useContext, useState, useMemo } from "react"
import { navigate } from "gatsby"
import { ACIContext } from "../../../contexts/ACIContext"

const RelatedVehicles = () => {
  const { relatedVehicles, trim, makeLabel, model, setTrim } =
    useContext(ACIContext)

  const handleLoadRelatedVehicle = useCallback(
    related => {
      setTrim(related)
      navigate("/")
    },
    [setTrim]
  )

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  const relatedVehiclesSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div className="vehicles-list">
        {(relatedVehicles?.length > 4
          ? relatedVehicles.slice(0, 4)
          : relatedVehicles
        )
          .filter(r => r !== trim)
          .map(relatedVehicle => (
            <a
              key={relatedVehicle}
              href="#"
              className="vehicle-details"
              onClick={() => handleLoadRelatedVehicle(relatedVehicle)}
            >
              <p className="details m-0">
                <span className="name">{`${makeLabel} ${model}`}</span>
                <span className="model">{relatedVehicle}</span>
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
    )
  }, [isExpanded])

  return (
    <div className="related-vehicles" id="relatedVehicles">
      <div className="relatedV-collapse">
        <h2 className="related-vehicles-title">Related Vehicles</h2>
        <button
          onClick={toggleExpand}
          className={`relatedV-collapse-button ${isExpanded ? "active" : ""}`}
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

      {relatedVehiclesSection}
    </div>
  )
}

export default RelatedVehicles
