import './Home.css';
import React from 'react';
import logo from "../../images/logo.svg";
import cv from "../../images/resume.svg";
import Modal from "react-modal";
import Login from "../Login/Login";

function Home() {

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal(){
        setIsOpen(false);
    }


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
                        <button className="btn btn-vitaelize" onClick={openModal}>get started</button>
                    </div>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    contentLabel="Login"
                    className="modalForm"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
                        }
                    }}
                >
                    <Login/>

                </Modal>

            </div>
        </div>
    )
}
export default Home;