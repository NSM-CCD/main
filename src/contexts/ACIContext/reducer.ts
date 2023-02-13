export const initialState = {
  isFormSubmitted: false,
  isYear: true,
  make: "",
  model: "",
  year: "",
  trim: "",
  slugParams: "",
  chartUrl: "",
  description: "",
  makeLabel: "",
  makesList: [],
  yearsList: [],
  modelList: [],
  trimsList: [],
  optionsList: [],
  selectedOptions: [],
  standardPrice: [],
  modelsObjArr: [],
  relatedVehicles: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_is_year":
      return { ...state, isYear: action.isYear }
    case "set_year":
      return { ...state, year: action.year }
    case "set_make":
      return { ...state, make: action.make }
    case "set_label":
      return { ...state, makeLabel: action.makeLabel }
    case "set_model":
      return { ...state, model: action.model }
    case "set_models":
      return { ...state, modelList: action.modelList }
    case "set_makes":
      return { ...state, makesList: action.makesList }
    case "set_years":
      return { ...state, yearsList: action.yearsList }
    case "set_trim":
      return { ...state, trim: action.trim }
    case "set_trims":
      return { ...state, trimsList: action.trimsList }
    case "set_options":
      return { ...state, optionsList: action.optionsList }
    case "set_selected_options":
      return { ...state, selectedOptions: action.selectedOptions }
    case "set_model_obj":
      return { ...state, modelObjArr: action.modelObjArr }
    case "set_params":
      return { ...state, slugParams: action.slugParams }
    case "set_related":
      return { ...state, relatedVehicles: action.relatedVehicles }
    case "set_chart":
      return { ...state, chartUrl: action.chartUrl }
    case "set_description":
      return { ...state, description: action.description }
    default:
      return state
  }
}
