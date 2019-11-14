import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";
import Templates from "./components/Templates/Template";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showCock = () => {
    console.log("heilige Maria !!!");
  };
  pTest = () => {
    console.log("works");
  };

  render() {
    return(
        <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <body>
            <div className="container">
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        render={props => (
                            <Home {...props}/>
                        )}
                    />
                    <Route exact path="/templates" component={Templates}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
            </body>
        </div>
    );
  }
}
