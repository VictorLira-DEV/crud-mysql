import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Crud Application</h1>
      <form className="form" >
        <label htmlFor="movieName"> Movie Name: </label>
        <input type="text" name="movieName" />
        <label htmlFor="movieName"> review </label>
        <input type="text" name="review" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
