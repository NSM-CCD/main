import aciClient from "../../utils/aciClient"
import nada from "../../images/logos/nada.svg"
import vmr from "../../images/logos/vmr.svg"
import oldCars from "../../images/logos/old-cars.svg"

import carImage from "../../images/car-road.webp"
import dummyCarImage from "../../images/cadillac.png"

import classicCom from "../../images/logos/classic-com.svg"

export const getMakesListByYear = async year =>
  await aciClient.get(`/api/nada_raw_companies/makes/${year}`)

export const getModelsByCompNumYear = async (companyNum, year) =>
  await aciClient.get(`/api/standard_table/${companyNum}/${year}`)

export const trustBarLogos = {
  nadaLogo: nada,
  vmrLogo: vmr,
  oldCarsLogo: oldCars,
  classicComLogo: classicCom,
}

export const mobileLogos = ["nada", "oldCars", "vmr", "classicCom"]
export const desktopLogos = ["nada", "vmr", "oldCars", "classicCom"]

export const getYears = (startYear, endYear) => {
  if (!startYear || !endYear) return []

  const years = []
  while (startYear <= endYear) {
    years.push(startYear++)
  }
  return years
}

export const processObj = [
  {
    key: 1,
    title: "Enter your vehicle’s details",
    description: `Let’s get specific about your classic and get the most accurate value possible.`,
    image: dummyCarImage,
  },
  {
    key: 2,
    title: "Receive valuation and more",
    description: "pricing and sales history.",
    image: carImage,
  },
  {
    key: 3,
    title: "Get a free quote",
    description: "Save up to 40% with our Agreed Value coverage*",
    image: carImage,
  },
  {
    key: 4,
    title: "Discuss coverage options",
    description:
      "A dedicated collector insurance specialist will assist to tailor options to fit your needs.",
    image: carImage,
  },
  {
    key: 5,
    title: "Enjoy your passion with peace of mind",
    description:
      "Agreed Value coverage. Top-rated customer service. Exceptional savings.",
    image: carImage,
  },
]
