import React from 'react'
import { products } from '../../data/product.data'
import { Navigate } from 'react-router-dom'

export const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20" id="">
        <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mb-10">
                <div>
                    <h2 className="text-2xl text-center md:text-left font-semibold md:text-5xl mb-4">
                        Designed for Versatility performance and style
                    </h2>
                </div>
                <div>
                    <p className="text-center md:text-justify">
                        Find strength in numbers. Making progress as an athlete requires accurate data and insights. Updates to the Workout app like new metrics and views give you all the information you need to be and beat your best.
                    </p>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.map((product) => (
                            <div className="group">
                                <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out">
                                    <div>
                                        <img src={product.img} alt={product.name} className="size-52 group-hover:scale-110 transition-all duration-300 ease-in-out  object-cover mx-auto"/>
                                    </div>
                                    <div className="my-5">
                                        <h2 className="text-center text-lg font-semibold">{product.name}</h2>
                                        <p className="text-center text-lime-500">${product.price}</p>
                                        <p className="text-center p-5">
                                            {product.desc}
                                        </p>
                                    </div>
                                    <div className="text-center mb-5">
                                        <button className="bg-lime-500 text-white px-5 py-2 rounded-full hover:bg-lime-600 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100" onClick={() => window.location.href="/buy-watches"}>
                                            Pre Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
