import React from 'react'
import './Items.css'

const Items = (props) => {
  return (
    <div className='item'>
      <img src={props.image_url} alt={name}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className='price'>
      <span className="old-price">${props.old_price}</span>
      <span className="new-price">${props.new_price}</span>
      </div>
    </div>
  )
}

export default Items
