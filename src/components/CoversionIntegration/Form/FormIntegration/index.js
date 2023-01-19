import React, { useCallback, useState } from "react"
import Link from "../../../../utils/link"
import chevronLeftIcon from "../../../../images/icons/chevron-left.svg"
import { FormInfoWrapper } from "../../../Hero/Form/FormInfo/forminfo.styles"

const FormIntegration = ({ onClose }) => {
  const [submitting, setSubmitting] = useState(false)
  const [organization, setOrganization] = useState("")
  const [orgUrl, setOrgUrl] = useState("")
  const [contactName, setContactName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")

  const handleOrganization = useCallback(
    ({ target }) => setOrganization(target.value),
    []
  )

  const handleOrgUrl = useCallback(({ target }) => setOrgUrl(target.value), [])
  const handleContactName = useCallback(
    ({ target }) => setContactName(target.value),
    []
  )
  const handleEmail = useCallback(
    ({ target }) => setEmailAddress(target.value),
    []
  )

  const handleInquire = useCallback(() => {
    setSubmitting(true)

    setTimeout(() => setSubmitting(false), 2000)
  }, [emailAddress, contactName, orgUrl, organization])

  return (
    <FormInfoWrapper>
      <div className="heading">
        <div className="title-wrapper">
          <p className="title">Inquire for Integration</p>
        </div>
      </div>
      <hr className="horizontal-divider m-0" />
      <div className="form">
        <div className="form-group">
          <label htmlFor="org">Organization</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your organization"
            value={organization}
            onChange={handleOrganization}
          />
        </div>
        <div className="form-group">
          <label htmlFor="org-url">Organization URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your organization URL"
            value={orgUrl}
            onChange={handleOrgUrl}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact-name">Contact name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your contact name"
            value={contactName}
            onChange={handleContactName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            value={emailAddress}
            onChange={handleEmail}
          />
        </div>
      </div>
      <div className="terms-policy">
        <p className="agreement m-0">
          By clicking "Submit", you agree to the&nbsp;
          <Link to="/terms" openInNewTab>
            Terms
          </Link>
          &nbsp;and&nbsp;
          <Link to="/privacy" openInNewTab>
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="action-buttons">
        <div className="buttons w-100">
          <button type="reset" className="btn-back" onClick={onClose}>
            <img src={chevronLeftIcon} alt="chevron" />
            Go back
          </button>
          <button type="button" className="btn-inquire" onClick={handleInquire}>
            {submitting ? "Sending..." : "Inquire for Integration"}
          </button>
        </div>
      </div>
    </FormInfoWrapper>
  )
}

export default FormIntegration
