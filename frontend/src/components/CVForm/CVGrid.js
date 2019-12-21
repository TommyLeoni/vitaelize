import React from "react";
import "./styles.css";
import Form from "./ContentForm";

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      numOfEduFields: 0,
      education: []
    };
  }

  handleOnChange(value) {
    this.setState({
      phone: value
    });
  }

  render() {
    return (
      <div className="row h-100 justify-content-center">
        <div className="col-6 my-auto border-right">
          <Form
            setState={this.setState.bind(this)}
            handleChange={this.handleOnChange.bind(this)}
          ></Form>
        </div>
        <div className="col-6 my-auto text-center">
          <p>{this.state.name}</p>
          <p>{this.state.email}</p>
          <p>{this.state.phone}</p>
          <p>{this.state.name}</p>
        </div>
      </div>
    );
  }
}