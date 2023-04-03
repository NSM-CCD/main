import React, { useCallback, useContext, useMemo, useState } from "react"
import { navigate } from "gatsby"

import ModalMain from "../Modal"
import HeroForm from "./Form"
import FormInfo from "./Form/FormInfo"

import { ACIContext } from "../../contexts/ACIContext"
import { useMediaQuery } from "../../utils/useMediaQuery"
import {
  desktopLogos,
  mobileLogos,
  trustBarLogos,
  trustBarLinks,
} from "./helpers"
import { HeroContent, HeroSection, ImageWrapper } from "./hero.styles"
import heroBg from "../../images/hero-bg.webp"

const Hero = () => {
  const [openModalForm, setOpenModalForm] = useState(false)
  const isWiderScreen = useMediaQuery("(min-width: 1200px)")

  const {
    isFormSubmitted,
    slugParams,
    modelOptions,
    makeOptions,
    yearOptions,
    trimOptions,
    resetForm,
  } = useContext(ACIContext)

  const handleOpenModalForm = useCallback(() => {
    if (!isFormSubmitted) {
      setOpenModalForm(true)
    } else {
      navigate(`/results?rdata=${btoa(slugParams)}`)
    }
  }, [isFormSubmitted, slugParams])

  const handleCloseModal = useCallback(() => setOpenModalForm(false), [])

  const years = useMemo(
    () =>
      yearOptions?.map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      )),
    [yearOptions]
  )

  const availableMakes = useMemo(
    () =>
      makeOptions?.length > 0 &&
      makeOptions?.map(make => (
        <option
          key={make?.companynum}
          value={make?.companynum}
          data-val={make?.companynum}
        >
          {make?.company}
        </option>
      )),
    [makeOptions]
  )

  const availableModels = useMemo(() => {
    if (modelOptions?.length > 0) {
      return modelOptions.map(model => (
        <option key={model} value={model}>
          {model}
        </option>
      ))
    }

    return (
      <option key="no-model" value="">
        No available models!
      </option>
    )
  }, [modelOptions])

  const availableTrims = useMemo(() => {
    if (trimOptions?.length > 0) {
      return trimOptions.map(trim => (
        <option key={trim} value={trim}>
          {trim}
        </option>
      ))
    }

    return (
      <option key="no-trims" value="">
        No available trims!
      </option>
    )
  }, [trimOptions])

  return (
    <HeroSection>
      <HeroContent>
        <div className="container p-0">
          <div className="row px-0 mx-0">
            <div className="col-12 col-md-6 px-0">
              <div className="heading-block">
                <span className="hero-kicker">
                  Classic car valuations made simple.
                </span>
                <h1 className="hero-title">
                  How much is your classic car worth?
                </h1>
                <p className="hero-subtitle">
                  No single valuation tool or price estimator can precisely
                  determine how much your classic car is worth. So, we partnered
                  with experienced valuation experts to create a better classic
                  car valuation tool.
                </p>
              </div>

              <div className="trustbar">
                <p className="trustbar-kicker">Trusted and sourced by</p>
                <div className="trustbar-logos">
                  {!isWiderScreen
                    ? mobileLogos.map((logo, idx) => (
                        <a
                          key={idx}
                          href={trustBarLinks[logo]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            key={`image-${idx}`}
                            src={trustBarLogos[`${logo}Logo`]}
                            alt={logo}
                            className="img-fluid"
                          />
                        </a>
                      ))
                    : desktopLogos.map((logo, idx) => (
                        <a
                          href={trustBarLinks[logo]}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            key={`image-${idx}`}
                            src={trustBarLogos[`${logo}Logo`]}
                            alt={logo}
                            className="img-fluid"
                          />
                        </a>
                      ))}
                </div>
              </div>
            </div>
            <HeroForm
              makeOptions={availableMakes}
              modelOptions={availableModels}
              trimOptions={availableTrims}
              yearOptions={years}
              onEstimate={handleOpenModalForm}
              onReset={resetForm}
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
