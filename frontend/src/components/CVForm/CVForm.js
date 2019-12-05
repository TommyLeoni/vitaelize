import React, { Component } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

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

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.location.state);
  }

  render() {
    return <Form props={this.props.location.state}></Form>
  }
}

function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const { accentColour, templateChoice } = props;
  console.log(accentColour + " " + templateChoice);

  const onSubmit = values => {
    axios
      .post("http://localhost:4000/api/users/login", {
        email: values.email,
        password: values.password
      })
      .then(function(res) {
        console.log(res.data);
      });
  };

  const classes = useStyles();
  return (
    <div className="row h-100 justify-content-center">
      <div className="col-6 my-auto border-right">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row w-100">
            <div className="col-12">
              <CssTextField
                name="fullName"
                inputRef={register}
                id="standard-full-width"
                className={classes.textField}
                label="Your full name"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-6">
              <CssTextField
                name="Address"
                inputRef={register}
                id="standard-basic"
                className={classes.textField}
                label="Your address"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-6">
              <CssTextField
                name="phoneNumber"
                inputRef={register}
                id="standard-basic"
                className={classes.textField}
                label="Your phone number"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-12">
              <CssTextField
                name="email"
                inputRef={register}
                id="standard-basic"
                className={classes.textField}
                label="E-Mail"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-12 justify-content-center text-right">
              <input type="submit" value="Submit" className="btn btn-success" />
            </div>
          </div>
        </form>
      </div>
      <div className="col-6 my-auto text-center">{}</div>
    </div>
  );
}
