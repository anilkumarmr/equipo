const INITIAL_STATE = {
   patients: [],
};

const patientReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case " FILTER_DASHBOARD_REQUEST":
         return {
            ...state,
         };
      case "FILTER_DASHBOARD_SUCCESS":
         return {
            ...state,
         };
      case "FILTER_DASHBOARD_ERROR":
         return {
            ...state,
         };
      case "FILTER_PATIENT_REQUEST":
         return {
            ...state,
         };
      case "FILTER_PATIENT_SUCCESS":
         return {
            ...state,
         };
      case "FILTER_PATIENT_ERROR":
         return {
            ...state,
         };
      case "GET_PATIENT_REQUEST":
         return {
            ...state,
         };
      case "GET_PATIENT_SUCCESS":
         return {
            ...state,
            patients: action.response.data.patients,
         };
      case "GET_PATIENT_ERROR":
         return {
            ...state,
         };

      default:
         return state;
   }
};

export default patientReducer;
