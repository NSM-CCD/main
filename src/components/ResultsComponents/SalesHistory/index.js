import React from "react"

const SalesHistory = ({ parentChartUrl }) => (
  <div className="container sales-history" id="salesHistory">
    <h2 className="sales-history-title">Sales History</h2>
    <div dangerouslySetInnerHTML={{ __html: parentChartUrl }} />
  </div>
)

export default SalesHistory
