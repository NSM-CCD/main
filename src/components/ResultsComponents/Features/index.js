import React, { useCallback, useState } from "react"
import CircleIcon from "./CircleIcon"
import CircleActive from "./CircleActive"

const Features = () => {
  const [active, setActive] = useState(2)

  const handleActive = useCallback(item => setActive(item), [])

  return (
    <div className="features-block">
      <p className="features-title m-0">
        Does your vehicle contain any non-standard features?
      </p>

      <div className="items-wrapper">
        <div
          className={`features-items ${active === 1 ? "active" : ""}`}
          onClick={() => handleActive(1)}
        >
          <div className="content">
            <p className="item-title">Standard Features</p>
            <span className="item-description">Basic Package</span>
          </div>
          {active === 1 ? <CircleActive /> : <CircleIcon />}
        </div>

        <div
          className={`features-items ${active === 2 ? "active" : ""}`}
          onClick={() => handleActive(2)}
        >
          <div className="content">
            <p className="item-title">Fleetwood 75 Pace Model</p>
            <span className="item-description">Upgraded Package</span>
          </div>
          {active === 2 ? <CircleActive /> : <CircleIcon />}
        </div>

        <div
          className={`features-items ${active === 3 ? "active" : ""}`}
          onClick={() => handleActive(3)}
        >
          <div className="content">
            <p className="item-title">Rear-wheel Racing Package</p>
            <span className="item-description">Upgraded Package</span>
          </div>
          {active === 3 ? <CircleActive /> : <CircleIcon />}
        </div>

        <div
          className={`features-items ${active === 4 ? "active" : ""}`}
          onClick={() => handleActive(4)}
        >
          <div className="content">
            <p className="item-title">Basic Autodrive</p>
            <span className="item-description">Upgraded Package</span>
          </div>
          {active === 4 ? <CircleActive /> : <CircleIcon />}
        </div>
      </div>
    </div>
  )
}

export default Features
