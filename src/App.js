import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import LandingPage from "./Components/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PokemonDetails from "./Components/PokemonDetailPage/PokemonDetails";

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetails />
          </Route>
        </Switch>
    </div>
  );
}


export default App;
