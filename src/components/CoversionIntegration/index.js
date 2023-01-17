import React from "react"
import { CISection } from "./conversion-styled"
import Link from "../../utils/link"

const ConversionIntegration = () => (
  <CISection>
    <div className="container p-0">
      <div className="integration-wrapper">
        <div className="cp-integration-heading">
          <h2 className="heading">Want this tool on your website?</h2>
        </div>
        <div className="cta-content">
          <p className="m-0 subtitle">
            Want to feature the power of this valuation tool on your own site?
            Sign up for an integration service.
          </p>
          <Link to="/" className="integration-link">
            <span>Inquire for Integration</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#5379A2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </CISection>
)

export default ConversionIntegration
