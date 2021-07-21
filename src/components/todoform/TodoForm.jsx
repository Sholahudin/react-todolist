/** @jsxImportSource @emotion/react */
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
// import cx from "classnames";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

// import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
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

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoform-container">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex="1" padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
