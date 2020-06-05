import { combineReducers } from "redux";
import viewReducer from "./viewReducer";
import patientReducer from "./patientReducer";

const appReducer = combineReducers({
   view: viewReducer,
   patients: patientReducer,
});

const rootReducer = (state, action) => {
   console.log(action);
   return appReducer(state, action);
};

export default rootReducer;
