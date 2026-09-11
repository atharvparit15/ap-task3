import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hello ${name}`);
  }

  return (
    <div>
      <h1>Form Example</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>Your name: {name}</p>
    </div>
  );
}

export default App;
