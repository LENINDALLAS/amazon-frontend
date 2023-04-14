import React , {useEffect} from 'react'

import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { listProducts } from '../actions/productAction'
import { useDispatch , useSelector } from 'react-redux'

function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList)
  const {products , loading , error} = productList

useEffect(() => {
  dispatch(listProducts())
// eslint-disable-next-line react-hooks/exhaustive-deps
} ,[])

    return (
        <div>
          {loading ? <LoadingBox /> : error ? <MessageBox variant="danger">{error}</MessageBox> : 
          <div className="row center">
          {
          products.map((product) => (              //using map function to replicate products
          <Product key={product.key} product={product} />  //the first element after map() must be key
            ))}
         </div>
          } 
        
        </div>
    )
}

export default HomeScreen
