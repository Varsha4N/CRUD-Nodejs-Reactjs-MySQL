import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
function App() {

  const [movieName, setMOvieName]= useState('');
  const [review,setReview]= useState('');
  const [movieReviewList, setMovieReviewList]=useState([])


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setMovieReviewList(response.data)
    })
  },[])

  const submitReview = () =>{
    Axios.post("http://localhost:3001/api/insert",{
      movieName: movieName,
      movieReview: review
    }).then(()=>{
      alert("Success Insert")
    })

  }
  return (
    <div className="App">
     <h1>CRUD APPLICATION</h1>
     <div className='form'>

      <label>Movie Name</label>
      <input type='text' name='movieName' onChange={(e)=>{
        setMOvieName(e.target.value)
      }}/>
      <label>Review</label>
      <input type='text' name='review' onChange={(e)=>{
        setReview(e.target.value)
      }} />
      <button onClick={submitReview}>Submit</button>

      {movieReviewList.map((val)=>{
        return <h1>movieName : {val.movieName} | movie review : {val.movieReview}</h1>
      })}

     </div>
    </div>
  );
}

export default App;
