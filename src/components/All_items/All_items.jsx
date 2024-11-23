import React from 'react'
import './All_items.css'

const All_items = (props) => {
  return (
    <div className='all-item'>
      <img src={props.image_url} alt={name}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className='all-item-price'>
      <span className="all-item-old-price">${props.old_price}</span>
      <span className="all-item-new-price">${props.new_price}</span>
      </div>
    </div>
  )
}

export default All_items