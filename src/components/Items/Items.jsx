import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
      <img src={props.image_url} alt={name}/>
      </Link>
      
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
