'use client'
import React, { useState } from 'react'
import product from '@/app/navigation/hero.json'
import Image from 'next/image'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import { useCart } from '../Context/CartContext'

const allProduct = product

const ProductDetails = ({ id }) => {
  const [sizeError, setSizeError] = useState(false)
  const [justAdd, setJustAdd] = useState(false)
  const { addToCart } = useCart()
  const Product = allProduct
    .flatMap((item) => item.product || [])
    .map((item, index) => ({ ...item, orginalId: item.id, id: index + 1 }))
  const singleProduct = Product.find((item) => item.id === Number(id))
  console.log(singleProduct)
  const [activeImage, setActiveImage] = useState(0)
  const [SelectorColor, setSelectorColor] = useState(
    singleProduct?.color?.[0] || ''
  )
  const [SelectedSize, setSelectedSize] = useState(null)
  const [quantity, setQuantity] = useState(1)
  if (!singleProduct) {
    return <div className="">not found</div>
  }
  const {
    name,
    category,
    price,
    rating,
    color = [],
    sizes = [],
    description,
    image = [],
    orginalId,
  } = singleProduct
  const oldPrice = price * 1.3
  const ratingValue = Math.round(parseFloat(rating))
  const images = image.length > 0 ? image : ['/oxivos.png']

  const HandelAddToCart = () => {
    if (sizes.length > 0 && !SelectedSize) {
      setSizeError(true)
      return
    }
    setSizeError(false)
    addToCart({
      id,
      orginalId,
      name,
      price,
      image: images[0],
      color: SelectorColor,
        size: SelectedSize,
      quantity
    })
      setJustAdd(true)
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[4/5] bg-card rounded-md overflow-hidden group ">
          <Image
            src={images[activeImage]}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw,50vw"
          />
          <button
            aria-label="expand image"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 h-8 w-8 flex items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background transition"
          >
            <HiOutlineArrowsExpand size={16} />
          </button>
          {images.length > 0 && (
            <>
              <button
                aria-label="previous  image"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
              >
                <IoIosArrowBack size={18} />
              </button>
              <button
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition"
                aria-label="next image"
                onClick={() =>
                  setActiveImage((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <IoIosArrowForward size={18} />
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-square rounded-md overflow-hidden border transition ${activeImage === index ? 'border-primary' : 'border-border'}`}
              >
                <Image
                  sizes="120px"
                  fill
                  className="object-cover"
                  src={img}
                  alt={`${name} thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
          {name}
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex text-accent">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                className={i < ratingValue ? 'text-accent' : 'text-border'}
                key={i}
                size={13}
              />
            ))}
          </div>
          <span className="text-xs text-muted">{rating}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm line-through text-muted">
            ${oldPrice.toFixed(2)}
          </span>
          <span className="text-sm line-through text-muted">
            ${price.toFixed(2)}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted line-clamp-1 sm:line-clamp-5">
          {description}
        </p>
        <div className="flex flex-col gap-2">
          <span className="text-sm text-foreground">
            Color:
            <span className="font-medium capitalize">{SelectorColor}</span>
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {color.map((c) => (
              <button
                className={`h-6 w-6 rounded-full border-2 transition ${SelectorColor === c ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setSelectorColor(c)}
                key={c}
                style={{ backgroundColor: c }}
              ></button>
            ))}
          </div>
        </div>
        {sizes.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="text-sm text-foreground">
              Size:
              <span className="font-medium capitalize">
                {SelectedSize || '-'}
              </span>
            </span>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-w-md">
              {sizes.map((s) => (
                <button
                  onClick={() => setSelectedSize(s)}
                  className={`h-9 text-xs font-medium rounded border transition ${SelectedSize === s ? 'bg-accent text-white border-accent' : 'bg-background text-foreground border-border hover:border-primary'}`}
                  key={s}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 ">
          <div className="flex items-center justify-center text-foreground hover:bg-card transition">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-11 w-9 items-center border border-border rounded-md justify-center text-foreground hover:bg-card transition"
            >
              -
            </button>
            <span className="text-foreground">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q + 1))}
              className="h-11 w-9 items-center justify-center border border-border rounded-md  text-foreground hover:bg-card transition"
            >
              +
            </button>
          </div>
          <button
            disabled={justAdd}
            onClick={HandelAddToCart}
            className="flex-1 h-11 disabled:opacity-60 disabled:cursor-not-allowed rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
          >
            Add To Cart
          </button>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-muted pt-4 border-t border-border mt-2 ">
          <p className="">
            Sku: <span className="text-foreground">{orginalId}</span>
          </p>
          <p className="">
            category:
            <span className="text-foreground">{category}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
