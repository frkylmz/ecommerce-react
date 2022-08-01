import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <div id="content">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
