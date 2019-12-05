import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import { Switch, Route } from "react-router-dom";
import TemplatePicker from "./components/TemplatePicker";
import CVForm from './components/CVForm/CVForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends React.Component {
    test = () => toast("Successfully logged in.", {containerId: 'succ'});
  render() {
    return(
        <div className="App">
            <header className="App-header">
              <Navbar/>
            </header>
            <ToastContainer position={toast.POSITION.TOP_RIGHT}/>
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
                    <Route exact path="/create-cv" component={CVForm}/>
                </Switch>
                {window.$authToken ? <ToastContainer enableMultiContainer containerId={'succ'} position={toast.POSITION.BOTTOM_LEFT}/> : null}
            </div>
        </div>
    );
  }
}
