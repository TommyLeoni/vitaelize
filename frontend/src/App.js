import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";

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
                <Home/>
            </body>
        </div>
    );
  }
}
