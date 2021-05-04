import React from 'react'
import '../Payment/Payment.css'
import GradeIcon from '@material-ui/icons/Grade';
import CheckoutProduct from '../CheckOut/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../reducer'

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
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
            <button>Buy now</button>
        </div>

            </div>
        </div>
    )
}

export default Payment
