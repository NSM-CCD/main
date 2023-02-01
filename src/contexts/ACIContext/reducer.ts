export const initialState = {
  isLoadingMake: false,
  isFormSubmitted: false,
  isYear: true,
  make: "",
  model: "",
  year: "",
  trim: "",
  slugParams: "",
  makesList: [],
  yearsList: [],
  modelList: [],
  modelsObjArr: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "set_is_year":
      return { ...state, isYear: action.isYear }
    case "set_year":
      return { ...state, year: action.year }
    case "set_make":
      return { ...state, make: action.make }
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
    case "set_model_obj":
      return { ...state, modelObjArr: action.modelObjArr }
    default:
      return state
  }
}
