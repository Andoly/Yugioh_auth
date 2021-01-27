import React, { Fragment } from "react";
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import Favorite from "./Pages/Favorite/Favotire";
import Home from "./Pages/Home/Home";

import { store, persisetdStore } from "./store/index";

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persisetdStore}>
      <BrowserRouter>
        <Fragment>          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/favorite" component={Favorite} />
            <Route path='*' component={NotFound}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
render(<App />, document.getElementById('root'))
