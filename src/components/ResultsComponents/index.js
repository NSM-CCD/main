import React, { useContext } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import Features from "./Features"
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
  } = useContext(CalculatorContext)

  console.log(description)
  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items">
          <ScrollLink
            spy
            smooth
            duration={250}
            offset={-280}
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
              offset={-250}
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
        </div>
        <div className="content-wrapper">
          <Valuation
            carName={`${selectedYear} ${selectedMake}`}
            model={`${selectedModel} ${selectedGeneration || selectedVariant}`}
            chartUrl={chartUrl}
          />
          <Features />
          {parentChartUrl && <SalesHistory parentChartUrl={parentChartUrl} />}
          {description && <ModelOverview description={description} />}
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
