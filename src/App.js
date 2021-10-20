import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Image from "./components/Image";
import About from "./components/About";

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <Link to="/home">Home</Link>
          <Link to="/image">Image</Link>
          <Link to="/about">About</Link>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/image">
            <Image />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
