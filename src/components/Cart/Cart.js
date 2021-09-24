import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    // Price Calculation
    let price = 0;
    let totalPrice = 0;
    for (const product of cart) {
        price = price + product.price;
        totalPrice = price.toFixed(2);
    }

    // Delivery Charge
    let deliveryFee = 0;
    if (totalPrice > 0) {
        deliveryFee = 20;
    }

    // Subtotal
    const deliveryCharge = parseFloat(deliveryFee);
    const itemsPrice = parseFloat(totalPrice);
    const subTotal = deliveryCharge + itemsPrice;

    // Tax
    let tax = parseFloat(itemsPrice * 0.10);
    const taxCost = tax.toFixed(2)

    // In Total
    const grandTotal = parseFloat(itemsPrice + deliveryCharge + taxCost);
    const grandTotalCost = grandTotal.toFixed(2);

    return (
        <div>
            <div className="cart-item">
                <p>Items Price: </p>
                <p>${totalPrice}</p>
            </div>

            <div className="cart-item">
                <p>Shipping: </p>
                <p>${deliveryFee}</p>
            </div>

            <div className="cart-item">
                <p>Sub-Total: </p>
                <p>${subTotal}</p>
            </div>

            <div className="cart-item">
                <p>Tax: </p>
                <p>${taxCost}</p>
            </div>

            <hr />

            <div className="cart-item">
                <h4>Total: </h4>
                <h4>${grandTotalCost}</h4>
            </div>
            <button className="place-order">Place Order</button>
        </div>
    );
};

export default Cart;