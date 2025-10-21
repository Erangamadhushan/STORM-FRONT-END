import React from 'react'

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
                    <div className="group">
                        <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out">
                            <div>
                                <img src="product1.png" alt="digital-watch-type-1" className="size-52 group-hover:scale-110 transition-all duration-300 ease-in-out  object-cover mx-auto"/>
                            </div>
                            <div className="my-5">
                                <h2 className="text-center text-lg font-semibold">Alpine Loop</h2>
                                <p className="text-center text-lime-500">$1,900</p>
                                <p className="text-center p-5">
                                    Customized for your best performance, this cutting edge Storm connected watch pushes the boundaries of technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out">
                            <div>
                                <img src="product2.png" alt="digital-watch-type-2" className="size-52 group-hover:scale-110 transition-all duration-300 ease-in-out  object-cover mx-auto"/>
                            </div>
                            <div className="my-5">
                                <h2 className="text-center text-lg font-semibold">Ocean Band</h2>
                                <p className="text-center text-lime-500">$1,999</p>
                                <p className="text-center p-5">
                                    A new dimension in watchmaking, this cutting edge Storm Connected watch pushes the boundaries of technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-in-out">
                            <div>
                                <img src="product3.png" alt="digital-watch-type-3" className="size-52 group-hover:scale-110 transition-all duration-300 ease-in-out  object-cover mx-auto"/>
                            </div>
                            <div className="my-5">
                                <h2 className="text-center text-lg font-semibold">Trail Loop</h2>
                                <p className="text-center text-lime-500">$2,075</p>
                                <p className="text-center p-5">
                                    Opening an exciting new dimension in digital watchmaking, this advanced Storm connected watch is as luxurious as ever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
