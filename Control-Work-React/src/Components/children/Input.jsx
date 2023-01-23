import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

export default function Input(props) {

  const { movies } = props
  const [searchResults, setResults] = React.useState([])
  const [isActive, setActive] = useState([]);
  const ref = useRef(null)
  useOutsideClick(ref, () => setActive(false))

  const handleSearch = (e) => {

    const value = e.target.value

    if(value.length < 2) {
      setResults([]); 
      return;
    }
    setActive(true)

    const results = movies.filter(item => item.title.toLowerCase().includes(value.toLowerCase().trim()))

    console.log(results);
    setResults(results)
  }
  return (
    <div className='input'>
        <input type="text" 
               name="searching" 
               id="searching" 
               placeholder='Search your movie'
               onChange={handleSearch}
               
               />
          {isActive ? (
            <List
              sx={{
                display: isActive ? "block" : "none"
              }}
            >
              {searchResults.map((result) => (
                <ListItem>
                  <ListItemText primary={result.title} />
                  <ListItemText primary={result.category} />
                  <ListItemText primary={result.rating} />
                </ListItem>
              ))}
            </List>
          ) : ""}
    </div>
  )
}

function useOutsideClick(ref, handler){
  useEffect(() => {
    function handleClickOutside(event){
      if(ref.current && !ref.current.contains(event.target)){
        handler()
      }
    }
  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  }
  }, [])
}