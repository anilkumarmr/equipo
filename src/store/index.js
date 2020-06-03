import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootReducer from "../reducers";
import rootSaga from "../sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : (f) => f
   )
);

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;
