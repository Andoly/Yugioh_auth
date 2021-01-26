import React, { Fragment } from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Learn from "./components/Learn/Learn";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";

import { store, persisetdStore } from "./store/index";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persisetdStore}>
      <BrowserRouter>
        <Fragment>          
          <Switch>
            <Route path="/" exact component={Learn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path='*' component={NotFound}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
render(<App />, document.getElementById('root'))
