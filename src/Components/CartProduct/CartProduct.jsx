'use client'
import React from 'react'
import { useCart } from '../Context/CartContext'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

const CartProduct = () => {
  const { items, isHydrated } = useCart()
  if (!isHydrated) {
    return <p className="">Loading</p>
  }
  if (items.length === 0) {
    return <p className="">cart is empty</p>
  }
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <CartItem key={item.lineId} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  )
}

export default CartProduct
