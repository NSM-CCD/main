import React, { useCallback, useState } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import Features from "./Features"
import { ResultsWrapper } from "./results.styled"
import { scrollToEl } from "../../utils/scrollTo"

const ResultsMain = ({ carName, model }) => {
  const [active, setActive] = useState("valuation")

  const handleActive = useCallback(item => {
    scrollToEl(item)
    setActive(item)
  }, [])

  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items d-flex flex-column">
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
        </div>
      </div>
    </ResultsWrapper>
  )
}

export default ResultsMain
