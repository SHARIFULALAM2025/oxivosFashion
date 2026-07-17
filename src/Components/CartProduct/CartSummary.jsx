"use client"
import React from 'react';
import { useCart } from '../Context/CartContext';

const CartSummary = () => {
    const { totalPrice, totalItem } = useCart()
    const shipping = 10;
    return (
      <div className="sticky top-20 border rounded-lg p-6 h-fit">
        <h2 className="">order summary</h2>
        <div className="">
          <span className="">item</span>
          <span className="">{totalItem}</span>
        </div>
        <div className="flex justify-between">
          <span className="">subtotal</span>
          <span className="">{totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">shipping</span>
          <span className="">{shipping}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="">total</span>
          <span className="">{totalPrice + shipping}</span>
            </div>
            <button className="mt-8 w-full bg-primary text-foreground rounded-lg py-4">process to checkout</button>
      </div>
    )
};

export default CartSummary;