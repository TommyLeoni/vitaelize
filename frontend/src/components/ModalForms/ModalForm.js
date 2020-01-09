import Login from "./Login";
import React, { Component } from "react";
import Registration from "./Registration";
import "./ModalForms.css";

class ModalForm extends Component {
  constructor() {
    super();

    this.state = {
      inpValue: "0"
    };
  }

  render() {
    const loadRegistration = (
      <div>
        {() =>
          this.state.inpValue === "1"
            ? this.setState({ inpValue: "0" })
            : this.setState({ inpValue: "1" })
        }
        <Registration />
      </div>
    );

    const loadLogin = (
      <div>
        <Login />
        <button
          type="button"
          className="btn btn-link"
          onClick={() =>
            this.state.inpValue === "0"
              ? this.setState({ inpValue: "1" })
              : this.setState({ inpValue: "0" })
          }
        >
          No account yet?
        </button>
      </div>
    );

    return (
      <div className="pr-4 pl-4 pb-4">
        {this.state.inpValue === "0" ? loadLogin : loadRegistration}
      </div>
    );
  }
}

export default ModalForm;
