import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import Login from "./components/ModalForms/Login";
import { Switch, Route } from "react-router-dom";
import TemplatePicker from "./components/TemplatePicker";
import CVForm from './components/CVForm/CVForm';

export default class App extends React.Component {
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
                    <Route exact path="/templates" component={TemplatePicker}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/create-cv" component={CVForm}/>
                </Switch>
            </div>
        </div>
    );
  }
}
