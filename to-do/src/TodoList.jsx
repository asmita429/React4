import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  // state variables
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  // add new tasl to todos array
  let addTodo = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };
  //   get values from input field
  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="enter new task"
        value={newTodo}
        onChange={updateTodo}
      />
      <button onClick={addTodo}>Add Task</button>
      <br />
      <br />
      <br />
      <hr />
      <h3>Todo List</h3>
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
