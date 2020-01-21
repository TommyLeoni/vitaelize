import MuiPhoneNumber from "material-ui-phone-number";
import PhoneInput from "react-phone-number-input";
import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import PortraitDropzone from "./PortraitDnd";
import "react-phone-number-input/style.css";
import LoadingModal from "./LoadingModal";
import EducationCareer from "./EduCareer";
import useForm from "react-hook-form";
import CV from "./model/cvModel";
import Hobbys from "./Hobbys";
import axios from "axios";
import React, { useState } from "react";
import "./styles.css";
import "date-fns";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

export default function Form(props) {
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { register, handleSubmit } = useForm();
  const setState = props.setState;
  const curriculum = CV;
  const onSubmit = values => {
    console.log(curriculum);
    axios({
      url: "http://localhost:4000/api/pdf/generate",
      method: "POST",
      data: curriculum,
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE2ZDY1ZDI3MGU3NjNjMjdiMjBiYzEiLCJpYXQiOjE1Nzg1NTQ5NzN9.P8UCcJwflK_fKinqXE30KREyuzVtXuTJgavaGVqOzYk"
      }
    }).then(function(res, err) {
      if (err) throw err;
      console.log(res);
      setLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="content-container">
      <PortraitDropzone />
      <div className="row w-100">
        <div className="col-12">
          <CssTextField
            name="jobTitle"
            inputRef={register}
            id="standard-full-width"
            label="Your job title"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={event => {
              curriculum.jobTitle = event.target.value;
              setState({ cv: curriculum });
            }}
          />
        </div>
        <div className="col-12">
          <CssTextField
            name="fullName"
            inputRef={register}
            id="standard-full-width"
            label="Your full name"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={event => {
              curriculum.fullName = event.target.value;
              setState({ cv: curriculum });
            }}
          />
        </div>
        <div className="col-6">
          <CssTextField
            name="Address"
            inputRef={register}
            id="standard-basic"
            label="Your address"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={event => {
              curriculum.address = event.target.value;
              setState({ cv: curriculum });
            }}
          />
        </div>
        <div className="col-6">
          <CssTextField
            name="phone"
            inputRef={register}
            id="standard-basic"
            label="Phone number"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={event => {
              curriculum.phone = event.target.value;
              setState({ cv: curriculum });
            }}
          />
        </div>
        <div className="col-12">
          <CssTextField
            name="email"
            inputRef={register}
            id="standard-basic"
            label="E-Mail"
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={event => {
              curriculum.email = event.target.value;
              setState({ cv: curriculum });
            }}
          />
        </div>
        <div className="col-12 m-0 p-0">
          <EducationCareer
            register={register.bind(this)}
            setState={setState.bind(this)}
            curriculum={curriculum}
          />
        </div>
        <div className="col-12 m-0 p-0">
          <Hobbys
            register={register.bind(this)}
            setState={setState.bind(this)}
            curriculum={curriculum}
          />
        </div>
        <div className="col-12 justify-content-center text-right mt-3">
          <input
            type="submit"
            value="Submit"
            className="btn btn-success"
            onClick={() => setModalShow(true)}
          />
        </div>
        <LoadingModal
          show={modalShow}
          isLoading={isLoading}
          onHide={() => setModalShow(false)}
        />
      </div>
    </form>
  );
}
