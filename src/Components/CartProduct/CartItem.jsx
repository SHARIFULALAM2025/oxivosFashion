import React from 'react'
import { useCart } from '../Context/CartContext'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'

import { CiTrash } from 'react-icons/ci'
import Swal from 'sweetalert2'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()
  const handelDelete = () => {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'Do you want to remove  the item for your cart?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: 'var(--primary)',
      cancelButtonCOLOR: '#d33',
      confirmButtonText: 'yes,remove it!',
      Background: 'var(--background)',
      color: 'var(--primary)',
      denyButtonText: `Keept  it`,
    }).then((result) => {
      if (result.isConfirmed)
        (removeFromCart(item.lineId),
          Swal.fire({
            title: "'Removed!'",
            icon: 'success',
            confirmButtonColor: 'var(--primary)',
            background: 'var(--background)',
            color: 'var(--foreground)',
            text: 'the item has been remove from your cart',
          }))
      else if (result.isDenied) Swal.fire('item not delete your cart page ', '', 'info')
    })
  }

  return (
    <div className=" flex gap-5 border rounded-lg p-5 bg-background">
      <Image
        src={item.image}
        alt={item.name}
        width={120}
        height={120}
        className="rounded-lg object-cover"
      />
      <div className="flex-1 relative">
        <h3 className="">Product Name:{item.name}</h3>
        <p className="">Size: {item.size}</p>
        <p className="">Color: {item.color}</p>
        <p className="">Price: {item.price * item.quantity}</p>
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
              className="px-4 py-2"
            >
              <FaMinus size={18} />
            </button>
            <span className="">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
              className="px-4 py-2"
            >
              <FaPlus size={18} />
            </button>
          </div>
          <div className="absolute top-3 right-3">
            <button onClick={handelDelete}>
              <CiTrash className="text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
