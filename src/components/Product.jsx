import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {
  const markedPrice = props.product.price;
  const discount_percent = props.product.discountPercentage;
  const discount = (markedPrice * discount_percent) / 100;
  const sellingPrice = (markedPrice - discount).toFixed(2);


  return (
    <Link to={"/product/" + props.product.id} className='w-full bg-indigo-400 rounded-xl p-2 hover:scale-95  cursor-pointer transition-all hover:shadow-cyan-400 hover:shadow-xl'>
      <img src={props.product.thumbnail} className='h-48 w-full object-contain' alt="" />

      <h1 className='mt-2 font-bold text-xl p-2  '>{props.product.title}</h1>
      <h2 className='pl-2 line-through text-red-500 font-bold'>{markedPrice}</h2>
      <h2 className='pl-2 font-bold text-red-500'>{sellingPrice}</h2>

      {/* <Link to={"/product/" + props.product.id} className='mt-2 bg-red-600 py-2 px-4 w-full cursor-pointer text-white text-center rounded-xl hover:scale-105 hover:shadow-lg'>View</Link> */}

    </Link>
  )
}

export default Product
