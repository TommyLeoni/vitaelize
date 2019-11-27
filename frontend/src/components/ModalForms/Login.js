import React from "react";
import axios from "axios";
import "./ModalForms.css";
import useForm from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
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

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = values => {
    axios
      .post("http://localhost:4000/api/users/login", {
        email: values.email,
        password: values.password
      })
      .then(function(res) {
        window.$authToken = res.data;
      });
  };

  const classes = useStyles();
  return (
    <div>
      <h4 className="display-5 ">Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
          <CssTextField
            name="email"
            inputRef={register}
            id="standard-basic"
            className={classes.textField}
            label="Email"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <CssTextField
            name="password"
            inputRef={register}
            id="standard-basic"
            className={classes.textField}
            label="Password"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <div className="h-100 mt-2 mb-2">
            <Button className="bg-success my-auto" type="submit">
              Login
            </Button>
          </div>
      </form>
    </div>
  );
}

export default Login;
