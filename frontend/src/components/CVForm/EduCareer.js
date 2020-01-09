import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TextField, Button } from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import { withStyles } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

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

let curriculum;
let setState;

const EduField = props => (
  <div className={`row ${props.separator ? "border-top" : ""}`}>
    <div className="col-3">
      <KeyboardDatePicker
        name="from"
        disableToolbar
        inputRef={props.register}
        variant="outline"
        format="yyyy"
        margin="normal"
        id="date-picker-inline"
        label="From"
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
        fullWidth
        onChange={value => {
          curriculum.eduCareer[props.pos].from = value;
          setState({ cv: curriculum });
        }}
      />
    </div>
    <div className="col-3">
      <KeyboardDatePicker
        name="until"
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
        name="title"
        inputRef={props.register}
        id="standard-full-width"
        label="Title"
        margin="normal"
        variant="outlined"
        fullWidth
        onChange={event => (props.model.title = event.target.value)}
      />
    </div>
    <div className="col-12">
      <CssTextField
        name="description"
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
      <div>
        <EduField register={props.register} separator={false} pos={0} />
        {props.children}
      </div>
    </MuiPickersUtilsProvider>
  </div>
);

export default function EducationCareer(props) {
  const [showEducation, setShowEducation] = useState(0);
  const [numEduFields, setNumEduFields] = useState(0);
  const eduFieldsArray = [];

  curriculum = props.curriculum;
  setState = props.setState;

  const onAddChild = () => {
    setNumEduFields(numEduFields + 1);
    curriculum.eduCareer.push({
      from: "",
      until: "",
      title: "",
      description: ""
    });
  };

  for (var i = 1; i <= numEduFields; i += 1) {
    eduFieldsArray.push(<EduField separator={true} pos={i} key={i} />);
  }

  return (
    <Accordion>
      <div className="col-12 mt-3">
        <div className="row w-100 m-0">
          <div className="col-6 p-0">
            <h4 className="font-weight-bold">Education & Career</h4>
          </div>
          <div className="col-6 text-right p-0">
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              onClick={() => setShowEducation(!showEducation)}
            >
              {showEducation ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </Accordion.Toggle>
          </div>
        </div>
        <Accordion.Collapse eventKey="0">
          <Education register={props.register.bind(this)}>
            {eduFieldsArray}
            <AddCircleIcon
              style={{ color: "green" }}
              onClick={onAddChild.bind(this)}
            />
          </Education>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
}
