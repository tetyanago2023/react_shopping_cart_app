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

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Cart = () => {
    const[totalCart, setTotalCart] = useState(0)
    const cart = useSelector(state => state.cart);

    //

    useEffect(() => {
        // Ensure cart is an array before trying to calculate the total price
        if (Array.isArray(cart) && cart.length > 0) {
            // Use reduce to sum up the prices of all items in the cart
            const totalPrice = cart.reduce((acc, curr) => acc + curr.price);
            setTotalCart(totalPrice);
        } else {
            // If cart is empty or not an array, set totalCart to 0
            setTotalCart(0);
        }
    }, [cart]);

    console.log(cart,totalCart);

    return <>
        {
            cart && cart.length
                ? <div>

                </div>
                : <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                <Link to={"/"}>
                    <button className="bg-red-950 text-white boder-2 rounded-lg font-bold p-4">
                        Shop now
                    </button>
                </Link>
                </div>
        }
    </>
};

export default Cart;