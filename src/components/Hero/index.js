import React, { useCallback, useMemo, useState } from "react"
import { HeroContent, HeroSection } from "./hero.styles"
import { desktopLogos, getYears, mobileLogos, trustBarLogos } from "./helper"
import { useMediaQuery } from "../../utils/useMediaQuery"

const Hero = () => {
  const [year, setYear] = useState("")
  const isWiderScreen = useMediaQuery("(min-width: 1200px)")

  const years = useMemo(
    () =>
      getYears(1926).map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      )),
    []
  )

  const handleYear = useCallback(year => setYear(year.target.value), [])

  return (
    <HeroSection>
      <HeroContent>
        <div className="container p-0 p-md-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="heading-block">
                <span className="hero-kicker">
                  Welcome to Classic Car Value
                </span>
                <h1 className="hero-title">
                  Classic car valuations <span>made simple</span>.
                </h1>
                <p className="hero-subtitle">
                  How much is your classic car worth? No single valuation tool
                  or price estimator can precisely determine how much your
                  classic car is worth.
                </p>
              </div>

              <div className="trustbar">
                <p className="trustbar-kicker">Trusted and sourced by</p>
                <div className="trustbar-logos">
                  {!isWiderScreen
                    ? mobileLogos.map((logo, idx) => (
                        <img
                          key={`image-${idx}`}
                          src={trustBarLogos[`${logo}Logo`]}
                          alt={logo}
                          className="img-fluid"
                        />
                      ))
                    : desktopLogos.map((logo, idx) => (
                        <img
                          key={`image-${idx}`}
                          src={trustBarLogos[`${logo}Logo`]}
                          alt={logo}
                          className="img-fluid"
                        />
                      ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-container">
                <h2 className="form-title">
                  Calculate the value of your classic car
                </h2>
                <p className="form-subtitle">
                  Enter the details of your vehicle
                </p>
                <hr />
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="year">Select year</label>
                    <select
                      id="year"
                      className="form-select"
                      aria-label="Default select year"
                      required
                      value={year}
                      onChange={handleYear}
                    >
                      <option value="">Select year</option>
                      {years}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="make">Select make</label>
                    <select
                      id="make"
                      className="form-select"
                      aria-label="Default select make"
                      required
                    >
                      <option value="">Select make</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Select model</label>
                    <select
                      id="model"
                      className="form-select"
                      aria-label="Default select model"
                      required
                    >
                      <option value="">Select model</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Select trim</label>
                    <select
                      id="trim"
                      className="form-select"
                      aria-label="Default select trim"
                      required
                    >
                      <option value="">Select trim</option>
                    </select>
                  </div>
                  <hr className="m-0" />
                  <div className="action-buttons">
                    <button type="reset" className="btn-reset">
                      Reset Selections
                    </button>
                    <button type="button" className="btn-estimate">
                      Get Estimate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
