import '../Cart/cart.css'
import { Product } from '../shop/product';
import { PRODUCTS } from '../../src/Products';
import { ShopContext } from '../../context/shopContext';
import { useContext } from 'react';
import { CartItem } from './cart-item';
import {useNavigate} from 'react-router-dom';
export const Cart = () => {
    const {cartItems,getTotalCartAmount} = useContext(ShopContext)
    const totalamount = getTotalCartAmount();

    const navigate = useNavigate();
    return(
        <div className='cart'>
        <div>
            <h1>Your cart Items</h1>
        </div>
        <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0)
            return <CartItem data={product}/>
        })}
        </div>
        {totalamount > 0 ?  (
        <div className='checkout'>
           
            <p>SubTotal: €{totalamount}</p>
            <button onClick={()=> navigate('/')}>Continue Shopping</button>
           
        </div>
        ) : (<div><h1>Your Cart is empty</h1></div>)}
        </div>
    )
}


export default Cart;