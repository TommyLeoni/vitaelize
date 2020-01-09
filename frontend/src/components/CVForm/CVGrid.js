import React from "react";
import "./styles.css";
import Form from "./ContentForm";
import CV from "./model/cvModel";

export default class CVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cv: CV
    };
  }

  render() {
    return (
      <div className="row h-100 justify-content-center">
        <div className="col-6 my-auto border-right">
          <Form setState={this.setState.bind(this)}></Form>
        </div>
        <div className="col-6 my-auto text-center">
          <p>{this.state.cv.fullName}</p>
          <p>{this.state.cv.address}</p>
        </div>
      </div>
    );
  }
}
