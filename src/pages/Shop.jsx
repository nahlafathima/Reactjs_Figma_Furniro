import React,{useState} from 'react'
import Banner from '../components/Banner/Banner'
import Filter from '../components/Filter/Filter'
import All_products from '../components/All_products/All_products'
import Warranty from '../components/Warranty/Warranty'

const Shop = () => {
  const [sortOrder, SetSortOrder] = useState([]);
  return (
    <div>
      <Banner />
      <Filter onSortChange={SetSortOrder}/>
      <All_products sortOrder={sortOrder}/>
      <Warranty/>
    </div>
  )
}

export default Shop