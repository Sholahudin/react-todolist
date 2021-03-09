import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!" },
    { text: "Learning React Hook!" },
    { text: "Learning styling in React" }
  ]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const [showAdd, setShowAdd] = useState(false);

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("showAdd", showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
