import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    for (const data of cart) {
        total = total + data.given_amount;
    }


    return (
        <div className="card">
            <h4 className="all">Number Of Student : {props.cart.length}</h4>
            <h4 className="all">Name : {props.cart.name}</h4>
            <h4 className="all">Given Balance : $ {total}</h4>

        </div>
    );
};

export default Cart;