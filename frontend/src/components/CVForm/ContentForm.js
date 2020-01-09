import MuiPhoneNumber from "material-ui-phone-number";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";
import PortraitDropzone from "./PortraitDnd";
import EducationCareer from "./EduCareer";
import useForm from "react-hook-form";
import CV from "./model/cvModel";
import Hobbys from "./Hobbys";
import React from "react";
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
  const { register, handleSubmit } = useForm();
  const setState = props.setState;
  const curriculum = CV;
  const onSubmit = values => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="content-container">
      <PortraitDropzone />
      <div className="row w-100">
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
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </div>
    </form>
  );
}
