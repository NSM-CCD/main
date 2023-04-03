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
  const {
    modifiedPriceArr,
    standardPriceArr,
    ocwStandardPriceArr,
    vmrStandardPriceArr,
  } = useContext(ACIContext)

  const [isExpanded, setIsExpanded] = useState(false)
  const [hideLoadingText, setHideLoadingText] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useEffect(() => {
    setTimeout(() => setIsExpanded(true), 1800)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (!hideLoadingText) {
        setHideLoadingText(true)
      }
    }, 2000)
  }, [hideLoadingText])

  const valuationSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return modifiedPriceArr?.length ||
      ocwStandardPriceArr?.length ||
      vmrStandardPriceArr?.length ? (
      <div>
        <div className="h-divider" />
        <h5 className="sales-title pt-4">Sales history</h5>
        <div className="sales-history-chart-separator">
          <ValuationChart />
        </div>
        <ValuationTable />
      </div>
    ) : (
      <>
        <h5 className="sales-title">Sales history</h5>
        <div className="no-chart">No data for this time period</div>
      </>
    )
  }, [isExpanded, modifiedPriceArr, ocwStandardPriceArr, vmrStandardPriceArr])

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
            {modifiedPriceArr?.length ? (
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
            ) : !hideLoadingText ? (
              "loading data..."
            ) : null}
            {valuationSection}
          </>
        )
      default:
        return null
    }
  }, [
    activeChart,
    hideLoadingText,
    standardPriceArr,
    modifiedPriceArr,
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
