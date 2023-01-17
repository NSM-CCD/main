import React from "react"

const SalesHistory = ({ chartUrl }) => (
  <div className="container sales-history" id="salesHistory">
    <h2 className="sales-history-title">Sales History</h2>
    <div dangerouslySetInnerHTML={{ __html: chartUrl }} />
  </div>
)

export default SalesHistory
