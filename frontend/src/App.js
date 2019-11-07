import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";

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
            <Navbar/>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/*<p onClick={this.pTest}>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.showCock}
            >
              Learn React
            </a>*/}
          </header>
        </div>
    );
  }
}
