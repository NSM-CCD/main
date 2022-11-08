import React, { useCallback } from "react"
import { navigate } from "gatsby"

const Valuation = ({ carName, model }) => {
  const handleBack = useCallback(() => navigate("/"), [])

  return (
    <>
      <div className="heading-and-actions">
        <div className="back-share" id="valuation">
          <button className="btn btn-back" onClick={handleBack}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8337 9.99984H4.16699M4.16699 9.99984L10.0003 15.8332M4.16699 9.99984L10.0003 4.1665"
                stroke="#5379A2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Car Selection
          </button>

          <button className="btn btn-share">
            Copy Link
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15833 11.2582L12.85 14.5748M12.8417 5.42484L7.15833 8.7415M17.5 4.1665C17.5 5.54722 16.3807 6.6665 15 6.6665C13.6193 6.6665 12.5 5.54722 12.5 4.1665C12.5 2.78579 13.6193 1.6665 15 1.6665C16.3807 1.6665 17.5 2.78579 17.5 4.1665ZM7.5 9.99984C7.5 11.3805 6.38071 12.4998 5 12.4998C3.61929 12.4998 2.5 11.3805 2.5 9.99984C2.5 8.61913 3.61929 7.49984 5 7.49984C6.38071 7.49984 7.5 8.61913 7.5 9.99984ZM17.5 15.8332C17.5 17.2139 16.3807 18.3332 15 18.3332C13.6193 18.3332 12.5 17.2139 12.5 15.8332C12.5 14.4525 13.6193 13.3332 15 13.3332C16.3807 13.3332 17.5 14.4525 17.5 15.8332Z"
                stroke="#5379A2"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="valuation-heading">
          {carName && <h2 className="m-0 car-name">{carName}</h2>}
          {model && <p className="m-0 model">{model}</p>}
        </div>
      </div>
      <div className="chart-wrapper">
        <iframe
          src="https://www.classic.com/widget/GZOqi1GRoCr5m/"
          width="100%"
          height="480"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  )
}

export default Valuation
