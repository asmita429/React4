import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  // state variables
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  // console.log(todos[0].isDone);
  // add new task to todos array
  let addTodo = () => {
    setTodos((prevTask) => {
      return [...prevTask, { task: newTodo, id: uuidv4(), isDone: false }];
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
  // change all items to uppercase/ update all items
  let upperCaseAll = () => {
    // let arr = todos.map((todo) => todo.task.toUpperCase());
    setTodos((prevTask) =>
      prevTask.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };
  let updateItem = (id) => {
    setTodos((prevTask) =>
      prevTask.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  let markAllDone = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return { ...todo, isDone: (todo.isDone = true) };
      })
    );
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
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => updateItem(todo.id)}>uppercase</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
      <button onClick={markAllDone}>Mark all done</button>
    </div>
  );
}
