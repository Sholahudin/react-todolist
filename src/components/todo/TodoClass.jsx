import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  max-height: 34px;
  margin: 16px 0 0;
  font-family: ${(props) => props.theme.font.primary}, sans-serif;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.black};
`;

const StyledTodoText = styled.span`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted } = this.props;

    return (
      <div css={styles.todo({ theme })} onClick={() => completeTodo(index)}>
        <span
          css={styles.todoText}
          style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
        >
          {text}
        </span>
      </div>
    );
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
