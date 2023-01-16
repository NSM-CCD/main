import React, { useCallback, useContext } from "react"
import { CalculatorContext } from "../../../contexts/Calculator"

const HeroForm = ({
  makeOptions,
  modelOptions,
  yearOptions,
  variantOptions,
  trimOptions,
  onEstimate,
}) => {
  const {
    isLoadingMake,
    startYear,
    endYear,
    selectedMake,
    selectedModel,
    selectedVariant,
    selectedYear,
    setSelectedYear,
    setSelectedMake,
    setSelectedModel,
    setSelectedTrim,
    resetForm,
  } = useContext(CalculatorContext)

  const handleYear = useCallback(
    ({ target }) => setSelectedYear(target.value),
    [setSelectedYear]
  )

  const handleMake = useCallback(
    ({ target }) => setSelectedMake(target.value),
    [setSelectedMake]
  )

  const handleCategory = useCallback(
    ({ target }) => setSelectedModel(target.value),
    [setSelectedModel]
  )

  const handleTrimChange = useCallback(
    ({ target }) => setSelectedTrim(target.value),
    [setSelectedTrim]
  )

  return (
    <div className="col-12 col-md-6 form-wrapper">
      <div className="form-container">
        <h2 className="form-title">Calculate the value of your classic car</h2>
        <p className="form-subtitle">Enter the details of your vehicle</p>
        <hr />
        <div className="form">
          <div className="form-group">
            <label htmlFor="make">Select make</label>
            <select
              id="make"
              className="form-select"
              aria-label="Default select make"
              required
              disabled={isLoadingMake}
              value={selectedMake}
              onChange={handleMake}
            >
              <option value="">Select make</option>
              {makeOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model">Select model</label>
            <select
              id="model"
              className="form-select"
              aria-label="Default select model"
              required
              disabled={!selectedMake}
              value={selectedModel}
              onChange={handleCategory}
            >
              <option value="">Select model</option>
              {modelOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="year">Select year</label>
            <select
              id="year"
              className="form-select"
              aria-label="Default select year"
              required
              disabled={
                !selectedMake && !selectedModel && !startYear && !endYear
              }
              value={selectedYear}
              onChange={handleYear}
            >
              <option value="">Select year</option>
              {yearOptions}
            </select>
          </div>
          {variantOptions?.length > 0 && (
            <div className="form-group">
              <label htmlFor="year">Select variant</label>
              <select
                id="variant"
                className="form-select"
                aria-label="Default select variant"
                required
                disabled={!variantOptions.length > 0}
                onChange={handleTrimChange}
              >
                <option value="">Select trim</option>
                {variantOptions}
              </select>
            </div>
          )}
          {trimOptions?.length > 0 && (
            <div className="form-group">
              <label htmlFor="year">Select trim</label>
              <select
                id="trim"
                className="form-select"
                aria-label="Default select trim"
                required
                disabled={!selectedVariant}
                onChange={handleTrimChange}
              >
                <option value="">Select trim</option>
                {trimOptions}
              </select>
            </div>
          )}
          <hr className="m-0" />
          <div className="action-buttons">
            <button type="reset" className="btn-reset" onClick={resetForm}>
              Reset Selections
            </button>
            <button
              type="button"
              className="btn-estimate"
              disabled={!selectedMake && selectedModel && selectedYear}
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
