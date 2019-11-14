import './Navbar.css';
import React from 'react';
import logo from "../../images/logo.svg";
import { NavLink, Link } from "react-router-dom";

function Navbar() {

    function getInitialState() {
        return { activeTabClassName: "active"}
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand font-weight-bold m-brand" id="brand-text" to="">
                <img src={logo} className="Navbar-logo" alt="logo" />
                vitaelize
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ml-nav font-nav nav-vit">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/templates" activeClassName="active">Templates</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active">Log in</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
);
}
export default Navbar;