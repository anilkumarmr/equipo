import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
   console.log(action);
   return appReducer(state, action);
};

export default rootReducer;
