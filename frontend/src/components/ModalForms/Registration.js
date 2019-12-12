import {React } from "react";
import "./ModalForms.css";
import axios from "axios";
import useForm from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import {withRouter} from "react-router-dom";
import {toast} from "react-toastify";

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

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = values => {
    axios.post("http://localhost:4000/api/users/register", {
      name: values.name,
      email: values.email,
      password: values.password
    })
        .then(
            res => {console.log(res.data);
            toast.success("Successfully registered.", {toastId: "succ"});}
        )
        .catch(errors => {
          console.log(errors);
          toast.error("Registration unsuccessful", {toastId: "unsucc"});
          throw errors;
        })
  };

  const classes = useStyles();

  return (
    <div>
      <h4 className="display-5">Registration</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CssTextField
          name="name"
          inputRef={register}
          id="standard-basic"
          className={classes.textField}
          label="Your Name"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <CssTextField
          name="email"
          type="email"
          inputRef={register}
          id="standard-basic"
          className={classes.textField}
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <CssTextField
          name="password"
          type="password"
          inputRef={register}
          id="standard-basic"
          className={classes.textField}
          label="Password"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <CssTextField
          name="password"
          type="password"
          inputRef={register}
          id="standard-basic"
          className={classes.textField}
          label="Password"
          margin="normal"
          variant="outlined"
          fullWidth
          required
        />
        <div className="h-100 mt-2 mb-2">
          <Button className="bg-success my-auto" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Registration);
