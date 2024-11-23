import React from 'react'
import filter from '../../assets/images/filter.png'
import line from '../../assets/images/line.png'
import './Filter.css'

const Filter = () => {
  return (
    <div className='filter-container'>
      <div className='filter-img'>
        <img src={filter} alt=""></img>
        <h2>Filter</h2>
      </div>
      <div className='line-img'>
      <img src={line} alt=""></img>
      </div>
      <div className='filter-text'>
        <p>Showing 1-8 of 15 results</p>
      </div>
      <div className='sort-button'>
        <button>Sort by</button>
      </div>
    </div>
  )
}

export default Filter
