"use client"
import React, { useState } from 'react';
import product from "@/app/navigation/hero.json";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const allProduct=product
const FeatureProduct = () => {
    const [currentPage,setCurrentPage]=useState(1)
    const featureProduct = allProduct.flatMap((item) => item.product || [])
    const itemParPage = 8;
    const totalPerPage = Math.ceil(featureProduct.length / itemParPage);
    const startIndex = (currentPage - 1) * itemParPage;
    const currentProduct = featureProduct.slice(startIndex, startIndex + itemParPage);
    const goPage = (page) => {
        if (page < 1 || page > totalPerPage) return
        setCurrentPage(page)
        window.scrollTo({top:document.getElementById("best-seller")?.offSetTop-100})
    }

    return (
      <section className="bg-background pt-5 ">
        <div className="text-center mb-12">
          <h1 className=" text-foreground text-3xl font-semibold mb-4">
            Best feature Products
          </h1>
          <p className=" text-foreground text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>{' '}
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {currentProduct.map((item, index) => {
            const oldPrice = item.price * (1.3).toFixed(2)
            const discount = Math.round(
              (oldPrice - item.price / oldPrice) / 100
            )
            return (
              <div className="group cursor-pointer" key={index}>
                <div className="relative aspect-[3/4] bg-background rounded-md overflow-hidden mb-4">
                  <span className="absolute top-3 left-3 z-10 bg-background text- text-foreground text-xs font-semibold px-2 py-2 rounded">
                    {discount}%
                  </span>

                  <Image
                    className="object-cover  group-hover:scale-105 transition-transform duration-500"
                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                    alt={item.category}
                    fill
                    sizes="(max-w:768px) 50vw,25vw "
                  />
                </div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <FaStar className="text-yellow-400 text-sx" />
                  <span className="text-sx dark:text-white text-gray-500">
                    {index === 0 ? '2 Review' : '1 Review'}
                  </span>
                </div>
                <h1 className="text-sx text-gray-800 dark:text-white mb-1.5 line-clamp-1">
                  {item.name}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through dark:text-white text-gray-400">
                    ${oldPrice}
                  </span>
                  <span className="font-semibold dark:text-white text-gray-900 text-sm">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-2 mt-5 pb-8">
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 transition-all text-white duration-200 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:text-gray-500"
            onClick={() => goPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="previous page"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPerPage }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`h-10 w-10 rounded-full text-sx font-medium transition-all duration-200 ${page === currentPage ? 'bg-gray-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                  onClick={() => goPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="previous page"
                >
                  {page}
                </button>
              )
            )}
          </div>
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-200 transition-all duration-200 text-white hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:border-gray-200 disabled:hover:text-gray-500"
            onClick={() => goPage(currentPage + 1)}
            disabled={currentPage === totalPerPage}
            aria-label="previous page"
          >
            <HiChevronRight className="text-xl" />
          </button>
        </div>
      </section>
    )
};

export default FeatureProduct;