import React, { useCallback, useState } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import { ResultsWrapper } from "./results.styled"
import { scrollToEl } from "../../utils/scrollTo"

const ResultsMain = ({ carName, model }) => {
  const [active, setActive] = useState("")

  const handleActive = useCallback(item => {
    scrollToEl(item)
    setActive(item)
  }, [])

  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items d-flex flex-column">
          <a
            href="#"
            onClick={() => handleActive("valuation")}
            className={active === "valuation" ? "active" : ""}
          >
            Valuation
          </a>
          <a
            href="#"
            onClick={() => handleActive("salesHistory")}
            className={active === "salesHistory" ? "active" : ""}
          >
            Sales History
          </a>
          <a
            href="#"
            onClick={() => handleActive("modelOverview")}
            className={active === "modelOverview" ? "active" : ""}
          >
            Model Overview
          </a>
        </div>
        <div className="content-wrapper">
          <Valuation carName={carName} model={model} />
          <SalesHistory />
          <ModelOverview />
        </div>
      </div>
    </ResultsWrapper>
  )
}

export default ResultsMain
