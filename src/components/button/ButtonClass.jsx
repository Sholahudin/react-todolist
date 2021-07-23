import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";

const StyledButton = styled.button`
  color: ${textColor};
  text-align: ${align};
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  padding: 16px;
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align } = this.props;

    return <StyledButton></StyledButton>;
  }

  static defaultProps = {
    text: "Button",
    color: "black"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
