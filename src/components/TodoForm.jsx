import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(value);
  };

  console.log("value", value);

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
