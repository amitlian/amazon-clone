import React from 'react'
import '../CheckOut/Checkout.css'
import Subtotal from '../CheckOut/Subtotal'
import Product from '../Product/Product'
import {useStateValue} from '../StateProvider';
import CheckoutProduct from '../CheckOut/CheckoutProduct'

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ads" src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"/>
                <div>
                    <h2 className="checkout_title">Your Shoping Basket</h2> 
                </div>
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
            <div className="checkout_right">
                <Subtotal/>
                <img className="corner_ads" src="https://previews.123rf.com/images/bamboochas/bamboochas1711/bamboochas171100150/89822797-winter-sale-vertical-mobile-ad-banner.jpg"/>
            </div>
        </div>
    )
}

export default Checkout
