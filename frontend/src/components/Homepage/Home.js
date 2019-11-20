import './Home.css';
import React, {Component} from 'react';
import cv from "../../images/resume.svg";
import Modal from "react-responsive-modal";
import Login from "../Login/Login";

class Home extends Component{

    state = {
        open: false,
        showCloseIcon: false,
        modal: "modal",
        overlay: "overlay"
    };

    openModal = () => {
        this.setState({open: true});
    };

    closeModal = () => {
        this.setState({open: false});
    };

    render() {

        const { open, showCloseIcon, modal, overlay } = this.state;

        return (
            <div>
                <div className="row home-cont">

                    <div className="col-lg-5 col-md-10 col-sm-12 d-flex ml-auto mr-auto justify-content-center" id="div-hcv">
                        <img src={cv} className="Home-cv" alt="cv" />
                    </div>
                    <div className="col-lg-5 col-md-10 mr-lg-5 ml-5 mt-md-5 mt-lg-0 text-lg-left text-md-center" id="div-htext">
                        <div className="d-flex justify-content-center">
                            <p id="introduction-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <button className="btn btn-vitaelize" onClick={this.openModal}>get started</button>
                        </div>
                    </div>

                    <Modal
                        open={open}
                        onClose={this.closeModal}
                        contentLabel="Login"
                        showCloseIcon={showCloseIcon}
                        classNames={{
                            modal: modal,
                            overlay: overlay
                        }}
                    >
                        <Login/>

                    </Modal>

                </div>
            </div>
        )
    }

}
export default Home;