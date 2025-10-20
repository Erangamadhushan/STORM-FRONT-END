import React from 'react'
import { BookCheck } from 'lucide-react'

export const PreOrder = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8" id="pre-order">
        <div>
            <h2 className="text-2xl font-semibold md:text-5xl mb-12">
                The Last delivery you need to stay home for.
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-6 items-center">
                <div>
                    <img src="digital-watch9.jpg" alt="preorder-watch" className="size-36 object-cover mx-auto"/>
                </div>
                <div>
                    <p className="">
                        Storm Watch - The first smart watch
                    </p>
                    <p className="text-gray-400">
                        Worry free parcel deliverios
                    </p>
                </div>
            </div>
            <div className="pb-4">
                <ul className="list-none md:ml-10">
                    <li className=" p-2"><BookCheck className="inline-block mr-2 text-lime-400"/>Starts shipping: October 2022.</li>
                    <li className=" p-2"><BookCheck className="inline-block mr-2 text-lime-400"/>Pick up your items easily and safety.</li>
                    <li className=" p-2"><BookCheck className="inline-block mr-2 text-lime-400"/>Get 3% Daily Cash back. All up front.</li>
                    <li className=" p-2"><BookCheck className="inline-block mr-2 text-lime-400"/>Cancel anytime, money back</li>
                    <li className=" p-2"><BookCheck className="inline-block mr-2 text-lime-400"/>Be the first with a Storm Watch.</li>
                </ul>
            </div>
            <div>
                <a href="/" className=" bg-lime-500 p-3 px-5 text-black font-semibold md:ml-10">
                    Pre-order Storm Watch - $1900
                </a>
            </div>
        </div>
        <div  className="hidden md:block bg-cover bg-center rounded-lg">
            <img src="digital-watch12.jpg" alt="preorder-watch-2" className="w-[75%] mx-auto"/>
        </div>
    </div>
  )
}
