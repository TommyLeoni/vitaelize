import React, { useState } from "react";
import useForm from "react-hook-form";
//import axios from "axios";
import { TextField } from "@material-ui/core";
//import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import MuiPhoneNumber from "material-ui-phone-number";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import EduModel from "./model/eduModel";
import "jquery";
import "bootstrap/js/dist/collapse";

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

const EduField = props => (
  <div className={`row ${props.separator ? "border-top" : ""}`}>
    <div className="col-3">
      <KeyboardDatePicker
        disableToolbar
        inputRef={props.register}
        variant="outline"
        format="yyyy"
        margin="normal"
        onChange={event => (props.model.dateFrom = event.target.value)}
        id="date-picker-inline"
        label="From"
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        fullWidth
      />
    </div>
    <div className="col-3">
      <KeyboardDatePicker
        disableToolbar
        variant="outline"
        inputRef={props.register}
        format="yyyy"
        margin="normal"
        onChange={event => (props.model.dateUntil = event.target.value)}
        id="date-picker-inline"
        label="Until"
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        fullWidth
      />
    </div>
    <div className="col-6">
      <CssTextField
        inputRef={props.register}
        id="standard-full-width"
        label="Title"
        margin="normal"
        onChange={event => (props.model.title = event.target.value)}
        variant="outlined"
        fullWidth
      />
    </div>
    <div className="col-12 mb-2">
      <CssTextField
        inputRef={props.register}
        id="standard-full-width"
        label="Description"
        margin="normal"
        onChange={event => (props.model.description = event.target.value)}
        variant="outlined"
        fullWidth
      />
    </div>
  </div>
);

const Education = props => (
  <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <EduField model={props.model} separator={false} />
      {props.children}
    </MuiPickersUtilsProvider>
  </div>
);

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const [numEduFields, setNumEduFields] = useState(0);
  const eduFieldsArray = [];

  const onSubmit = values => {
    props.setState({
      yourName: values.fullName
    });
  };

  const onAddChild = () => {
    setNumEduFields(numEduFields + 1);
  };

  for (var i = 0; i < numEduFields; i += 1) {
    eduFieldsArray.push(<EduField model={EduModel} separator={true} />);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row w-100">
        <div className="col-12">
          <CssTextField
            name="fullName"
            inputRef={register}
            id="standard-full-width"
            label="Your full name"
            margin="normal"
            onChange={event => props.setState({ name: event.target.value })}
            variant="outlined"
            fullWidth
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
          />
        </div>
        <div className="col-6">
          <MuiPhoneNumber
            name="phoneNumber"
            inputRef={register}
            id="standard-basic"
            label="Your phone number"
            margin="normal"
            defaultCountry={"ch"}
            onChange={props.handleChange}
            regions={"europe"}
            fullWidth
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
          />
        </div>
        <div className="col-12 mt-3">
          <h4 className="font-weight-bold">Education</h4>
          <AddCircleIcon
            style={{ color: "green" }}
            onClick={onAddChild.bind(this)}
          />
          <Education register={register.bind(this)} model={EduModel}>
            {eduFieldsArray}
          </Education>
        </div>
        <div className="col-12 justify-content-center text-right">
          <input type="submit" value="Submit" className="btn btn-success" />
        </div>
      </div>
    </form>
  );
}
