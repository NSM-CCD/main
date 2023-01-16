import React, { useEffect, useState } from "react"
import Valuation from "./Valuation"
import SalesHistory from "./SalesHistory"
import ModelOverview from "./ModelOverview"
import Features from "./Features"
import RelatedVehicles from "./RelatedVehicles"

import { ResultsWrapper } from "./results.styled"
import Link from "../../utils/link"
import { Link as ScrollLink } from "react-scroll"
import { useMutation } from "@apollo/client"
import { MARKET_WIDGET } from "../../graphqlQueries/queries"

const ResultsMain = ({ carName, model, makeName, modelName }) => {
  const [description, setDescription] = useState("")
  const [chartUrl, setChartUrl] = useState("")

  const [createMarketWidgetFromTaxonomyName, { data }] =
    useMutation(MARKET_WIDGET)

  useEffect(() => {
    if (makeName && modelName) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: "toyota",
          modelName: "tacoma",
          domain: "",
        },
      }).then()
    }
  }, [createMarketWidgetFromTaxonomyName, makeName, modelName])

  useEffect(() => {
    if (data) {
      const res = data?.createMarketWidgetFromTaxonomyName?.data
      console.log(data)
      setDescription(res?.market?.description)
      setChartUrl(res?.hashId)
    }
  }, [data])

  return (
    <ResultsWrapper>
      <div className="container results-container">
        <div className="sidebar-items">
          <ScrollLink
            spy
            smooth
            duration={250}
            offset={-280}
            activeClass="active"
            to="valuation"
            className="side-item"
          >
            Valuation
          </ScrollLink>
          {chartUrl && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-250}
              activeClass="active"
              to="salesHistory"
              className="side-item"
            >
              Sales History
            </ScrollLink>
          )}
          {description && (
            <ScrollLink
              spy
              smooth
              duration={250}
              offset={-250}
              activeClass="active"
              to="modelOverview"
              className="side-item"
            >
              Model Overview
            </ScrollLink>
          )}
          <ScrollLink
            spy
            smooth
            duration={250}
            offset={-250}
            activeClass="active"
            to="relatedVehicles"
            className="side-item"
          >
            Related Vehicles
          </ScrollLink>
        </div>
        <div className="content-wrapper">
          <Valuation carName={carName} model={model} hashId={chartUrl} />
          <Features />
          {chartUrl && <SalesHistory hashId={chartUrl} />}
          {description && <ModelOverview description={description} />}
          <RelatedVehicles />
          <Link to="/" className="restart-calc">
            <span>
              Looking to get the valuation of another car? Restart calculation
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </ResultsWrapper>
  )
}

export default ResultsMain
