import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import ModalMain from "../Modal"
import HeroForm from "./Form"
import FormInfo from "./Form/FormInfo"

import { HeroContent, HeroSection, ImageWrapper } from "./hero.styles"
import { useMediaQuery } from "../../utils/useMediaQuery"
import heroBg from "../../images/hero-bg.webp"
import { desktopLogos, getYears, mobileLogos, trustBarLogos } from "./helpers"
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
    setParentChartUrl,
    selectedGeneration,
    setIsLoadingMake,
    setMakes,
    setClassicMakes,
    setRelatedVehicles,
    resetForm,
  } = useContext(CalculatorContext)

  const makeModel = useQuery(MAKE_MODEL)
  const [createMarketWidgetFromTaxonomyName, { data }] =
    useMutation(MARKET_WIDGET)

  const relatedVehicleData = []

  const handleOpenModalForm = useCallback(() => setOpenModalForm(true), [])
  const handleCloseModal = useCallback(() => setOpenModalForm(false), [])

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

  const availableModels = useMemo(() => {
    if (availableModelData?.length > 0) {
      return availableModelData.map(
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
  }, [classicMakes, selectedMake, filteredMake])

  const availableGeneration = useMemo(() => {
    const selectedModelData =
      availableModelData?.length > 0 &&
      availableModelData.filter(a => a.name === selectedModel)[0]
    if (selectedModelData?.modelGeneration?.length > 0) {
      const toSortData = []
        .concat(selectedModelData?.modelGeneration)
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))

      toSortData.map(d => relatedVehicleData.push(d.name))

      return toSortData.map(m => (
        <option key={m.name} value={m.name}>
          {m.name}
        </option>
      ))
    }

    return (
      <option key="no-model-generation" value="">
        No available model generation!
      </option>
    )
  }, [availableModelData, selectedModel])

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

  const years = useMemo(() => {
    if (selectedGeneration && availableModelData?.length > 0) {
      const selectedModelData = availableModelData.filter(
        m => m.name === selectedModel
      )
      const filteredGenData = selectedModelData[0]?.modelGeneration.filter(
        g => g.name === selectedGeneration
      )

      return getYears(
        filteredGenData[0]?.year_start,
        filteredGenData[0]?.year_end
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
  }, [selectedGeneration, availableModelData])

  useEffect(() => {
    if (makeModel?.loading) {
      setIsLoadingMake(true)
    } else {
      setIsLoadingMake(false)
    }
  }, [makeModel?.loading, setIsLoadingMake])

  useEffect(() => {
    if (makeModel?.data) {
      setMakes(makeModel?.data?.makes?.map(make => make.name).sort())
      setClassicMakes(makeModel?.data?.makes)
    }
  }, [makeModel, setMakes, setClassicMakes])

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

  useEffect(() => {
    if (selectedMake && selectedModel) {
      createMarketWidgetFromTaxonomyName({
        variables: {
          makeName: selectedMake,
          modelName: selectedModel,
          domain: "classiccarvalue.com",
        },
      }).then()
    }
  }, [createMarketWidgetFromTaxonomyName, selectedMake, selectedModel])

  useEffect(async () => {
    if (data) {
      const parentChartUrl = data?.createMarketWidgetFromTaxonomyName?.data?.url
      setParentChartUrl(parentChartUrl)
    }
  }, [data, setParentChartUrl])

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
              makeOptions={availableMakes}
              modelOptions={availableModels}
              generationOptions={availableGeneration}
              yearOptions={years}
              variantOptions={availableVariant}
              onReset={resetForm}
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
