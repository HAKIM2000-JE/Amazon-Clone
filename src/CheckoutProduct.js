import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, title , price ,rating , image}) {

    const [{basket},dispatch]=useStateValue();

    const RemovefromBasket = ()=>(
        //remove item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id : id,
        })
    )
    return (
        <div className="checkoutproducts" > 
            <img src={image} alt="image of product" className="product_image"/>
            <div className="product_info">
                <p className="checkoutproduct_title">{title}</p>
                <h3 className="chechoutproduct_price">{price}$</h3>
                <div className="checkoutproduct_rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <img src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png" alt="" className="star"/>
                        ))
                    }
            </div>
            <button className="remove" onClick={RemovefromBasket}>
                Remove Product 
            </button>
            </div>
           
        </div>
    )
}

export default CheckoutProduct
