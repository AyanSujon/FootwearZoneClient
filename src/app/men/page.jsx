import ProductCard from '@/components/ProductCard'
import React from 'react'

export default async function Men() {
    const data = await fetch('http://localhost:4000/api/products?category=men')
  const products = await data.json()
  console.log(products)


  return (
    <div className='container mx-auto py-10'>
          <div className='grid gap-5 grid-col-1 md:grid-cols-3 lg:grid-cols-4'>
          {
            products.map(product => (
              <ProductCard key={product._id} product={product}  ></ProductCard>
            ))
          }
        </div>
    </div>
  )
}
