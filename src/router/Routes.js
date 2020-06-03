import React from "react";
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
   withRouter,
} from "react-router-dom";
import Home from "../components/Home";

export default function Routes() {
   return (
      <Router>
         <div>
            <Switch>
               <Route path="/" exact component={Home} />
            </Switch>
         </div>
      </Router>
   );
}
