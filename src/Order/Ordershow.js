import React from 'react'
import moment from 'moment'
import CheckoutProduct from '../CheckOut/CheckoutProduct'

function Ordershow({items}) {
    console.log("hello amit",items)
    return (
        <div className="ordershow">
            <h2>Ordered</h2>
            <p>{moment.unix(items.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
                <small>{items.id}</small>
            </p>
            {items.data.basket?.map(gg=>(
                <CheckoutProduct
                id = {gg.id}
                title = {gg.title}
                image = {gg.image}
                price = {gg.price}
                rating = {gg.rating}         
                />
            ))}
            
        </div>
    )
}

export default Ordershow
