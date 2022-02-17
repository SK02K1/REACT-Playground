import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const target = e.target;
    const task = target.task.value.trim();
    setTodos((prevTodos) => [
      ...prevTodos,
      { task, isCompleted: false, id: uuidv4() }
    ]);
    target.reset();
  };

  const updateTodos = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  return (
    <div className="container">
      <h2>10. Todo/Strikethrough</h2>
      <form onSubmit={formSubmitHandler}>
        <input type="text" name="task" placeholder="add new task" required />
        <button>Add</button>
      </form>
      <div style={{ textAlign: "left" }}>
        {todos.map(({ task, isCompleted, id }) => {
          return (
            <label
              key={id}
              style={{
                textDecoration: isCompleted ? "line-through" : "none"
              }}
              htmlFor={id}
            >
              <input
                onChange={() => updateTodos(id)}
                type="checkbox"
                checked={isCompleted}
              />
              {task}
            </label>
          );
        })}
      </div>
    </div>
  );
};
