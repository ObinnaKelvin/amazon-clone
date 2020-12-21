import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './css/Checkout.css';
import  Subtotal from './Subtotal';
import { useStateValue } from './datalayer/StateProvider';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_LP_Hero_HD_NG_en_US.png" 
                    alt="ads"
                />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct 
                            id={item.id} 
                            image={item.image} 
                            title={item.title} 
                            price={item.price} 
                            rating={item.rating}
                            />  //CTRL + SPACE = Auto import
                        ))
                    }
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>            
        </div>
    )
}

export default Checkout;