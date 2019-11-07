import './Navbar.css';
import React from 'react';
import logo from "../../images/logo.svg";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand font-weight-bold m-brand" id="brand-text" href="#">
                <img src={logo} className="Navbar-logo" alt="logo" />
                vitaelize
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ml-nav font-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Templates</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Log in</a>
                    </li>
                </ul>
            </div>
        </nav>
);
}
export default Navbar;