import React from 'react';
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './datalayer/StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = { (value) => (
                    <>
                        <p>
                            {/* Subtotal (0 items): <strong>{`${value}`}</strong> */}
                            Subtotal {`(${basket.length} items)`}: <strong>{basket.length}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={getBasketTotal(basket)}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
