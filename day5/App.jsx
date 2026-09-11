import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const tasks = [
    "Learn React",
    "Practice JSX",
    "Learn Components",
    "Learn useState"
  ];

  return (
    <div>
      <h1>Task List</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Tasks" : "Show Tasks"}
      </button>

      {show && (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
