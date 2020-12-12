import React , {useState,useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import './payement.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format"

import {Link} from "react-router-dom"
import { CardElement, Elements } from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer'
import axios from 'axios'

function Payement() {
    const [{basket, user},dispatch]= useStateValue()
    const stripe = useStripe()
    const element = useElements()
    const [succeded, setsucceded] = useState(false)
    const [processing, setprocessing] = useState("")
    const [disabled, setdisabled] = useState(true)
    const [clientsecret, setclientsecret] = useState(true)

     useEffect(() => {
        //  Generate the special stripe secret wich allows us to charge a customer

        const getClientSecret=async ()=>{
                const response = await axios ({
                    method : 'post',
                    //Stripe expects the total in a currencies submits
                    url: `/payements/create?total=${getBasketTotal(basket)*100}`
                })
                setclientsecret(response.data.clientsecret)
        }

        getClientSecret()
       
     }, [basket])
    const handlesubmit = async (event)=>{
        event.preventDefault()
        setprocessing(true)

        const payload = await stripe.confirmCardPayment(clientsecret,{
            payment_method : {
                // card : getElement(CardElement)
                
            }
        }).then(({PayementIntent})=>{
            // PayementIntent=payement confirmation
            setsucceded(true)
            seterror(null)
        })
        // we need that stripe provide some clientsecret

    } 
    const handlechange =  async(event) => {

    }
    const [error, seterror] = useState(null)
   
    return (
        <div className="payement">
          <div className="payement_container">
             <h1>
                    Checkout( <Link to="/checkout" >
                      {basket.length} items
                </Link>)
             </h1>

                {/* payement section - delevery adresse*/}
                 <div className="payement_section">
                    <div className="payement_title">
                      <h3>Delvery Adresse</h3>
                    </div>
                <div className="payement_adresse">
                   <p>{user?.email}</p>
                   <br/>
                    <p>Quartier Essalam Meknes</p>
                    <p>Maroc</p>
                </div>
                 </div>

                {/* payement section - Review items */}
                <div className="payement_section">
                    <div className="payement_title">
                        <h3>Review items Delevery</h3>
                    </div> 
                     
                      {/* Here we gonna display all our bought product */}                    

                    <div className="payement_itmes">
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

                </div>

                {/* payement section - payement-method*/}
                <div className="payement_section">
                    <div className="payement_title">
                        <h3>Payement method</h3>
                    </div> 

                    <div className="payement_details">
                        {/*here we gonna have stripe stuff */}
                        <form onSubmit={handlesubmit} >
                           <CardElement  onChange={handlechange}/>
                           <div className="payement_price_container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total : {value}</h3>
                                            <small className="subtotal_gift">
                                                <input type="checkbox" />This order contain gift
                                              </small>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}



                                />
                                <button disabled={processing || disabled || succeded}>
                                 <span>{processing ? <p>Processing</p> : "Buy Now "}</span>
                                </button>
                           </div>

                             {/* Error */}
                              {
                                  error && <div>{error}</div>
                              }
                        </form>

                    </div>

                </div>

          </div>
            
        </div>
    )
}

export default Payement
