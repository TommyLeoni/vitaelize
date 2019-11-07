import './Home.css';
import React from 'react';
import logo from "../../images/logo.svg";
import cv from "../../images/resume.svg"

function Home() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center m-title">
                <img src={logo} className="Home-logo " alt="logo" />
                <h1 className="font-weight-bold" id="hometitle">vitaelize</h1>
            </div>
            <div className="row">
                {/*row and justify-center*/}

                <div className="col-md-5 d-flex justify-content-center ml-auto" id="div-hcv">
                    <img src={cv} className="Home-cv" alt="cv" />
                </div>
                <div className="col-md-5 justify-content-center mr-auto" id="div-htext">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home;