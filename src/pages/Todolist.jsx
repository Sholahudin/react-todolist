import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React Hook!", isCompleted: false },
    { text: "Learning styling in React", isCompleted: false }
  ]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("No more Line space, Sorry.");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const [showAdd, setShowAdd] = useState(false);

  const showAddToggle = () => setShowAdd(!showAdd);

  const clearTodos = () => setTodos([]);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default Todolist;
