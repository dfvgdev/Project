

import '../shop/shop.css'
import { PRODUCTS } from '../../src/Products';
import { Product } from './product';
export const Shop = () => {
    return(
        <>
        <div  className="Shop">
            <div className='shopTitle'>
                <h1>Shop</h1>
            </div>
        <div className='products'>{PRODUCTS.map((products) =>(  
            <Product data ={products}></Product>
        ))}</div>
        </div>
        </>
    )
}


export default Shop;