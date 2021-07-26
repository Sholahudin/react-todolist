import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted } = this.props;

    return <div />;
  }
  static propTypes = {
    text: PropTypes.string.isRequired
  };
}

export default withTheme(Todo);
