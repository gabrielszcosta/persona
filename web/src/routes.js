import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Success from "./pages/Success";
import Register from "./pages/Register";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/success" component={Success} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
