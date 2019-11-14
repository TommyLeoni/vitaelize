import './Template.css';
import React from 'react';
import cv from "../../images/resume.svg"

function Template() {
  return(
  <div className="container">

    <div className="d-flex justify-content-center mt-5">
      <div className="row mt-5">
        <div class="col-sm">
          <button type="button" className="btn btn-outline-green"><img src={cv} class="select-cv"/></button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-outline-green"><img src={cv} class="select-cv"/></button>
        </div>
        <div className="col-sm">
          <button type="button" className="btn btn-outline-green"><img src={cv} class="select-cv"/></button>
        </div>
      </div>
    </div>

    <div className="d-flex justify-content-center mt-3">
      <div className="row mt-5">
      <p className="h4">Language: </p>
        <select className="ml-2">
          <option value="german">German</option>
          <option value="english">English</option>
          <option value="french">Baguette</option>
        </select>
      </div>
    </div>

    <div className="d-flex justify-content-center mt-3">
      <div className="row mt-5">
        <div className="col-sm">
          <span className="h4">Color: </span>
          <button type="button" className="btn btn-purple btn-cirlce btn-lg"></button>
          <button type="button" className="btn btn-blue btn-cirlce btn-lg"> </button>
          <button type="button" className="btn btn-green btn-cirlce btn-lg"></button>
          <button type="button" className="btn btn-white btn-cirlce btn-lg"></button>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-3">
      <div className="row mt-5">
        <button type="button" className="btn btn-success btn-lg">Start editing</button>
      </div>
    </div>
  </div>
)
}
export default Template;
