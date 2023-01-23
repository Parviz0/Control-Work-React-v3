import React from 'react'
import { useState } from 'react'

export default function Genre() {
  const [filter , setFilter] = useState({query: "", genre:"", rating: ""})
  return (
    <div className='bruhGen'>
        <div>
            <input type="radio" id="Any" name="drone" value="" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="Any">Any genre</label>
        </div>

        <div>
            <input type="radio" id="action" name="drone" value="action" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="action">Action</label>
        </div>

        <div>
            <input type="radio" id="comedy" name="drone" value="comedy" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="comedy">Comedy</label>
        </div>

        <div>
            <input type="radio" id="drama" name="drone" value="drama" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="drama">Drama</label>
        </div>

        <div>
            <input type="radio" id="hriller" name="drone" value="Thriller" onChange={e => setFilter({...filter, genre:e.target.value})}/>
            <label htmlFor="thriller">Thriller</label>
        </div>
    </div>
  )
}
