import aciClient from "../../utils/aciClient"

export const getMakesListByYear = async year =>
  await aciClient.get(`/api/nada_raw_companies/makes/${year}`)

export const getModelsByCompNumYear = async (companyNum, year) =>
  await aciClient.get(`/api/standard_table/${companyNum}/${year}`)
