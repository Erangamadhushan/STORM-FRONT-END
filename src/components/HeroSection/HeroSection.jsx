import React from 'react'

export const HeroSection = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-[400px] bg-black px-4 py-10">
            <div>
                <h1 className="text-xl md:text-xl font-bold mb-4 text-center text-lime-500">Smart Watch</h1>
                <p className="text-lg md:text-5xl text-center max-w-2xl text-white font-semibold">
                    STORM PRO
                </p>
            </div>
            <div className="w-[95%] md:w-full h-auto max-w-5xl rounded-md mt-10 overflow-hidden" >
                <img src='main-img5.png' alt='Digital Watch' className='w-[95%] mx-auto md:w-[60%] object-cover object-center'/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10 " id="brand-experience">
                <div className="w-1/2 mx-auto hidden md:block">
                    <img src='digital-watch4.jpg' alt='Digital Watch' className='w-full bg-gray-950 h-auto rounded-lg shadow-lg'/>
                </div>
                <div className="flex flex-col justify-center ">
                    <div className='p-5 md:p-10'>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Battery life for days</h2>
                        <p className="text-gray-300 mb-6">
                            When you're on the second day of a backpacking trip, the final leg of a triathlon, or diving along a coral reef, the last thing you want to think about is running out of battery. 
                            With longer battery life than ever. You can take on almost anything and have energy to spare.
                        </p>
                    </div>
                    <div className='p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className="">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Up to</h2>
                            <p className="text-4xl text-lime-500 font-bold mb-6">
                                36 hours
                            </p>
                            <p className="text-white mb-6">
                                of normal use
                            </p>
                        </div>
                        <div className="">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Up to</h2>
                            <p className="text-4xl text-lime-500 font-bold mb-6">
                                60 hours
                            </p>
                            <p className="text-white mb-6">
                                on low power settings
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
