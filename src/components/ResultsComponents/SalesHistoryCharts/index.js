import React, { useMemo } from "react"
import ChartContainer from "./ChartContainer"
import ValuationChart from "../ValuationChart"
import ValuationTable from "../ValuationTable"
import SalesHistory from "../SalesHistory"

const SalesHistoryCharts = ({
  noChart,
  chartUrl,
  activeChart,
  onChangeActiveChart,
}) => {
  const charts = useMemo(() => {
    switch (activeChart) {
      case "Classic":
        return <SalesHistory noChart={noChart} chartUrl={chartUrl} />
      case "NADA":
        return (
          <>
            <ValuationChart />
            <ValuationTable />
          </>
        )
      default:
        return null
    }
  }, [activeChart])

  return (
    <ChartContainer>
      <h2 className="sales-history-title">Sales History</h2>
      {charts}

      <div className="switch-buttons">
        {["Classic", "NADA"].map(i => (
          <button
            key={i}
            className={`btn-switch ${activeChart === i ? "active" : ""}`}
            onClick={() => onChangeActiveChart(i)}
          >
            {i}
          </button>
        ))}
      </div>
    </ChartContainer>
  )
}

export default SalesHistoryCharts
