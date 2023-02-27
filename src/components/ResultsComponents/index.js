import React, { useCallback, useContext, useState } from "react"
import Valuation from "./Valuation"
import ModelOverview from "./ModelOverview"
import RelatedVehicles from "./RelatedVehicles"

import { ResultsWrapper } from "./results.styled"
import Link from "../../utils/link"
import { Link as ScrollLink } from "react-scroll"
import { ACIContext } from "../../contexts/ACIContext"
import Features from "./Features"
import SalesHistoryCharts from "./SalesHistoryCharts"

const ResultsMain = () => {
  const {
    makeLabel,
    model,
    year,
    trim,
    description,
    chartUrl,
    relatedVehicles,
    resetForm,
    optionsList,
  } = useContext(ACIContext)

  const [activeChart, setActiveChart] = useState("Classic")
  const handleReset = useCallback(() => resetForm(), [resetForm])

  const handleActiveChart = useCallback(chart => setActiveChart(chart), [])

  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items">
          <ScrollLink
            spy
            smooth
            duration={250}
            offset={-200}
            activeClass="active"
            to="valuation"
            className="side-item"
          >
            Valuation
          </ScrollLink>
          {chartUrl && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-125}
              activeClass="active"
              to="salesHistory"
              className="side-item"
            >
              Sales History
            </ScrollLink>
          )}
          {description && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-150}
              activeClass="active"
              to="modelOverview"
              className="side-item"
            >
              Model Overview
            </ScrollLink>
          )}
          {relatedVehicles?.length - 1 > 0 && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-150}
              activeClass="active"
              to="relatedVehicles"
              className="side-item"
            >
              Related Vehicles
            </ScrollLink>
          )}
        </div>
        <div className="content-wrapper">
          <Valuation
            carName={`${year} ${makeLabel} ${model}`}
            trim={`${trim}`}
          />

          <SalesHistoryCharts
            noChart={!chartUrl}
            chartUrl={chartUrl}
            activeChart={activeChart}
            onChangeActiveChart={handleActiveChart}
          />

          {optionsList?.length > 0 && activeChart === "NADA" && <Features />}
          {description && <ModelOverview description={description} />}
          {relatedVehicles?.length - 1 > 0 && <RelatedVehicles />}
          <Link to="/" className="restart-calc" onClick={handleReset}>
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
