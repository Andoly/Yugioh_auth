import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact element={SignIn} />
        <Route path="/signup" element={SignUp} />
        <Route path="/profile" element={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
