import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

const Cart = () => {
    const[totalCart, setTotalCart] = useState(0)
    const cart = useSelector(state => state);

    useEffect(() => {
        if (Array.isArray(cart) && cart.length > 0) {
            const totalPrice = cart.reduce((acc, curr) => acc + curr.price);
            setTotalCart(totalPrice);
        } else {
            setTotalCart(0);
        }
    }, [cart]);

    console.log(cart,totalCart);

    return <>
        {
            cart && cart.length ? (
                <>
                    <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
                        <div className="flex flex-col justify-center items-center p-3">
                            {
                                cart.map((cartItem, index) => <CartTile key={index} cartItem={cartItem}/>)
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                            <h1 className="font-bold text-lg text-red-800">Your cart summary</h1>
                            <p>
                                <span className="text-gray-800 font-bold">Total Items</span>
                                <span>: {cart.length}</span>
                            </p>
                            <p>
                                <span className="text-gray-800 font-bold">Total Amount</span>
                                <span>: {totalCart}</span>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                        <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is empty</h1>
                        <Link to={"/"}>
                            <button className="bg-red-950 text-white boder-2 rounded-lg font-bold p-4">
                            Shop now
                        </button>
                    </Link>
                </div>)
        }
    </>
};

export default Cart;