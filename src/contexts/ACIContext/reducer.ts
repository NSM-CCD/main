export const initialState = {
  isFormSubmitted: false,
  isYear: true,
  noClassic: false,
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
  modelsObjArr: [],
  relatedVehicles: [],
  standardPrice: [],
  standardPriceArr: [],
  listPrice: null,
  ocwStandardPrice: [],
  ocwStandardPriceArr: [],
  ocwListPrice: null,
  vmrStandardPrice: [],
  vmrStandardPriceArr: [],
  vmrListPrice: null,
  standardNADA: [],
  standardOCW: [],
  standardVMR: [],
  optionMods: [],
  modifiedPriceArr: [],
  modifiedPrice: [],
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
    case "set_list_price":
      return { ...state, listPrice: action.listPrice }
    case "set_standard_price":
      return { ...state, standardPrice: action.standardPrice }
    case "set_standard_price_array":
      return { ...state, standardPriceArr: action.standardPriceArr }
    case "set_ocw_list_price":
      return { ...state, ocwListPrice: action.ocwListPrice }
    case "set_ocw_standard_price":
      return { ...state, ocwStandardPrice: action.ocwStandardPrice }
    case "set_ocw_standard_price_array":
      return { ...state, ocwStandardPriceArr: action.ocwStandardPriceArr }
    case "set_vmr_list_price":
      return { ...state, vmrListPrice: action.vmrListPrice }
    case "set_vmr_standard_price":
      return { ...state, vmrStandardPrice: action.vmrStandardPrice }
    case "set_vmr_standard_price_array":
      return { ...state, vmrStandardPriceArr: action.vmrStandardPriceArr }
    case "set_nada":
      return { ...state, standardNADA: action.standardNADA }
    case "set_ocw":
      return { ...state, standardOCW: action.standardOCW }
    case "set_vmr":
      return { ...state, standardVMR: action.standardVMR }
    case "set_option_mods":
      return { ...state, optionMods: action.optionMods }
    case "set_modified_price_array":
      return { ...state, modifiedPriceArr: action.modifiedPriceArr }
    case "set_modified_price":
      return { ...state, modifiedPrice: action.modifiedPrice }
    case "set_no_classic":
      return { ...state, noClassic: action.noClassic }
    default:
      return state
  }
}
