import React from 'react'
import { useState, useEffect } from 'react'
import Product from './Product'

function ProductPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log("use")
    fetch('https://dummyjson.com/products').then(response => response.json())
      .then(ResponseJson => {
        console.log(ResponseJson);
        setProducts(ResponseJson.products)
      })
  }, [])



  return (
    <div>
      <h1 className="text-cyan-600 text-3xl font-bold text-center my-4 underline">OUR PRODUCTS</h1>
      {/* {JSON.stringify(products)} */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

        {products.map((product, index) => {

          return (
            <Product key={product.id} product={product} />

          )
        })}

      </div>
    </div>
  )
}

export default ProductPage