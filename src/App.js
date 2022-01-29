import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import LandingPage from "./Components/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import PokemonDetailPage from "./Components/PokemonDetailPage/PokemonDetailPage";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonDetailPage/>
          </Route>
          <Route path='*' exact={true}>
            <Redirect to="/" /> : <LandingPage />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;
