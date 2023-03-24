import React, { useCallback, useMemo, useState, useLayoutEffect } from "react"

const ModelOverview = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [arrowTransform, setArrowTransform] = useState("rotate(270 0 0)")

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

  useLayoutEffect(() => {
    setArrowTransform(isExpanded ? "rotate(90 0 0)" : "rotate(270 0 0)")
  }, [isExpanded, setArrowTransform])

  const modelOverviewSection = useMemo(() => {
    if (!isExpanded) {
      return null
    }

    return (
      <div className="description">
        <p className="m-0 subtitle">Description</p>
        <p
          className="overview-content m-0"
          dangerouslySetInnerHTML={{
            __html: description.replaceAll("<a ", "<a target='_blank'"),
          }}
        />
      </div>
    )
  }, [isExpanded])

  return (
    <div className="container model-overview" id="modelOverview">
      <div className="model-collapse">
        <h2 className="model-overview-title">Model overview</h2>
        <button onClick={toggleExpand} className="model-collapse-button">
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

      {modelOverviewSection}
    </div>
  )
}

export default ModelOverview
