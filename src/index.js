import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import Signup from "./components/auth/Signup";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

import reducers from "./reducers";

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token"),
    },
  },
  applyMiddleware(reduxThunk),
);

reactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root"),
);
