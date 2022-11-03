import aciClient from "../../utils/aciClient"
import nada from "../../images/logos/nada.svg"
import vmr from "../../images/logos/vmr.svg"
import oldCars from "../../images/logos/old-cars.svg"
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

export const getYears = startYear => {
  const currentYear = new Date().getFullYear(),
    years = []
  startYear = startYear || 1980
  while (startYear <= currentYear) {
    years.push(startYear++)
  }
  return years
}
