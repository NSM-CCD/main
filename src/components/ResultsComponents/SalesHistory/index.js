import React from "react"

const SalesHistory = ({ noChart, chartUrl }) => (
  <div>
    <h2 className="sales-history-title">Sales History</h2>
    {!noChart ? (
      <div dangerouslySetInnerHTML={{ __html: chartUrl }} />
    ) : (
      <div className="no-chart">No data for this time period</div>
    )}
  </div>
)

export default SalesHistory
