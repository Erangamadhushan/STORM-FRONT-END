import React from 'react';

export const BuyItem = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 min-h-[400px] py-20" style={{backgroundImage:`url(digital-watch11.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <div className="text-center">
            <h2 className="text-2xl font-bold md:text-4xl">Get your smart watch now</h2>
            <p className="mt-4">Get a 3% cashback, only for pre-order</p>
            <div className="mt-8">
                <a href="/" className=" bg-lime-500 p-3 px-5 text-black font-semibold">
                    Pre - Order Now
                </a>
            </div>
        </div>
    </div>
  )
}
