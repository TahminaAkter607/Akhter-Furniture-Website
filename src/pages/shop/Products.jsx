import React from 'react'
const Products = ({headline}) => {
  return (
    <div>
        <div className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>
                {headline}
            </h2>
        </div>
    </div>
  )
}

export default Products