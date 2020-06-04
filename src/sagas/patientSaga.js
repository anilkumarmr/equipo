import { put, call, takeEvery } from "redux-saga/effects";

import { getPatientSuccess, getPatientError } from "../actions/patientActions";
import { getPatients } from "../api/patients";

function* handleGetPatients() {
   try {
      const response = yield call(getPatients);
      yield put(getPatientSuccess(response));
   } catch (error) {
      yield put(getPatientError(error));
   }
}

export default function* watchPatientsLoad() {
   yield takeEvery("GET_PATIENT_REQUEST", handleGetPatients);
}
