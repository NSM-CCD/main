import React from "react"

const RelatedVehicles = () => (
  <div className="related-vehicles" id="relatedVehicles">
    <h2 className="related-vehicles-title">Related Vehicles</h2>
    <div className="vehicles-list">
      {["INTEGRA", "INTEGRA GS", "INTEGRA RS", "INTEGRA LS"].map(i => (
        <a key={i} href="#" className="vehicle-details">
          <p className="details m-0">
            <span className="name">Acura {i}</span>
            <span className="model">2 Door Coupe</span>
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      ))}
    </div>
  </div>
)

export default RelatedVehicles