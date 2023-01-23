import React from 'react';
import InMain from './InMain';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesData from './MoviesData'
import LoadingMoviesData from './LoadingMoviesData'

export default function Main() {

  const DataLoading =  LoadingMoviesData(MoviesData);

  const [appState, setAppState] = useState(
    {
      loading: false,
      movies: null,
    }
  )

 useEffect(() => {
    setAppState({loading: true})
    const apiUrl = 'http://localhost:7777/movies';
    axios.get(apiUrl).then((resp) => {
      const allMovies = resp.data;
      setAppState({
      loading: false,
      movies: allMovies
       });
    });
  }, [setAppState]);

  return (
    <div className='main'>
        <h1>Hello User</h1>
        <InMain />
        <DataLoading  isLoading={appState.loading} movies={appState.movies} />
    </div>
  )
}
