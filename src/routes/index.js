import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Profile from "../components/Profile/Profile";

const Routes = () => {
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/profile" component={Profile} />
  </Switch>;
};
export default Routes;
