import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import Login from "./components/ModalForms/Login";
import { Switch, Route } from "react-router-dom";
import Templates from "./components/Templates/Template";
import CVForm from './components/CVForm/CVForm';

export default class App extends React.Component {
<<<<<<< HEAD
  showCock = () => {
    console.log("heilige Maria !!!");
  };
  
  pTest = () => {
    console.log("works");
  };
=======
>>>>>>> 28897e81c11bc120cae1de62ff35a17ff6e68ee0

  render() {
    return(
        <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <div className="container h-100">
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
                    <Route exact path="/create-cv" component={CVForm}/>
                </Switch>
            </div>
        </div>
    );
  }
}
