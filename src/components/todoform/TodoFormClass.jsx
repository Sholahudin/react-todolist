import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

class TodoForm extends React.Component() {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;

    e.preventDefault();

    if (!value) {
      alert("No blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("Please, create a shorter todo.");
      setValue("");
      return;
    }

    addTodo(this.state.value);
    setValue("");
  };

  render() {
    const { addTodo, showAdd } = this.props;

    return <div></div>;
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(TodoForm);
