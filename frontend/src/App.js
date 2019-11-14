import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import { Switch, Route } from "react-router-dom";
import Templates from "./components/Templates/Template";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showCock = () => {
    console.log("heilige Maria !!!");
  }
  pTest = () => {
    console.log("works");
  }

  render() {
    return(
        <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <body>
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        render={props => (
                            <Home {...props}/>
                        )}
                    />
                    <Route path="/templates" component={Templates}/>
                </Switch>
            </body>
        </div>
    );
  }
}
