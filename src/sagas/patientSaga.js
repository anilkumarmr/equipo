import { put, call, takeEvery } from "redux-saga/effects";

import {
   getPatientSuccess,
   getPatientError,
   getChartsSuccess,
   getChartError,
   filterDashboardSuccess,
   filterDashboardError,
} from "../actions/patientActions";

import { getPatients, getCharts, filterDashBoard } from "../api/patients";

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

export default function* watchPatientsLoad() {
   yield takeEvery("GET_PATIENT_REQUEST", handleGetPatients);
   yield takeEvery("GET_CHARTS_REQUEST", handleGetCharts);
   yield takeEvery("FILTER_DASHBOARD_REQUEST", filterDashboard);
}
