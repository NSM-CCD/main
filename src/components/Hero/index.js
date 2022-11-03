import React, { useCallback, useEffect, useMemo, useState } from "react"

import ModalMain from "../Modal"
import HeroForm from "./Form"
import FormInfo from "./Form/FormInfo"

import { HeroContent, HeroSection, ImageWrapper } from "./hero.styles"
import { useMediaQuery } from "../../utils/useMediaQuery"
import heroBg from "../../images/hero-bg.webp"
import {
  getMakesListByYear,
  getModelsByCompNumYear,
  desktopLogos,
  getYears,
  mobileLogos,
  trustBarLogos,
} from "./helpers"

const Hero = () => {
  const [year, setYear] = useState("")
  const [companyNum, setCompany] = useState("")
  const [modelCat, setCategory] = useState("")
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])
  const [openModalForm, setOpenModalForm] = useState(false)
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

  const availableMakes = useMemo(
    () =>
      makes.length > 0 &&
      makes.map(
        make =>
          make?.company && (
            <option key={make.companynum} value={make.companynum}>
              {make.company}
            </option>
          )
      ),
    [makes]
  )

  const availableModels = useMemo(
    () =>
      models.length > 0 &&
      [...new Set(models.map(model => model?.modelcat))].map(
        i =>
          i && (
            <option key={i} value={i}>
              {i}
            </option>
          )
      ),
    [models]
  )

  const availableTrims = useMemo(() => {
    const filteredModels =
      models.length > 0 && models.filter(model => model?.modelcat === modelCat)

    return (
      filteredModels?.length > 0 &&
      [...new Set(filteredModels.map(model => model?.model))]
        .map(
          i =>
            i && (
              <option key={i} value={i}>
                {i}
              </option>
            )
        )
        .sort()
        .reverse()
    )
  }, [models, modelCat])

  useEffect(() => {
    if (!year) return null
    getMakesListByYear(year).then(response => setMakes(response.data))
  }, [year])

  useEffect(() => {
    if (!year || !companyNum) return null
    getModelsByCompNumYear(companyNum, year).then(response =>
      setModels(response.data)
    )
  }, [year, companyNum])

  const handleYear = useCallback(selectedYear => setYear(selectedYear), [])
  const handleMake = useCallback(selectedMake => setCompany(selectedMake), [])
  const handleCategory = useCallback(
    selectedModelCat => setCategory(selectedModelCat),
    []
  )

  const handleOpenModalForm = useCallback(
    () => setOpenModalForm(true),
    [openModalForm]
  )

  const handleCloseModal = useCallback(() => setOpenModalForm(false), [])

  const handleReset = useCallback(() => {
    setYear("")
    setCompany("")
    setCategory("")
    setMakes([])
    setModels([])
  }, [])

  return (
    <HeroSection>
      <HeroContent>
        <div className="container p-0">
          <div className="row px-0 mx-0">
            <div className="col-12 col-md-6 px-0">
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
            <HeroForm
              year={year}
              years={years}
              makes={availableMakes}
              models={availableModels}
              trims={availableTrims}
              onChangeYear={handleYear}
              onChangeMake={handleMake}
              onChangeModelCat={handleCategory}
              onReset={handleReset}
              onEstimate={handleOpenModalForm}
            />
          </div>
        </div>
      </HeroContent>
      <ImageWrapper>
        <img src={heroBg} alt="Hero bottom" className="img-fluid" />
      </ImageWrapper>
      <ModalMain
        open={openModalForm}
        content={<FormInfo onClose={handleCloseModal} />}
      />
    </HeroSection>
  )
}

export default Hero
