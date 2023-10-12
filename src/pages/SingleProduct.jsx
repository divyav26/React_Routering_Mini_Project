import React from 'react'
import Data from '../Data.js'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
  const navigate = useNavigate()
  const {productId} = useParams()
  // const {pathname} = useLocation()

  //get product 

  const singleProduct  = Data.find(product=>product.id === parseInt(productId))
  const {id, name, price, image, details}  = singleProduct;

  console.log(productId)

  

 
  return (
    <main className='posts'>
      <div className='pg-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7'>
              <h1>{name}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container content'>
        <div className='row'>
          <div className='col-lg-5'>
            <img src={image}  className='img-fluid'/>
          </div>
          <div className='col-lg-7'>
            <h2>{name}</h2>
            <p className='price'>{price}</p>
            <p className='details'>{details} {details}</p>
            <p className='details'>{details}</p>
          

          <br />
          <button className='btn btn-primary p-2 mx-2' onClick={() => navigate(-1)}>Back To Products</button>
          <button className='btn btn-primary mx-2' onClick={() => navigate("/products")}>All Products</button>
        </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
