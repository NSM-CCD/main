import React, { useCallback, useState, useMemo } from "react"

const PriceChart = () => {
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
        <div className={"h-divider"} />
        <div className="price-chart-body "></div>
        <div className="price-chart-body "></div>
      </div>
    )
  }, [isExpanded])

  return (
    <div className="price-chart">
      <div className="price-chart-header">
        <p className="price-chart-title ">1990 Acura NSX-Ts for Sale</p>
        <button
          onClick={toggleExpand}
          className={`price-chart-button ${isExpanded ? "active" : ""}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 15L12 9L6 15"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {priceChartSection}
    </div>
  )
}

export default PriceChart
