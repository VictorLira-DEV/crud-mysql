import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

interface Imovies {
  movieName: string;
  movieReview: string;
}

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setMovieReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState<Imovies[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);

  const submit = function (e: any) {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: movieReview,
    })
      .then(() => {
        alert("inserted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <form className="form" onSubmit={submit}>
        <label htmlFor="movieName"> Movie Name: </label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label htmlFor="movieName"> review </label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setMovieReview(e.target.value);
          }}
        />
        <button>Submit</button>
        {movieReviewList.map((value) => {
          return (
            <>
              <h1> Movie name {value.movieName} </h1>
              <h1> Movie Review {value.movieReview} </h1>
            </>
          );
        })}
      </form>
    </div>
  );
}

export default App;
