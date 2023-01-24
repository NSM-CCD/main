import React, { useCallback, useContext } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import RelatedVehicles from "./RelatedVehicles"

import { ResultsWrapper } from "./results.styled"
import Link from "../../utils/link"
import { Link as ScrollLink } from "react-scroll"
import { CalculatorContext } from "../../contexts/Calculator"

const ResultsMain = () => {
  const {
    selectedMake,
    selectedModel,
    selectedGeneration,
    selectedVariant,
    selectedYear,
    description,
    chartUrl,
    parentChartUrl,
    relatedVehicles,
    resetForm,
  } = useContext(CalculatorContext)

  const handleReset = useCallback(() => resetForm(), [resetForm])

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
              offset={-250}
              activeClass="active"
              to="modelOverview"
              className="side-item"
            >
              Model Overview
            </ScrollLink>
          )}
          {relatedVehicles?.length > 0 && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-250}
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
            carName={`${selectedYear} ${selectedMake} ${selectedModel}`}
            model={`${selectedGeneration || selectedVariant}`}
          />
          {/*@TODO: enable when data is available*/}
          {/*<Features />*/}
          {(chartUrl || parentChartUrl) && (
            <SalesHistory chartUrl={chartUrl ? chartUrl : parentChartUrl} />
          )}
          {description && <ModelOverview description={description} />}
          {relatedVehicles?.length > 0 && <RelatedVehicles />}
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
