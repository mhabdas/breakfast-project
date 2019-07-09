import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTemplate from "../../utils/Form";
import { SIGN_UP_URL } from "../../utils/endpoints";

class SignUpForm extends Component {
  state = {
    initialValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  generateAxiosObject = values => {
    return {
      method: "POST",
      url: SIGN_UP_URL,
      data: {
        email: values.email,
        password: values.password,
        returnSecureToken: true
      },
      header: {
        "Content-Type": "application/json"
      }
    };
  };

  fieldsConfig = [
    { type: "text", name: "email", placeholder: "Email" },
    { type: "pass", name: "password", placeholder: "Password" },
    { type: "pass", name: "confirmPassword", placeholder: "Confirm password" }
  ];

  render() {
    const { initialValues } = this.state;
    return (
      <FormTemplate
        initialValues={initialValues}
        generateAxiosObject={this.generateAxiosObject}
        fields={this.fieldsConfig}
      />
    );
  }
}

SignUpForm.propTypes = {
  initialValues: PropTypes.object
};

export default SignUpForm;
