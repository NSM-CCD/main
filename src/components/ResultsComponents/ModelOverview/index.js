import React from "react"

const ModelOverview = ({ description }) => (
  <div className="container model-overview" id="modelOverview">
    <h2 className="model-overview-title">Model overview</h2>
    <div className="description">
      <p className="m-0 subtitle">Description</p>
      <p
        className="overview-content m-0"
        dangerouslySetInnerHTML={{
          __html: description.replaceAll("<a ", "<a target='_blank'"),
        }}
      />
    </div>
  </div>
)

export default ModelOverview
