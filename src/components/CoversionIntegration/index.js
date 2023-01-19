import React, { useCallback, useState } from "react"
import { CISection } from "./conversion-styled"
import ModalMain from "../Modal"
import FormIntegration from "./Form/FormIntegration"

const ConversionIntegration = () => {
  const [openModalForm, setOpenModalForm] = useState(false)

  const handleOpenModalForm = useCallback(() => setOpenModalForm(true), [])
  const handleCloseModal = useCallback(() => setOpenModalForm(false), [])

  return (
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
            <button onClick={handleOpenModalForm} className="integration-link">
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
            </button>
          </div>
        </div>
      </div>
      <ModalMain
        open={openModalForm}
        content={<FormIntegration onClose={handleCloseModal} />}
      />
    </CISection>
  )
}

export default ConversionIntegration
