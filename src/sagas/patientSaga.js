import { put, call, takeEvery } from "redux-saga/effects";

import {
   getPatientSuccess,
   getPatientError,
   getChartsSuccess,
   getChartError,
} from "../actions/patientActions";
import { getPatients, getCharts } from "../api/patients";

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

export default function* watchPatientsLoad() {
   yield takeEvery("GET_PATIENT_REQUEST", handleGetPatients);
   yield takeEvery("GET_CHARTS_REQUEST", handleGetCharts);
}
