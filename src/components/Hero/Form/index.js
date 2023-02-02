import React, { useCallback, useContext } from "react"
import { CalculatorContext } from "../../../contexts/Calculator"

const HeroForm = ({
  makeOptions,
  modelOptions,
  yearOptions,
  variantOptions,
  onEstimate,
}) => {
  const {
    isLoadingMake,
    selectedMake,
    selectedModel,
    selectedVariant,
    selectedYear,
    setSelectedYear,
    setSelectedMake,
    setSelectedModel,
    setSelectedVariant,
    resetForm,
  } = useContext(CalculatorContext)

  const handleYear = useCallback(
    ({ target }) => {
      setSelectedModel("")
      setSelectedVariant("")
      setSelectedYear(target.value)
    },
    [setSelectedYear, setSelectedModel, setSelectedVariant]
  )

  const handleMake = useCallback(
    ({ target }) => {
      setSelectedYear("")
      setSelectedModel("")
      setSelectedVariant("")
      setSelectedMake(target.value)
    },
    [setSelectedMake, setSelectedYear, setSelectedModel, setSelectedVariant]
  )

  const handleCategory = useCallback(
    ({ target }) => setSelectedModel(target.value),
    [setSelectedModel]
  )

  const handleVariantChange = useCallback(
    ({ target }) => setSelectedVariant(target.value),
    [setSelectedVariant]
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
              <option value="">
                {isLoadingMake ? "loading list..." : "Select make"}
              </option>
              {makeOptions}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year">Select year</label>
            <select
              id="year"
              className="form-select"
              aria-label="Default select year"
              required
              disabled={isLoadingMake || !selectedMake}
              value={selectedYear}
              onChange={handleYear}
            >
              <option value="">Select year</option>
              {yearOptions}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="model">Select model</label>
            <select
              id="model"
              className="form-select"
              aria-label="Default select model"
              required
              disabled={isLoadingMake || !selectedYear}
              value={selectedModel}
              onChange={handleCategory}
            >
              <option value="">Select model</option>
              {modelOptions}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="variant">Select variant</label>
            <select
              id="variant"
              className="form-select"
              aria-label="Default select variant"
              required
              disabled={isLoadingMake || !selectedModel}
              value={selectedVariant}
              onChange={handleVariantChange}
            >
              <option value="">Select variant</option>
              {variantOptions}
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
              disabled={!selectedMake && !selectedModel}
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
