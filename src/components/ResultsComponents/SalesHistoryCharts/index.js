import React, {
  useContext,
  useMemo,
  useState,
  useCallback,
  useLayoutEffect,
} from "react"
import ChartContainer from "./ChartContainer"
import ValuationChart from "../ValuationChart"
import ValuationTable from "../ValuationTable"
import SalesHistory from "../SalesHistory"
import { ACIContext } from "../../../contexts/ACIContext"

const SalesHistoryCharts = ({
  noChart,
  chartUrl,
  activeChart,
  onChangeActiveChart,
}) => {
  const { standardPriceArr } = useContext(ACIContext)
  const [isExpanded, setIsExpanded] = useState(false)
  const [arrowTransform, setArrowTransform] = useState("rotate(270 0 0)")

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useLayoutEffect(() => {
    setArrowTransform(isExpanded ? "rotate(90 0 0)" : "rotate(270 0 0)")
  }, [isExpanded, setArrowTransform])

  const valuationSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div>
        <div className={"h-divider "} />
        <h5 className={"sales-title"}>Sales history</h5>
        <div className="sales-history-chart-separator">
          <ValuationChart />
        </div>
        <ValuationTable />
      </div>
    )
  }, [isExpanded])

  const charts = useMemo(() => {
    switch (activeChart) {
      case "Sales History":
        return (
          <>
            <h5 className="sales-title">Sales history</h5>
            <SalesHistory noChart={noChart} chartUrl={chartUrl} />
          </>
        )
      case "Average Value":
        return (
          <>
            {standardPriceArr?.length && (
              <div className="price">
                <div className="avg-collapse">
                  <div className="avg-header">
                    {isExpanded ? (
                      <h5 className="avg-title">Average Retail Value</h5>
                    ) : null}
                    <p className="avg-value">${standardPriceArr[0]?.avg}</p>
                  </div>
                  <button
                    onClick={toggleExpand}
                    className="avg-collapse-button"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform={arrowTransform}
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="#344054"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            {valuationSection}
          </>
        )
      default:
        return null
    }
  }, [
    activeChart,
    standardPriceArr,
    arrowTransform,
    toggleExpand,
    valuationSection,
  ])

  return (
    <div className="chart-tabs">
      <div className="switch-buttons">
        {["Average Value", "Sales History"].map(i => (
          <button
            key={i}
            className={`btn-switch ${activeChart === i ? "active" : ""}`}
            onClick={() => onChangeActiveChart(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <ChartContainer>{charts}</ChartContainer>
    </div>
  )
}

export default SalesHistoryCharts
