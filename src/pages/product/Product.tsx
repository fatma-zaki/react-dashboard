import Single from '../../componants/single/Single'
import { singleProduct } from "../../data"

import './product.scss'

const Product = () => {
    //fetch data and send them to Single component

  return (
    <div className='product'>
     <Single {...singleProduct}/>

    </div>
  )
}

export default Product