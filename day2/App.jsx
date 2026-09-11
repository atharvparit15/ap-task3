function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

function App() {
  return (
    <div>
      <h1>Components & Props</h1>

      <Welcome name="Atharv" />
      <Welcome name="React Intern" />
    </div>
  );
}

export default App;
