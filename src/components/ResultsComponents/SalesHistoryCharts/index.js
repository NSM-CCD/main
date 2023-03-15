import React, { useContext, useMemo } from "react"
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

  const charts = useMemo(() => {
    switch (activeChart) {
      case "Classic":
        return (
          <>
            <h5 className="sales-title">Sales history</h5>
            <SalesHistory noChart={noChart} chartUrl={chartUrl} />
          </>
        )
      case "NADA":
        return (
          <>
            {standardPriceArr?.length && (
              <div className="price">
                <h5 className="avg-title">Average Price</h5>
                <p className="avg-value">${standardPriceArr[0]?.avg}</p>
              </div>
            )}
            <div className="h-divider" />
            <h5 className="sales-title">Sales history</h5>
            <ValuationChart />
            <ValuationTable />
          </>
        )
      default:
        return null
    }
  }, [activeChart])

  return (
    <div className="chart-tabs">
      <div className="switch-buttons">
        {["NADA", "Classic"].map(i => (
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
