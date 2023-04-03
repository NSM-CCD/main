import { createContext } from "react"
import { initialState } from "./reducer"

export const ACIContext = createContext({
  ...initialState,
  yearOptions: [],
  makeOptions: [],
  modelOptions: [],
  trimOptions: [],
  listOptions: [],
  setIsFormSubmitted: () => {
    throw new Error("Not implemented!")
  },
  setIsYear: () => {
    throw new Error("Not implemented!")
  },
  setMake: () => {
    throw new Error("Not implemented!")
  },
  setMakeLabel: () => {
    throw new Error("Not implemented!")
  },
  setYear: () => {
    throw new Error("Not implemented!")
  },
  setModel: () => {
    throw new Error("Not implemented!")
  },
  setTrim: () => {
    throw new Error("Not implemented!")
  },
  setList: () => {
    throw new Error("Not implemented")
  },
  setRelatedVehicles: () => {
    throw new Error("Not implemented!")
  },
  resetForm: () => {
    throw new Error("Not implemented!")
  },
  setSelectedOptions: () => {
    throw new Error("Not implemented!")
  },
})
