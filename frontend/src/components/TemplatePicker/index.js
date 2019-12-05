import React, { useState } from "react";
import cvIcon from "../../images/resume.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

const toastID = "test";
const notify = () => {

    toast.success("Successfully logged in.", {toastId: toastID});
};

export default function TemplatePicker() {
    const [template, setTemplate] = useState(0);
    const [accent, setAccent] = useState(0);




    return (
        <div className="row h-100 justify-content-center" onLoad={window.$authToken ? notify : null}>
              <div className="col-12 my-auto">
                  <div className="row justify-content-center">
                      <div
                        className={`col-9 col-sm-3 rounded p-3 m-3 ${
                          template === "first" ? "border border-success" : ""
                        }`}
                      >
                          <h2 className="font-weight-bold p-0 pb-sm-2">First</h2>
                            <img
                              src={cvIcon}
                              alt="CV Icon"
                              className="img-fluid"
                              onClick={() => setTemplate("first")}
                            />
                      </div>
                  <div
                    className={`col-9 col-sm-3 rounded p-3 m-3 ${
                      template === "second" ? "border border-success" : ""
                    }`}
                  >
                      <h2 className="font-weight-bold p-0 pb-sm-2">Second</h2>
                      <img
                          src={cvIcon}
                          alt="CV Icon"
                          className="img-fluid"
                          onClick={() => setTemplate("second")}
                      />
                  </div>
                      <div
                          className={`col-9 col-sm-3 rounded p-3 m-3 ${
                              template === "third" ? "border border-success" : ""
                          }`}
                      >
                          <h2 className="font-weight-bold p-0 pb-sm-2">Third</h2>
                          <img
                              src={cvIcon}
                              alt="CV Icon"
                              className="img-fluid"
                              onClick={() => setTemplate("third")}
                          />
                      </div>
                  </div>
              </div>

            <div className="col-2 text-center">
                <div>
                    <h2>Accent colour:</h2>
                </div>
            </div>

            <div className="col-5">
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-info"
                    onClick={() => setAccent("blue")}
                />
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-danger"
                    onClick={() => setAccent("red")}
                />
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-success"
                    onClick={() => setAccent("green")}
                />
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-warning"
                    onClick={() => setAccent("yellow")}
                />
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-secondary"
                    onClick={() => setAccent("grey")}
                />
                <div
                    className="colour-opt shadow d-inline-block m-2 bg-light"
                    onClick={() => setAccent("white")}
                />

            </div>

            <div className="col-12 text-center">

                <Link
                    to={{
                        pathname: "/create-cv",
                        state: { accentColour: accent, templateChoice: template }
                    }}

                >Next</Link>

            </div>

        </div>
    );
}
