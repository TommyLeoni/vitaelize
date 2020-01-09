import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Button, TextField } from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import { withStyles } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import React, { useState } from "react";

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

const HobbyField = props => (
  <div className={`row ${props.separator ? "border-top" : ""}`}>
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

const HobbysComponent = props => (
  <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div>
        <HobbyField separator={false} />
        {props.children}
      </div>
    </MuiPickersUtilsProvider>
  </div>
);

export default function Hobbys(props) {
  const [showHobbys, setShowHobbys] = useState(0);
  const [numberHobbys, setNumberHobbys] = useState(0);
  const hobbyFields = [];

  const onAddHobby = () => {
    setNumberHobbys(numberHobbys + 1);
  };

  for (var i = 0; i < numberHobbys; i += 1) {
    hobbyFields.push(<HobbyField separator={true} />);
  }

  return (
    <Accordion>
      <div className="col-12 mt-3">
        <div className="row w-100 m-0">
          <div className="col-6 p-0">
            <h4 className="font-weight-bold">Hobbys & Free time</h4>
          </div>
          <div className="col-6 text-right p-0">
            <Accordion.Toggle
              as={Button}
              eventKey="0"
              onClick={() => setShowHobbys(!showHobbys)}
            >
              {showHobbys ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Accordion.Toggle>
          </div>
        </div>
        <Accordion.Collapse eventKey="0">
          <HobbysComponent>
            {hobbyFields}
            <AddCircleIcon
              style={{ color: "green" }}
              onClick={onAddHobby.bind(this)}
            />
          </HobbysComponent>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
}
