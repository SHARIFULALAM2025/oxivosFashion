'use client'
import React, { useMemo, useState } from 'react'
import product from '@/app/navigation/hero.json'

import Card from '../Card/Card'
import { HiOutlineSearch } from 'react-icons/hi'

const allProduct = product
const AllProduct = () => {
  const featureProduct = allProduct
    .flatMap((item) => item.product || [])
    .map((item, index) => ({ ...item, orginalId: item.id, id: index + 1 }))
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortOrder, setSortOrder] = useState('default')
  const category = useMemo(() => {
    const unique = new Set(featureProduct.map((item) => item.category))
    return ['All', ...Array.from(unique)]
  }, [featureProduct])
  const visibleProduct = useMemo(() => {
    let result = featureProduct
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase()
      result = result.filter((item) => item.name.toLowerCase().includes(term))
    }
    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory)
    }
    if (sortOrder === 'low-high') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'high-low') {
      result = [...result].sort((a, b) => b.price - a.price)
    }
    return result
  }, [featureProduct, searchTerm, selectedCategory, sortOrder])

  return (
    <section
      id="best-seller"
      className="bg-background pt-5 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <HiOutlineSearch
            className="absolute lest-3 top-1/2 -translate-1/2 text-muted"
            size={16}
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search product...."
            className="w-full h-10 pl-9 pr-3 rounded-md placeholder:text-muted focus:outline-none focus:border-primary transition"
          />
        </div>
        <div className="flex gap-3">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="h-10 px-3 rounded-md border border-border bg-card text-sm text-foreground focus:outline-none focus:border-primary transition"
          >
            {category.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <select
            className="h-10 px-3 rounded-md border border-border bg-card text-sm text-foreground focus:outline-none focus:border-primary transition"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default" className="">
              sort:Default
            </option>
            <option value="low-high" className="">
              Price:Low To High
            </option>
            <option value="default" className="">
              Price:High To Low
            </option>
          </select>
        </div>
      </div>
      {visibleProduct.length === 0 ? (
        <p>no product search your product</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {featureProduct.map((item, index) => {
            const oldPrice = item.price * (1.3).toFixed(2)
            const discount = Math.round(
              (oldPrice - item.price / oldPrice) / 100
            )
            return (
              <Card
                key={index}
                item={item}
                discount={discount}
                oldPrice={oldPrice}
                index={index}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default AllProduct
