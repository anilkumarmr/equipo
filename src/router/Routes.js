import React from "react";
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
   withRouter,
} from "react-router-dom";
import DashBoard from "../components/DashBoard";

export default function Routes() {
   return (
      <Router>
         <div>
            <Switch>
               <Route path="/" exact component={DashBoard} />
            </Switch>
         </div>
      </Router>
   );
}
