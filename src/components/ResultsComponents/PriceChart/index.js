import React, { useCallback, useState, useMemo } from "react"
import ButtonChevron from "../ButtonChevron"

const PriceChart = ({ carName }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  const priceChartSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div className="price-chart-container">
        <div className="h-divider w-100" />
        <div className="price-chart-body"></div>
        <div className="price-chart-body"></div>
      </div>
    )
  }, [isExpanded])

  return (
    <div className="price-chart">
      <div className="price-chart-header">
        {carName && <p className="price-chart-title ">{carName}</p>}
        <ButtonChevron
          className="price-chart-button"
          isExpanded={isExpanded}
          onToggleExpand={toggleExpand}
        />
      </div>
      {priceChartSection}
    </div>
  )
}

export default PriceChart
