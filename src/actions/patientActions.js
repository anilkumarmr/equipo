const filterDashboardRequest = (payload) => ({
   type: "FILTER_DASHBOARD_REQUEST",
   payload,
});

const filterDashboardSuccess = (response) => ({
   type: "FILTER_DASHBOARD_SUCCESS",
   response,
});

const filterDashboardError = (error) => ({
   type: "FILTER_DASHBOARD_ERROR",
   error,
});

const filterPatientRequest = (payload) => ({
   type: "FILTER_PATIENT_REQUEST",
   payload,
});

const filterPatientSuccess = (response) => ({
   type: "FILTER_PATIENT_SUCCESS",
   response,
});

const filterPatientError = (error) => ({
   type: "FILTER_PATIENT_ERROR",
   error,
});

const getPatientRequest = (payload) => ({
   type: "GET_PATIENT_REQUEST",
   payload,
});

const getPatientSuccess = (response) => ({
   type: "GET_PATIENT_SUCCESS",
   response,
});

const getPatientError = (error) => ({
   type: "GET_PATIENT_ERROR",
   error,
});

const getChartsRequest = (payload) => ({
   type: "GET_CHARTS_REQUEST",
   payload,
});

const getChartsSuccess = (response) => ({
   type: "GET_CHARTS_SUCCESS",
   response,
});

const getChartError = (error) => ({
   type: "GET_CHARTS_ERROR",
   error,
});

const searchPatientRequest = (payload) => ({
   type: "SEARCH_PATIENT_REQUEST",
   payload,
});

const searchPatientSuccess = (response) => ({
   type: "SEARCH_PATIENT_SUCCESS",
   response,
});

const searchPatientError = (error) => ({
   type: "SEARCH_PATIENT_ERROR",
   error,
});

const showAddPatient = (payload) => ({
   type: "SHOW_ADD_PATIENT",
   payload,
});

const addPatientRequest = (payload) => ({
   type: "ADD_PATIENT_REQUEST",
   payload,
});

const addPatientSuccess = (payload) => ({
   type: "ADD_PATIENT_SUCCESS",
   payload,
});

const addPatientError = (payload) => ({
   type: "ADD_PATIENT_ERROR",
   payload,
});

export {
   filterDashboardRequest,
   filterDashboardSuccess,
   filterDashboardError,
   filterPatientRequest,
   filterPatientSuccess,
   filterPatientError,
   getPatientRequest,
   getPatientSuccess,
   getPatientError,
   getChartsRequest,
   getChartsSuccess,
   getChartError,
   searchPatientRequest,
   searchPatientSuccess,
   searchPatientError,
   showAddPatient,
   addPatientRequest,
   addPatientSuccess,
   addPatientError,
};
