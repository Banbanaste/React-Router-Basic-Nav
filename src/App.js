import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </div>
);

export default App;
