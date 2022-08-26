import classicCom from "../../images/logos/classic-com.svg"
import nada from "../../images/logos/nada.svg"
import oldCars from "../../images/logos/old-cars.svg"
import vmr from "../../images/logos/vmr.svg"

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
