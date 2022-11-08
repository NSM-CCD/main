import React, { useCallback } from "react"
import { navigate } from "gatsby"

import Link from "../../../../utils/link"
import { FormInfoWrapper } from "./forminfo.styles"
import chevronLeftIcon from "../../../../images/icons/chevron-left.svg"

const FormInfo = ({ carName, model, onClose }) => {
  const handleSubmit = useCallback(
    () => navigate("/results", { state: { carName, model } }),
    []
  )

  return (
    <FormInfoWrapper>
      <div className="progress">
        <div className="progress-bar w-50" />
      </div>
      <div className="heading">
        <div className="title-wrapper">
          <p className="title">Almost there!</p>
          <span className="sub-title">
            Enter your final information to get your pricing
          </span>
        </div>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="year">First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <div className="terms-policy">
        <p className="agreement m-0">
          By clicking submit, I agree to the&nbsp;
          <Link to="/terms" openInNewTab>
            Terms
          </Link>
          &nbsp;and&nbsp;
          <Link to="/privacy" openInNewTab>
            Privacy Policy*
          </Link>
        </p>
      </div>
      <div className="action-buttons">
        <div className="buttons w-100">
          <button type="reset" className="btn-back" onClick={onClose}>
            <img src={chevronLeftIcon} alt="chevron" />
            Go back
          </button>
          <button type="button" className="btn-estimate" onClick={handleSubmit}>
            Get Estimate
          </button>
        </div>
      </div>
    </FormInfoWrapper>
  )
}

export default FormInfo
