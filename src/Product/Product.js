import React from 'react'
import '../Product/Product.css'
import GradeIcon from '@material-ui/icons/Grade';
import {useStateValue} from '../StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    // console.log("this is the Basket====>",basket[0].title);

    const addToBasket = ()=>{
        // dispatch item to the datalayer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,title,image,price,rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>(
                        <GradeIcon/>
                    ))}
                </div>
            </div>
            <img className="product_image" src={image}/>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product
