import Link from 'next/link';
import React from 'react';

const EmptyCart = () => {
    return (
        <div className='text-center py-24'>
            <h2 className="text-3xl font bold">
                your cart is empty
            </h2>
            <p className="">looks like you have not  add any product yet</p>
            <Link href="/product" className='inline-block mt-8 bg-background text-foreground px-8 py-3 rounded-lg'>
                continue shopping
            </Link>

        </div>
    );
};

export default EmptyCart;