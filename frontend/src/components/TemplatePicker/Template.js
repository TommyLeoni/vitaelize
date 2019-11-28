import './Template.css';
import React from 'react';
import cv from "../../images/resume.svg";
import 'react-dropdown/style.css';
const state = { cv: 0,
  value: "",
  color: ""};

  function handleCv(event){
    state.cv = event;
    console.log(state.cv);

  }
  function logAll(){
    console.log(state.cv, state.value, state.color);
  }
  function handleChange(e) {
  let {value} = e.target;
  state.value = value;
  console.log(state.value);
  }
  function handleColor(event){
    state.color = event;
  }

function Template() {
  return(
    <div>
    <form>
    <input type="text"/>
      <div className="d-flex justify-content-center mt-5">
        <div className="row mt-5">
          <div className="col-sm">
          <input type="radio" id="hcv1" className="input-hidden"/>
            <label htmlFor="hcv1">
            <button type="button" name="color" onClick={() => handleCv(1)} className="btn btn-outline-green"><img src={cv} className="select-cv" alt="cv"/></button>
            </label>
          </div>
          <div className="col-sm">
          <button type="button" name="color" onclick="handleCv(2)" onClick={() => handleCv(2)} className="btn btn-outline-green"><img src={cv} class="select-cv"/></button>
          </div>
          <div className="col-sm">
          <button type="button" name="color" onclick="handleCv(3)" onClick={() => handleCv(3)} className="btn btn-outline-green"><img src={cv} class="select-cv"/></button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="row mt-5">
          <p className="h4">Language: </p>
          <select className="ml-2" onChange={handleChange}>
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
            <input type="button" onClick={() => handleColor("purple")} className="btn btn-purple btn-circle btn-lg"/>
            <input type="button" onClick={() => handleColor("blue")} className="btn btn-blue btn-circle btn-lg"/>
            <input type="button" onClick={() => handleColor("green")} className="btn btn-green btn-circle btn-lg"/>
            <input type="button" onClick={() => handleColor("white")} className="btn btn-white btn-circle btn-lg"/>

          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="row mt-5">
          <input type="button" className="btn btn-success btn-lg" value="start editing" onClick={logAll}/>
        </div>
      </div>
      </form>
      </div>
)
}
export default Template;
