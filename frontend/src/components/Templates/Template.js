import './Template.css';
import React from 'react';
import cv from "../../images/resume.svg"
import { Formik, Field, Form } from "formik";
import {Button as MaterialButton} from "@material-ui/core";
import Button from "./Button.js";

function Template() {
  return(
    <Formik initialValues={{
      cv: '', lang: "", color: ""}}
      onSubmit={(data, {setSubmitting})=> {
        setSubmitting(true);
        console.log("submit: ", data);
        setSubmitting(false);
      }}
      >
      {({ values, isSubmitting, handleChange, handleBlur, handleSubmit}) => (
      <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center mt-5">
        <div className="row mt-5">
          <div class="col-sm">
            <Field name="cv" type="radio" value="cv1" as={Button}></Field>
            </div>
            <div className="col-sm">
              <Field name="cv" type="radio" value="cv2" as={Button}></Field>
            </div>
            <div className="col-sm">
              <Field name="cv" type="radio" value="cv3" as={Button}></Field>
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
        <MaterialButton disabled={isSubmitting} type="submit">submit</MaterialButton>
          {/*<input type="submit" className="btn btn-success btn-lg" disabled={isSubmitting } value="start editing"></input> */}
        </div>
      </div>
      </Form>
    )}</Formik>
)
}
export default Template;
