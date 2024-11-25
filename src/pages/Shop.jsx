import React from 'react'
import Banner from '../components/Banner/Banner'
import Filter from '../components/Filter/Filter'
import All_products from '../components/All_products/All_products'
import Warranty from '../components/Warranty/Warranty'

const Shop = () => {
  return (
    <div>
      <Banner />
      <Filter/>
      <All_products/>
      <Warranty/>
    </div>
  )
}

export default Shop