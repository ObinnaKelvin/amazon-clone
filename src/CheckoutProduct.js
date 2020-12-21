import React from 'react';
import './css/CheckoutProduct.css';
import { useStateValue } from './datalayer/StateProvider';

function CheckoutProduct({ id, image, title, price, rating}) {
    const [ { basket }, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct__image" src={image}  alt="checkout image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {/*Either this...*/}
                    {/* {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}                     */}
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
