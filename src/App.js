import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

import Routes from "./router/Routes";

export default function App() {
   return (
      /* Provide Redux store */
      <Provider store={store}>
         {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
         {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
         {/* Override `basename` (e.g: `homepage` in `package.json`) */}
         <BrowserRouter>
            {/* Render routes with provided `Layout`. */}
            <Routes />
         </BrowserRouter>
      </Provider>
   );
}
