import React from 'react';
import './css/Checkout.css';
import  Subtotal from './Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_LP_Hero_HD_NG_en_US.png" alt="ads"/>
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>            
        </div>
    )
}

export default Checkout;