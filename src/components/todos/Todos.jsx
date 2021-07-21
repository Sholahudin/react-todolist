/** @jsxImportSource @emotion/react */
import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

// import styles from "./todos.module.css";
import * as styles from "./todos.styles";
import Container from "../../layout/Container";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();
  return (
    <section className="todos-component" align="center">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <div css={styles.todoPlaceholderText({ theme })}>
            Add todo by Clicking{" "}
            <span css={styles.todoPlaceholderTextAddbtn({ theme })}>Add</span>{" "}
            button in the left corner.
          </div>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
