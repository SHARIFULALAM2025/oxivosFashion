"use client"
import React, { useState } from 'react';
import product from "@/app/navigation/hero.json";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from '../Card/Card';
const allProduct=product
const FeatureProduct = () => {

    const [currentPage,setCurrentPage]=useState(1)
    const featureProduct = allProduct.flatMap((item) => item.product || []).map((item,index)=>({...item,orginalId:item.id,id:index+1}))

    console.log(featureProduct)
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
      <section
        id="best-seller"
        className="bg-background pt-5 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8 max-w-2xl mx-auto sm:mb-12">
          <h1 className=" text-foreground sm:text-3xl text-2xl font-semibold sm:mb-4 mb-3">
            Best feature Products
          </h1>
          <p className=" text-muted text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>{' '}
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {currentProduct.map((item, index) => {
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
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 flex-wrap pb-8">
          <button
            className="flex items-center justify-center h-8 w-8 rounded-full border border-border transition-all text-foreground duration-200 hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed"
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
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full text-sm font-medium transition-all duration-200 ${page === currentPage ? 'bg-primary text-background shadow-md' : 'text-muted hover:bg-card'}`}
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
            className="flex items-center justify-center h-8 w-8 rounded-full border border-border transition-all duration-200 text-foreground hover:bg-card disabled:opacity-30 disabled:cursor-not-allowed "
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