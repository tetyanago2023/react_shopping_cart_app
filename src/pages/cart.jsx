// import React from 'react';
// import {useSelector} from "react-redux";
//
// const Cart = () => {
//     const { cart } = useSelector(state => state);
//     console.log(cart);
//
//     return (
//         <div>
//             Cart
//         </div>
//     );
// };
//
// export default Cart;

import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const[totalCart, serTotalCart] = useState(0)
    // Select specific parts of the state that your component needs
    const cartItems = useSelector(state => state.cart); // Assuming 'cart' is the slice name

    useEffect(() => {
        serTotalCart(cartItems.reduce((acc, curr) => acc + curr.price, 0))
    }, [cartItems]);

    console.log(cartItems,totalCart);

    return (
        <div>
            <h2>Cart</h2>
            {/* Render your cart items here */}
        </div>
    );
};

export default Cart;