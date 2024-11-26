import React, { useContext } from 'react';
import Banner_singlepage from '../components/banner_singlepage/banner_singlepage';
import { Shopcontext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Product_display from '../components/Product_display/Product_display';
import Description from '../components/Description/Description';
import Related_products from '../components/Related_products/Related_products';

const Single_page = (props) => {
  const { allcollections } = useContext(Shopcontext); // Use `allcollections` here.
  const { productId } = useParams();
  const product = allcollections.find((e) => e.id === Number(productId)); // Use `allcollections`.
  return (
    <div>
      <Banner_singlepage product={product} />
      <Product_display product={product}/>
      <Description/>
      <Related_products/>
    </div>
  );
};

export default Single_page;
