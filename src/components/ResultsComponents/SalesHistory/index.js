import React from "react"

const SalesHistory = ({ hashId }) => (
  <div className="container sales-history" id="salesHistory">
    <h2 className="sales-history-title">Sales History</h2>
    <iframe
      title="Sales History"
      src={`https://www.classic.com/widget/${hashId}/`}
      width="100%"
      height="480"
      style={{ border: 0 }}
    />
  </div>
)

export default SalesHistory
