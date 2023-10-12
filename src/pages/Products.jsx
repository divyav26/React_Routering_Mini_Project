import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../Data.js'

const Products = () => {
  return (
    <main>
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>Products</h1>
            </div>
            
          </div>
          
        </div>
      </div>

      <div className='container content'>
        <div className='row products-row'>
          {
            Data.map((product)=>{
              return(
                <div className='col-lg-4' key={product.id}>
                  <div className='card'>
                    <div className='img-wrap'>
                        <img src={product.image} className='img-wrap' />
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title'>{product.name}</h5>
                        <p className='card-details'>{product.details}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>Price: <strong className='price'>{product.price}</strong></span>
                            <Link to={`/products/${product.id}`} className='btn btn-primary'>Details</Link>
                        </div>
                      </div>
                    </div>

                </div>
              )
            })
          }
        </div>
      </div>
      
    </main>
  )
}

export default Products
