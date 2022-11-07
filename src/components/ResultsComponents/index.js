import React, { useCallback, useState } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import Features from "./Features"
import { ResultsWrapper } from "./results.styled"
import { scrollToEl } from "../../utils/scrollTo"
import RelatedVehicles from "./RelatedVehicles"
import Link from "../../utils/link"

const ResultsMain = ({ carName, model }) => {
  const [active, setActive] = useState("valuation")

  const handleActive = useCallback(item => {
    scrollToEl(item)
    setActive(item)
  }, [])

  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items">
          <button
            onClick={() => handleActive("valuation")}
            className={`side-item ${active === "valuation" ? "active" : ""}`}
          >
            Valuation
          </button>
          <button
            onClick={() => handleActive("salesHistory")}
            className={`side-item ${active === "salesHistory" ? "active" : ""}`}
          >
            Sales History
          </button>
          <button
            onClick={() => handleActive("modelOverview")}
            className={`side-item ${
              active === "modelOverview" ? "active" : ""
            }`}
          >
            Model Overview
          </button>
        </div>
        <div className="content-wrapper">
          <Valuation carName={carName} model={model} />
          <Features />
          <SalesHistory />
          <ModelOverview />
          <RelatedVehicles />
          <Link to="/" className="restart-calc">
            <span>
              Looking to get the valuation of another car? Restart calculation
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </ResultsWrapper>
  )
}

export default ResultsMain
