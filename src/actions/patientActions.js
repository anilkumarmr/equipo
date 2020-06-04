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
};
