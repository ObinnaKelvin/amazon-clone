// import { TitleOutlined } from '@material-ui/icons';
import React from 'react';
import './css/Product.css';
import { useStateValue } from './datalayer/StateProvider';

function Product({id, title, image, price, rating}) {

    // const [state, dispatch] = useStateValue();
    const [{ basket }, dispatch] = useStateValue();

    console.log('This is the basket: ', basket)
    const addToBasket = () => {
        // dispatch the item into the data layer
       dispatch({
           type: 'ADD_TO_BASKET',
           item: {
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating
           }
       }) 
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                    {/* https://emojipedia.org/star/ */}
                    {/* https://www.google.com/search?q=chair&rlz=1C1GCEU_en&sxsrf=ALeKk02txnXhri8pmsY0yg5f0XiG1oMf-Q:1607689791423&tbm=isch&source=iu&ictx=1&fir=gyWWkGqPpTnbAM%252CZDlgF2lUYTINSM%252C_&vet=1&usg=AI4_-kQ8VF0Zi9-OBOHZKZzMbeeRZreGJg&sa=X&ved=2ahUKEwjA17SX98XtAhVnUhUIHbibAHcQ9QF6BAgJEAE&biw=1366&bih=663#imgrc=gyWWkGqPpTnbAM */}
                </div>
            </div>
            <img 
                src={image} 
                alt=""
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
