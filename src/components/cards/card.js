import React from 'react'
import '../cards/card.css'
export default function Card(props) {
  return (
       
         <div className='col-md-3'>
              <div className="tittle shadow" style={{backgroundColor:props.color,color:'white'}}>{props.title}</div>    
         </div>

)
}