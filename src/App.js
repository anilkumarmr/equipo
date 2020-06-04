import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import "./assets/main.css";

export default function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Home />
         </BrowserRouter>
      </Provider>
   );
}
