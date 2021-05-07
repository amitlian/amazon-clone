import React,{useState,useEffect} from 'react'
import '../Payment/Payment.css'
import GradeIcon from '@material-ui/icons/Grade';
import CheckoutProduct from '../CheckOut/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../reducer';
import {useHistory} from 'react-router-dom'
import axios from '../axios'
import {CardElement , useStripe, useElements} from '@stripe/react-stripe-js';
import {db} from '../firebase'



function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState(null)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
            //generate the special stripe secret which allows us to change a customer
            const getclientSceret = async()=>{
                const response = await axios({
                    method: 'post',
                    //stripe expects the total amount in subunits
                    url:`/payments/create?total=${getBasketTotal(basket)*100}`
                });
                setClientSecret(response.data.clientSecret)
            }

            getclientSceret();
    }, [basket])

    // console.log("Client Secret",clientSecret)
    // console.log("person Info",user)

    const handleSubmit = async(e)=>{
        //do stripe stuff
        e.preventDefault();
        setProcessing(true);

        //clientSecret == how much a customar have to charge
        const payload = await stripe.confirmCardPayment(clientSecret,{
            //get the info of the card
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            console.log("payment Intent",paymentIntent)
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({type:'EMPTY_BASKET'})
            history.replace('/order') 

        })    
    }

    const handleChange = (e)=>{
        // listen from user and display any errors or not
        setDisabled(e.empty);
        setError(e.error? e.error.message:"")
    }




    return (
        <div className="payment">
            <div className="CheckoutItem">
                <h1>Checkout(<span className="quantity">{basket.length} items</span>)</h1>
            </div>


            <div className="addressDiv">
                <h3>Delivery Address</h3>
                <div className="information">
                    <p>{user?.email}</p>
                    <p>Mirpur 1, Dhaka</p>
                </div>
            </div>


            <div className="review_items">
                <h3>Review items and delivery</h3>
    
            <div className="info_product">
                {basket.map(item=>(
                    <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating = {item.rating}         
                    />
                ))}
            </div>
        </div>
        <div className="payment_method">
                <h3>Payment Method</h3>
        <div className="payment_total">

        
        {/* visa card part in the payment section */}

        <div>
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div>
                <CurrencyFormat
                    renderText = {(value)=>(
                        <>
                        <p>
                            Order Total ({basket.length} items): <strong>{value}</strong>
                        </p>
                        </>
                    )}

                    decimalScale = {2}
                    value={getBasketTotal(basket)}
                    displayType = {"text"}
                    thousandSeparator = {true}
                    prefix={"$"}
                />
                <button
                disabled={processing || disabled || succeeded}>
                    <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                </button>
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
            
        </div>

            </div>
        </div>
    )
}

export default Payment
