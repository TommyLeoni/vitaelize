import React, { Component } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const CV = {
  name: "",
  address: "",
  phone: "",
  birthdate: "",
  careerEducation: [
    {
      title: "",
      description: "",
      from: "",
      until: ""
    }
  ]
};

export default function CVForm(props) {
  const { register, handleSubmit, errors } = useForm();
  const { accentColour, templateChoice } = props.location.state;
  
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
      <div className="col-4 my-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            inputRef={register}
            id="standard-basic"
            className={classes.textField}
            label="Email"
            margin="normal"
          />
          <TextField
            name="password"
            inputRef={register}
            id="standard-basic"
            className={classes.textField}
            label="Password"
            margin="normal"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="col-4 my-auto text-center">
        <h1>second column</h1>
      </div>
    </div>
  );
}
