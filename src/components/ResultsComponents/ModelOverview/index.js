import React, { useCallback, useMemo, useState } from "react"
import ButtonChevron from "../ButtonChevron"

const ModelOverview = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(true)

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
  }, [isExpanded, description])

  return (
    <div className="container model-overview" id="modelOverview">
      <div className="model-collapse">
        <h2 className="model-overview-title">Model overview</h2>
        <ButtonChevron
          className="model-collapse-button"
          isExpanded={isExpanded}
          onToggleExpand={toggleExpand}
        />
      </div>

      {modelOverviewSection}
    </div>
  )
}

export default ModelOverview
