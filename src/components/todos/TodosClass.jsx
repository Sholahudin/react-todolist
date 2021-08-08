import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Container from "../../layout/Container";
import Todo from "../todo/TodoClass";

const StyledTodoPlaceHolderText = styled.div`
  font-family: ${(props) => props.theme.font.primary}, sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

const StyledTodoPlaceHolderTextAddbtn = styled.span`
  font-family: ${(props) => props.theme.font.secondary}, sans-serif;
  font-size: 24px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;

    return (
      <section className="todos-component">
        <Container flexDirection="column" minHeight="500px" align="center">
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
            <StyledTodoPlaceHolderText>
              {[
                "Add todo by Clicking ",
                <StyledTodoPlaceHolderTextAddbtn>
                  Add
                </StyledTodoPlaceHolderTextAddbtn>,
                " button in the top left corner"
              ]}
            </StyledTodoPlaceHolderText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default Todos;
