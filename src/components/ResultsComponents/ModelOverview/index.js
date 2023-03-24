import React, { useCallback, useMemo, useState } from "react"

const ModelOverview = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = useCallback(() => {
    setIsExpanded(expanded => !expanded)
  }, [])

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
        <button
          onClick={toggleExpand}
          className={`model-collapse-button ${isExpanded ? "active" : ""}`}
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

      {modelOverviewSection}
    </div>
  )
}

export default ModelOverview
