import React, { useState } from 'react'
import filter from '../../assets/images/filter.png'
import line from '../../assets/images/line.png'
import './Filter.css'

const Filter = ({onSortChange}) => {
    const [dropdownVisible, setDropDownVisible]=useState(false);

    const handleSortChange = (order)=>{
        onSortChange(order);
        setDropDownVisible(false);
    }
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
                <button onClick={()=>setDropDownVisible((prev)=> !prev)}>Sort by</button>
                {dropdownVisible &&(
                    <div className='dropdown'>
                        <button onClick={()=>handleSortChange('asc')}>low to high</button>
                        <button onClick={()=>handleSortChange('desc')}>high to low</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filter