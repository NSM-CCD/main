import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { navigate } from "gatsby"

import ModalMain from "../Modal"
import HeroForm from "./Form"
import FormInfo from "./Form/FormInfo"

import { HeroContent, HeroSection, ImageWrapper } from "./hero.styles"
import { useMediaQuery } from "../../utils/useMediaQuery"
import heroBg from "../../images/hero-bg.webp"
import {
  desktopLogos,
  getYears,
  mobileLogos,
  trustBarLinks,
  trustBarLogos,
} from "./helpers"
import { useMutation, useQuery } from "@apollo/client"
import { MAKE_MODEL, MARKET_WIDGET } from "../../graphqlQueries/queries"
import { CalculatorContext } from "../../contexts/Calculator"

const Hero = () => {
  const [openModalForm, setOpenModalForm] = useState(false)
  const isWiderScreen = useMediaQuery("(min-width: 1200px)")

  const {
    makes,
    classicMakes,
    selectedMake,
    selectedModel,
    selectedYear,
    setParentChartUrl,
    isFormSubmitted,
    setIsLoadingMake,
    setMakes,
    setClassicMakes,
    setRelatedVehicles,
    setDescription,
    resetForm,
    slugParams,
  } = useContext(CalculatorContext)

  const makeModel = useQuery(MAKE_MODEL)
  const [createMarketWidgetFromTaxonomyName, { data }] =
    useMutation(MARKET_WIDGET)

  let relatedVehicleData = []

  const handleOpenModalForm = useCallback(() => {
    if (!isFormSubmitted) {
      setOpenModalForm(true)
    } else {
      navigate(`/results?rdata=${btoa(slugParams)}`).then()
    }
  }, [isFormSubmitted, slugParams])

  const handleCloseModal = useCallback(() => setOpenModalForm(false), [])

  const availableMakes = useMemo(
    () =>
      makes.length > 0 &&
      makes.map(make => (
        <option key={make} value={make} data-val={make}>
          {make}
        </option>
      )),
    [makes]
  )

  const filteredMake = useMemo(
    () => classicMakes.filter(m => m.name === selectedMake),
    [classicMakes, selectedMake]
  )

  const availableModelData = useMemo(() => {
    if (filteredMake?.length > 0 && filteredMake[0]?.models?.length > 1) {
      return []
        .concat(filteredMake[0]?.models)
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    }
    return []
  }, [filteredMake])

  const availableYears = useMemo(() => {
    let years = []
    if (availableModelData?.length > 0) {
      availableModelData.forEach(model => {
        if (model?.year_start && !years.includes(model.year_start))
          years.push(model?.year_start)
        if (model?.year_end && !years.includes(model.year_end))
          years.push(model?.year_end)
      })

      return years.sort((a, b) => a - b)
    }
  }, [availableModelData])

  const years = useMemo(() => {
    if (availableYears?.length > 0) {
      return getYears(
        availableYears[0],
        availableYears[availableYears.length - 1]
      ).map(year => (
        <option key={year} value={year}>
          {year}
        </option>
      ))
    }

    return (
      <option key="no-year" value="">
        No available year!
      </option>
    )
  }, [availableYears, selectedModel])

  const availableModels = useMemo(() => {
    if (availableModelData?.length > 0) {
      return availableModelData
        .filter(
          model =>
            selectedYear > model?.year_start && selectedYear < model?.year_end
        )
        .map(
          i =>
            i?.name && (
              <option key={i.name} value={i.name}>
                {i.name}
              </option>
            )
        )
    }

    return (
      <option key="no-model" value="">
        No available model!
      </option>
    )
  }, [availableModelData, selectedYear])

  const availableVariant = useMemo(() => {
    const selectedModelData =
      availableModelData?.length > 0 &&
      availableModelData.filter(a => a.name === selectedModel)[0]
    if (selectedModelData?.modelVariant?.length > 0) {
      const toSortData = []
        .concat(selectedModelData?.modelVariant)
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

      toSortData.map(d => relatedVehicleData.push(d.name))

      return toSortData.map(m => (
        <option key={m.name} value={m.name}>
          {m.name}
        </option>
      ))
    }

    return (
      <option key="no-model-variant" value="">
        No available model variant!
      </option>
    )
  }, [availableModelData, selectedModel])

  useEffect(() => {
    if (makeModel?.loading) {
      setIsLoadingMake(true)
    } else {
      setIsLoadingMake(false)
    }
  }, [makeModel?.loading, setIsLoadingMake])

  useEffect(() => {
    if (makeModel?.data) {
      const filteredData = makeModel?.data?.makes?.filter(
        make => make?.models?.length > 1
      )
      setMakes(filteredData?.map(make => make.name).sort())
      setClassicMakes(filteredData)
    }
  }, [makeModel, setMakes, setClassicMakes])

  useEffect(() => {
    if (selectedMake && selectedModel) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: selectedMake,
          modelName: selectedModel,
          domain: "classiccarvalue.com",
        },
      })
    }
  }, [createMarketWidgetFromTaxonomyName, selectedMake, selectedModel])

  useEffect(() => {
    if (data) {
      const parentChartUrl = data?.createMarketWidgetFromTaxonomyName?.data?.url
      const description =
        data?.createMarketWidgetFromTaxonomyName?.data?.market?.description

      setDescription(description)
      setParentChartUrl(parentChartUrl)
    }
  }, [data, setParentChartUrl, setDescription])

  useEffect(() => {
    if (relatedVehicleData?.length > 0) {
      setRelatedVehicles(relatedVehicleData)
    }
  }, [relatedVehicleData])

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
                        <a href={trustBarLinks[logo]} target="_blank">
                          <img
                            key={`image-${idx}`}
                            src={trustBarLogos[`${logo}Logo`]}
                            alt={logo}
                            className="img-fluid"
                          />
                        </a>
                      ))
                    : desktopLogos.map((logo, idx) => (
                        <a href={trustBarLinks[logo]} target="_blank">
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
              yearOptions={years}
              variantOptions={availableVariant}
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
