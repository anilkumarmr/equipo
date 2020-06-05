const INITIAL_STATE = {
   patients: [],
   totalpatients: 0,
   from: 1,
   to: 6,
   currentPage: 1,
   chartData: {},
   searchResult: [],
   isVisible: false,
};

const patientReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case "FILTER_DASHBOARD_SUCCESS":
         return {
            ...state,
            patients: action.response.data.patients,
            totalpatients: 300,
            currentPage: 1,
            from: 1,
            to: 6,
         };

      case "FILTER_PATIENT_SUCCESS":
         return {
            ...state,
            patients: action.response.data.patients,
            totalpatients: 441,
            currentPage: 1,
            from: 1,
            to: 6,
         };

      case "GET_PATIENT_REQUEST":
         return {
            ...state,
            currentPage: action.payload.page,
            from: (action.payload.page - 1) * 6 + 1,
            to: action.payload.page * 6,
         };

      case "GET_PATIENT_SUCCESS":
         return {
            ...state,
            patients: action.response.data.patients,
            totalpatients: action.response.data.totalPatients,
         };

      case "GET_CHARTS_SUCCESS":
         return {
            ...state,
            chartData: action.response.data,
         };

      case "SEARCH_PATIENT_SUCCESS":
         return {
            ...state,
            searchResult: action.response.data.patients,
         };

      case "SHOW_ADD_PATIENT":
         return {
            ...state,
            isVisible: action.payload.isVisible,
         };
      case "ADD_PATIENT_REQUEST":
         return {
            ...state,
         };
      case "ADD_PATIENT_SUCCESS":
         return {
            ...state,
         };
      case "ADD_PATIENT_ERROR":
         return {
            ...state,
         };

      default:
         return state;
   }
};

export default patientReducer;
