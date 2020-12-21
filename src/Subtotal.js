import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './datalayer/StateProvider';
import { getBasketTotal } from './datalayer/reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = { (value) => (
                    <>
                        <p>
                            {/* Subtotal (0 items): <strong>{`${value}`}</strong> */}
                            {/* Subtotal {`(${basket.length} items)`}: <strong>{value}</strong> */}
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
