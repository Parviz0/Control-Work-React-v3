import React from 'react'
import Input from './children/Input';
import Rating from './children/Rating';
import Genre from './children/Genre';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './Categories';

const InMain = () => {
  
  
  const [open, setOpen] = useState({rating: false, genre:false});
  const [filter , setFilter] = useState({query: "", genre:"", rating: ""});
  
  const [appState, setAppState] = useState();
  

  useEffect(() => {
    const apiUrl = 'http://localhost:7777/movies';
    axios.get(apiUrl).then((resp) => {
      const allMovies = resp.data;
      setAppState(allMovies);
    });
  }, [setAppState]);

    return (
      <div className='InMain'>
      <Categories/>
      <Input movies={appState} /> 
      <button className="btn" onClick={() => setOpen({...open, rating: !open.rating, genre: false})}> Rating </button>   
      <button className="btn" onClick={() => setOpen({...open, genre: !open.genre, rating: false} )}> Genre </button>
      {/* <Rating /> */}
      <div className='bruh'>
      {
        open.genre ? <Genre filter={filter} setFilter={setFilter}/> : ""
      }
      {
        open.rating ? <Rating  filter={filter} setFilter={setFilter}/> : ""
      }
      </div>
      </div>
      )
}


export default InMain