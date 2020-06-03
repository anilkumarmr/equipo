import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import Routes from "./router/Routes";

export default function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Routes />
         </BrowserRouter>
      </Provider>
   );
}
