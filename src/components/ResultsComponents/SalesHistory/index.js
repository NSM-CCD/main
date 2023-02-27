import React from "react"

const SalesHistory = ({ noChart, chartUrl }) =>
  !noChart ? (
    <div dangerouslySetInnerHTML={{ __html: chartUrl }} />
  ) : (
    <div className="no-chart">No data for this time period</div>
  )

export default SalesHistory
