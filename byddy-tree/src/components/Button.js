import React from 'react'
import '../styles/Button.css'

function Button ({prop}) {
   
  return (
    <div>
         <button className='btn' type="button">{prop}</button>
    </div>
  )
}

export default Button