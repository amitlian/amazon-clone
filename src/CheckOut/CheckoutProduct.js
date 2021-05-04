import React from 'react'
import '../CheckOut/CheckoutProduct.css'
import GradeIcon from '@material-ui/icons/Grade';
import {useStateValue} from '../StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeItem =()=>{
        //remove item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
            <div className="checkoutproduct">
                        <div className="container">
                            <div className="container_left">
                                <img src={image}/>
                                </div>
                            <div className="container_right">
                                <p className="checkout_Title">{title}</p>
                                <p className="checkout_product_price">
                                    <small>$</small>
                                    <strong>{price}</strong>
                                </p>
                                <div className="product_rating">
                                    {Array(rating).fill().map((_,i)=>(
                                        <GradeIcon/>
                                    ))}
                                </div>
                                <button onClick={removeItem} className="remove_button">Remove From Basket</button>
                            </div>
                        </div>
                </div>               
    )
}

export default CheckoutProduct
