import React, { useCallback } from "react"

const HeroForm = ({
  year,
  years,
  makes,
  models,
  trims,
  onChangeYear,
  onChangeMake,
  onChangeModelCat,
}) => {
  const handleYear = useCallback(
    ({ target }) => onChangeYear(target.value),
    [onChangeYear]
  )

  const handleMake = useCallback(
    ({ target }) => onChangeMake(target.value),
    [onChangeMake]
  )

  const handleCategory = useCallback(
    ({ target }) => onChangeModelCat(target.value),
    [onChangeModelCat]
  )

  return (
    <div className="col-12 col-md-6 form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Calculate the value of your classic car</h2>
        <p className="form-subtitle">Enter the details of your vehicle</p>
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
              disabled={!makes}
              onChange={handleMake}
            >
              <option value="">Select make</option>
              {makes}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model">Select model</label>
            <select
              id="model"
              className="form-select"
              aria-label="Default select model"
              required
              disabled={!models}
              onChange={handleCategory}
            >
              <option value="">Select model</option>
              {models}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Select trim</label>
            <select
              id="trim"
              className="form-select"
              aria-label="Default select trim"
              required
              disabled={!trims}
            >
              <option value="">Select trim</option>
              {trims}
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
  )
}

export default HeroForm
