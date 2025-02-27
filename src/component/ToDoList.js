import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>

      {todos.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </td>
                <td>{todo.completed ? "Completed" : "Pending"}</td>
                <td>
                  <button
                    onClick={() => toggleComplete(index)}
                    style={styles.actionButton}
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f3e8ff",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4b0082",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    marginRight: "10px",
  },
  addButton: {
    padding: "8px 12px",
    backgroundColor: "#b19cd9",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "80%",
    borderCollapse: "collapse",
    backgroundColor: "#ffffff",
    border: "2px solid #9370db",
    margin: "0 auto",
    marginBottom: "2px solidrgb(146, 131, 177)",
  },
  actionButton: {
    padding: "5px 10px",
    marginRight: "5px",
    backgroundColor: "#9370db",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#ff6b6b",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default App;
