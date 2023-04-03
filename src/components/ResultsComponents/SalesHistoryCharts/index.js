import React, {
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react"
import ChartContainer from "./ChartContainer"
import ValuationChart from "../ValuationChart"
import ValuationTable from "../ValuationTable"
import SalesHistory from "../SalesHistory"
import { ACIContext } from "../../../contexts/ACIContext"
import ButtonChevron from "../ButtonChevron"

const SalesHistoryCharts = ({
  noChart,
  chartUrl,
  activeChart,
  onChangeActiveChart,
}) => {
  const { standardPriceArr } = useContext(ACIContext)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useEffect(() => {
    setTimeout(() => setIsExpanded(true), 1800)
  }, [])

  const valuationSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div>
        <div className="h-divider" />
        <h5 className="sales-title pt-4">Sales history</h5>
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
            {standardPriceArr?.length ? (
              <div className="price">
                <div className="avg-collapse">
                  <div className="avg-header">
                    {isExpanded ? (
                      <h5 className="avg-title">Average Retail Value</h5>
                    ) : null}
                    <p className="avg-value">
                      ${standardPriceArr[0]?.avg ?? ""}
                    </p>
                  </div>
                  <ButtonChevron
                    className="avg-collapse-button"
                    isExpanded={isExpanded}
                    onToggleExpand={toggleExpand}
                  />
                </div>
              </div>
            ) : (
              "loading data..."
            )}
            {valuationSection}
          </>
        )
      default:
        return null
    }
  }, [activeChart, standardPriceArr, toggleExpand, valuationSection])

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
