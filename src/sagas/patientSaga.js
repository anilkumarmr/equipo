import { put, call, takeEvery } from "redux-saga/effects";

import {
   getPatientSuccess,
   getPatientError,
   getChartsSuccess,
   getChartError,
   filterDashboardSuccess,
   filterDashboardError,
   filterPatientSuccess,
   filterPatientError,
   searchPatientSuccess,
   searchPatientError,
   addPatientSuccess,
   addPatientError,
} from "../actions/patientActions";

import {
   getPatients,
   getCharts,
   filterDashBoard,
   searchPatient,
   addPatient,
} from "../api/patients";

function* handleGetPatients(payload) {
   try {
      const response = yield call(getPatients, payload.payload);
      yield put(getPatientSuccess(response));
   } catch (error) {
      yield put(getPatientError(error));
   }
}

function* handleGetCharts() {
   try {
      const response = yield call(getCharts);
      yield put(getChartsSuccess(response));
   } catch (error) {
      yield put(getChartError(error));
   }
}

function* filterDashboard(payload) {
   try {
      const response = yield call(filterDashBoard, payload.payload);
      yield put(filterDashboardSuccess(response));
   } catch (error) {
      yield put(filterDashboardError(error));
   }
}

function* handleFilterPatient(payload) {
   try {
      const response = yield call(filterDashBoard, payload.payload);
      yield put(filterPatientSuccess(response));
   } catch (error) {
      yield put(filterPatientError(error));
   }
}

function* handleSearchPatient(payload) {
   try {
      const response = yield call(searchPatient, payload.payload);
      yield put(searchPatientSuccess(response));
   } catch (error) {
      yield put(searchPatientError(error));
   }
}

function* handleAddPatient(payload) {
   try {
      const response = yield call(addPatient, payload.payload);
      yield put(addPatientSuccess(response));
   } catch (error) {
      yield put(addPatientError(error));
   }
}

export default function* watchPatientsLoad() {
   yield takeEvery("GET_PATIENT_REQUEST", handleGetPatients);
   yield takeEvery("GET_CHARTS_REQUEST", handleGetCharts);
   yield takeEvery("FILTER_DASHBOARD_REQUEST", filterDashboard);
   yield takeEvery("FILTER_PATIENT_REQUEST", handleFilterPatient);
   yield takeEvery("SEARCH_PATIENT_REQUEST", handleSearchPatient);
   yield takeEvery("ADD_PATIENT_REQUEST", handleAddPatient);
}
