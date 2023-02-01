import React, { useCallback, useContext } from "react"
import { ACIContext } from "../../../contexts/ACIContext"

const HeroForm = ({
  makeOptions,
  modelOptions,
  yearOptions,
  trimOptions,
  onEstimate,
}) => {
  const {
    isYear,
    year,
    make,
    model,
    trim,
    setIsYear,
    setYear,
    setMake,
    setModel,
    setTrim,
    resetForm,
  } = useContext(ACIContext)

  const handleSelector = useCallback(
    () => setIsYear(!isYear),
    [isYear, setIsYear]
  )

  const handleYear = useCallback(
    ({ target }) => setYear(target.value),
    [setYear]
  )

  const handleMake = useCallback(
    ({ target }) => setMake(target.value),
    [setMake]
  )

  const handleModel = useCallback(
    ({ target }) => setModel(target.value),
    [setModel]
  )

  const handleTrim = useCallback(
    ({ target }) => setTrim(target.value),
    [setTrim]
  )

  return (
    <div className="col-12 col-md-6 form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Calculate the value of your classic car</h2>
        <p className="form-subtitle">Enter the details of your vehicle</p>
        <div className="form">
          <div className="selector">
            <button
              className={isYear ? "is-year" : ""}
              onClick={handleSelector}
            >
              Select By Year
            </button>
            <button
              className={!isYear ? "is-make" : ""}
              onClick={handleSelector}
            >
              Select By Make
            </button>
          </div>
          <div className="form-group">
            <label htmlFor={isYear ? "year" : "make"}>{`Select ${
              isYear ? "year" : "make"
            }`}</label>
            <select
              id={isYear ? "year" : "make"}
              className="form-select"
              aria-label={`Default select ${isYear ? "year" : "make"}`}
              value={isYear ? year : make}
              onChange={isYear ? handleYear : handleMake}
            >
              <option value="">{`Select ${isYear ? "year" : "make"}`}</option>
              {isYear ? yearOptions : makeOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor={isYear ? "make" : "year"}>{`Select ${
              isYear ? "make" : "year"
            }`}</label>
            <select
              id={isYear ? "make" : "year"}
              className="form-select"
              aria-label={`Default select ${isYear ? "make" : "year"}`}
              disabled={
                isYear
                  ? !year || yearOptions.length <= 0
                  : !make || makeOptions.length <= 0
              }
              value={isYear ? make : year}
              onChange={isYear ? handleMake : handleYear}
            >
              <option value="">{`Select ${isYear ? "make" : "year"}`}</option>
              {isYear ? makeOptions : yearOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model">Select model</label>
            <select
              id="model"
              className="form-select"
              aria-label="Default select model"
              required
              disabled={isYear ? !make : !year || modelOptions.length <= 0}
              value={model}
              onChange={handleModel}
            >
              <option value="">Select model</option>
              {modelOptions}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year">Select trim</label>
            <select
              id="trim"
              className="form-select"
              aria-label="Default select trim"
              required
              disabled={!model}
              value={trim}
              onChange={handleTrim}
            >
              <option value="">Select trim</option>
              {trimOptions}
            </select>
          </div>
          <hr className="m-0" />
          <div className="action-buttons">
            <button type="reset" className="btn-reset" onClick={resetForm}>
              Reset Selections
            </button>
            <button
              type="button"
              className="btn-estimate"
              disabled={!year || !model || !make}
              onClick={onEstimate}
            >
              Get Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroForm
