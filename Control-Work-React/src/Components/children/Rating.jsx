import React from 'react'

const Rating = ({filter, setFilter}) => {
  return (
    <div className='bruhRat'>
        <div>
            <input type="radio" id="huey" name="drone" value="" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="huey">Any rating</label>
        </div>

        <div>
            <input type="radio" id="dewey" name="drone" value="5" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="dewey">5</label>
        </div>

        <div>
            <input type="radio" id="louie" name="drone" value="6" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label  htmlFor="louie">6</label>
        </div>

        <div>
            <input type="radio" id="drama" name="drone" value="7" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="drama">7</label>
        </div>

        <div>
            <input type="radio" id="Thriller" name="drone" value="9" onChange={e => setFilter({...filter, rating:e.target.value})}/>
            <label htmlFor="Thriller">8</label>
        </div>
    </div>
  )
}


export default Rating












// import React from 'react'
// import RatingDb from './RatingDb'
// import { useState } from 'react'

// export default function Rating() {


//   return (
//     <div className='ratingFilt'>
//         <button>Choose your genre</button>
//         {/* <select className='rating' name="rating">
//             <option value="1">Any rating</option>
//             <option value="2">Fantastic</option>
//             <option value="3">Action</option>
//             <option value="4">Family</option>
//             <option value="5">Comedy</option>
//         </select> */}
//     </div>
//   )
// }
