import React, { Component } from "react";
import useForm from "react-hook-form";
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

export default function CVForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  const classes = useStyles();
  return (
    <div className="row h-100 justify-content-center">
      <div className="col-4 my-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="Name"
            inputRef={register}
            id="standard-basic"
            className={classes.textField}
            label="Standard"
            margin="normal"
          />
        </form>
      </div>
      <div className="col-4 my-auto text-center">
        <h1>second column</h1>
      </div>
    </div>
  );
}
