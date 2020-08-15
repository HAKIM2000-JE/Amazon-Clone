import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal.js'
function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            
            <div className="checkout_left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Image ADD" className="checkout_add"/>
            

            { basket?.length=== 0 ?(
                <div>
                   <h1 className="your">Your Shopping Basket Is empty</h1>
                    <p>
                        You have no items in your basket , Chose item and click 'Add to Basket' to add a new one
                    </p>
                </div>
            ) :(
                <div className="product-display">
                     { basket.length>0  && (
             <div className="checkout_right">
                <Subtotal />
             </div>
         )}
                    <h3 className="your">Your Shopping Basket   </h3>
                    
                    {/* List of checkout products */}
                     {basket.map(item=>(
                         <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}
                         
                         
                         
                         />
                     ))}
                </div>

            )
                     }
            </div>
            

        
            

        </div>
    );
}

export default Checkout;
