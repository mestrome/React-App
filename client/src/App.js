/* import logo from './logo.svg'; */
import React, {useState, useEffect } from "react"
import './App.css';
import Axios from "axios"

function App() {

  const [movieName, setMovieName] = useState("")
  const [movieReview, setMovieReview] = useState("")

 /*  const useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data)
    })
  }, []) */


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
        <label>Movie Name:</label>
        <input typeof="text" name="movieName" onChange={ (e) => { setMovieName(e.target.value) } } />
        <label>Review:</label>
        <input typeof="text" name="review"  onChange={ (e) => { setMovieReview(e.target.value) } }/>

        <button onClick={submitReview()} >Submit</button>
      </div>
      
    </div>
  );
}

export default App;
