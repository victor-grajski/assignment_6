import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import appRoutes from './shared/appRoutes';
import './App.css';

import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
        </Switch>
      </div>
    );
  }
}


export default App;