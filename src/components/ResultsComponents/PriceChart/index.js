import React, {
  useCallback,
  useContext,
  useState,
  useMemo,
  useLayoutEffect,
} from "react"

const PriceChart = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [arrowTransform, setArrowTransform] = useState("rotate(270 0 0)")

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useLayoutEffect(() => {
    setArrowTransform(isExpanded ? "rotate(90 0 0)" : "rotate(270 0 0)")
  }, [isExpanded, setArrowTransform])

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
        <button onClick={toggleExpand} className="price-chart-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={arrowTransform}
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="#344054"
              strokeWidth="1.66667"
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
