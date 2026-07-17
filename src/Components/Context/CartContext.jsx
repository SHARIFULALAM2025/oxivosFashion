'use client'

import { createContext, useContext, useEffect, useReducer, useState } from 'react'

const CartContext = createContext(null)
const makeLineId = (id, size, color) =>
  `${id}-${size ?? 'default'}-${color ?? 'default'}`
const initialState = {
  items: [],
}
function cartReducer(state, action) {
  switch (action.type) {
    case 'HYDRATE': {
      return action.payload || state
    }
    case 'ADD_ITEM': {
      const { product, size, color, quantity = 1 } = action.payload
      const lineId = makeLineId(product.id, size, color)
      const existing = state.items.find((i) => i.lineId === lineId)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            lineId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: Array.isArray(product.image)
              ? product.image[0]
              : product.image,
            size: size ?? null,
            color: color ?? null,
            quantity,
          },
        ],
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((i) => i.lineId !== action.payload.lineId),
      }
    }
    case 'UPDATE_QUANTITY': {
      const { lineId, quantity } = action.payload
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.lineId !== lineId),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.lineId === lineId ? { ...i, quantity } : i
        ),
      }
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] }
    }

    default:
      return state
  }
}
const STORAGE_KEY = 'oxivos_cart'
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    try {
      const save = localStorage.getItem(STORAGE_KEY)
      if (save) {
        dispatch({ type: 'HYDRATE', payload: JSON.parse(save) })
      }
    } catch (err) {
      console.error('failed to cart', err)
    } finally {
        setIsHydrated(true)
    }
  }, [])
    useEffect(() => {
        if (!isHydrated) return
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }, [state, isHydrated])
    const addToCart = (product, option = {}) => {
        dispatch({type:"ADD_ITEM",payload:{product,...option}})
    }
    const removeFromCart = (lineId) => {
         dispatch({ type: 'REMOVE_ITEM', payload: { lineId } })
    }
    const updateQuantity = (lineId,quantity) => {
         dispatch({ type: 'UPDATE_QUANTITY', payload: { lineId, quantity } })
    }
    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }
    const totalItem=state.items.reduce((sum,i)=>sum+i.quantity,0)
    const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const value = {
      items: state.items,
      totalPrice,
      totalItem,
      clearCart,
      updateQuantity,
      removeFromCart,
        addToCart,
      isHydrated
    }

    return <CartContext.Provider value={value}>{ children}</CartContext.Provider>
}
export  function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('use cart must use cart provider')
    }
    return context
}