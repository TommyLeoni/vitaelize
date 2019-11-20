import './Template.css';
import React from 'react';
import cv from "../../images/resume.svg";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const defaultOption = options[0];
const options = [
  'one', 'two', 'three'
]

function Template() {
  return(
    <div>
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
            <input type="button" className="btn btn-purple btn-circle btn-lg"></input>
            <input type="button" className="btn btn-blue btn-circle btn-lg"></input>
            <input type="button" className="btn btn-green btn-circle btn-lg"></input>
            <input type="button" className="btn btn-white btn-circle btn-lg"></input>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="row mt-5">
          <input type="submit" className="btn btn-success btn-lg" value="start editing"></input>
        </div>
      </div>
      </div>
)
}
export default Template;
