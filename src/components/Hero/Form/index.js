import React, { useCallback, useContext } from "react"
import { CalculatorContext } from "../../../contexts/Calculator"

const HeroForm = ({
  makeOptions,
  modelOptions,
  generationOptions,
  yearOptions,
  variantOptions,
  trimOptions,
  onEstimate,
}) => {
  const {
    isLoadingMake,
    selectedMake,
    selectedModel,
    selectedVariant,
    selectedGeneration,
    selectedYear,
    setSelectedYear,
    setSelectedMake,
    setSelectedModel,
    setSelectedTrim,
    setSelectedGeneration,
    setSelectedVariant,
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

  const handleGenerationChange = useCallback(
    ({ target }) => setSelectedGeneration(target.value),
    [setSelectedGeneration]
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
            <label htmlFor="model">Select model</label>
            <select
              id="model"
              className="form-select"
              aria-label="Default select model"
              required
              disabled={!selectedMake || isLoadingMake}
              value={selectedModel}
              onChange={handleCategory}
            >
              <option value="">Select model</option>
              {modelOptions}
            </select>
          </div>
          {(generationOptions?.length ||
            (!selectedMake && !selectedModel) ||
            (!generationOptions?.length && !variantOptions?.length)) && (
            <>
              <div className="form-group">
                <label htmlFor="generation">Select model generation</label>
                <select
                  id="generation"
                  className="form-select"
                  aria-label="Default select generation"
                  required
                  disabled={!selectedModel || isLoadingMake}
                  value={selectedGeneration}
                  onChange={handleGenerationChange}
                >
                  <option value="">Select generation</option>
                  {generationOptions}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="year">Select year</label>
                <select
                  id="year"
                  className="form-select"
                  aria-label="Default select year"
                  required
                  disabled={!selectedGeneration || isLoadingMake}
                  value={selectedYear}
                  onChange={handleYear}
                >
                  <option value="">Select year</option>
                  {yearOptions}
                </select>
              </div>
            </>
          )}

          {variantOptions?.length > 0 && !generationOptions?.length && (
            <div className="form-group">
              <label htmlFor="variant">Select variant</label>
              <select
                id="variant"
                className="form-select"
                aria-label="Default select variant"
                required
                disabled={!selectedModel || isLoadingMake}
                value={selectedVariant}
                onChange={handleVariantChange}
              >
                <option value="">Select variant</option>
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
                disabled={!selectedVariant || isLoadingMake}
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
