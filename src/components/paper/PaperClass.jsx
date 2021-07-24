import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import PropTypes from "prop-types";

class Paper extends React.Component {
  render() {
    return <div />;
  }
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default Paper;
