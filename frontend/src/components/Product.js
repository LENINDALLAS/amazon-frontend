import React from 'react';
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Product(props) {
    const { product } = props    //defining products in curly braces to fetch products from props
    return (
      // value of key is unique
        <div key={product._id} className="card"> 
          {/* //setting URL of image for product of this specific id */}
        <Link to={`/product/${product._id}`}>     
          <img className="medium" 
          src={product.image}
          alt={product.name} />
          </Link>      
        <div className="card-body">
          <Link to={`/product/${product._id}`}>   
          {/* //image & name should link to same location  */}
              <h2>{product.name}</h2>          
          </Link>
          {/* //using rating component inside this file & displaying rating & numReviews of product  */}
          <Rating rating={product.rating} numReviews={product.numReviews} /> 
          {/* //displaying price of the product */}
          <div className="price">${product.price}</div> 
        </div>
      </div>
    )
}

export default Product
