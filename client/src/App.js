import logo from './logo.svg';
import React, {useState, useEffect } from "react"
import './App.css';
import Axios from "axios"

function App() {

  const [movieName, setMovieName] = useState("")
  const [movieReview, setMovieReview] = useState("")
  const [movieReviewList, setMovieList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data)
    })
  }, [])


  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: movieReview
    }).then(() => {
      alert("Successfull insert")
    })
  }

  return (
    <div className="App">
      
      <h1>CRUD APPLCATION</h1>

      <div className="form">
        <label>Movie Name: {movieName}</label>
        <input typeof="text" name="movieName" onChange={ (e) => { setMovieName(e.target.value) } } />
        <label>Review:{movieReview}</label>
        <input typeof="text" name="movieReview"  onChange={ (e) => { setMovieReview(e.target.value) } }/>

        <button onClick={ submitReview }>Submit</button>

        {movieReviewList.map((val) => {
          return (<h1>MovieName: {val.movieName} | MovieReview: {val.movieReview}</h1>)
        })}
      </div>
      
    </div>
  );
}

export default App;
