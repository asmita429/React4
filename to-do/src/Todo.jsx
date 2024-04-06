import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["some task"]);
  let [newTodos, setNewTodos] = useState("");

  let updateTodos = () => {
    // console.log("task is added");
    setTodos([...todos, newTodos]);
    setNewTodos("");
  };

  let updateInput = (event) => {
    setNewTodos(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter new task"
        value={newTodos}
        onChange={updateInput}
      />
      <button onClick={updateTodos}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
