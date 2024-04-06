import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  // state variables
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  // add new tasl to todos array
  let addTodo = () => {
    setTodos((prevTask) => {
      return [...prevTask, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  //   get values from input field
  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };
  // delete task
  let deleteTodo = (id) => {
    setTodos(() => todos.filter((prevTodo) => prevTodo.id != id));
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
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
