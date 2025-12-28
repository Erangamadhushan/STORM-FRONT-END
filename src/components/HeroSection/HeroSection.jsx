import React from 'react';
import { motion } from 'motion/react';

export const HeroSection = () => {
    return (
        <div>
            <motion.div className="flex flex-col items-center justify-center min-h-[400px] bg-black px-4 py-10">
                <div>
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xl md:text-xl font-bold mb-4 text-center text-lime-500">Smart Watch</motion.h1>
                    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-5xl text-center max-w-2xl text-white font-semibold">
                        STORM PRO
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="w-[95%] md:w-full h-auto max-w-5xl rounded-md mt-10 overflow-hidden" >
                    <motion.img  src='main-img5.png' alt='Digital Watch' className='w-[95%] mx-auto md:w-[60%] object-cover object-center'/>
                </motion.div>
                <div className={`transition-all duration-700 ease-out  text-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10 `} id="brand-experience">
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="w-1/2 mx-auto hidden md:block">
                        <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} src='digital-watch4.jpg' alt='Digital Watch' className='w-full bg-gray-950 h-auto rounded-lg shadow-lg'/>
                    </motion.div>
                    <div className="flex flex-col justify-center ">
                        <motion.div className='p-5 md:p-10'>
                            <motion.h2 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-2xl md:text-4xl font-bold mb-4 text-white">Battery life for days</motion.h2>
                            <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-gray-300 mb-6">
                                When you're on the second day of a backpacking trip, the final leg of a triathlon, or diving along a coral reef, the last thing you want to think about is running out of battery. 
                                With longer battery life than ever. You can take on almost anything and have energy to spare.
                            </motion.p>
                        </motion.div>
                        <div className='p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8'>
                            <div className="">
                                <motion.h2 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="text-2xl md:text-4xl font-bold mb-4 text-white">Up to</motion.h2>
                                <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="text-4xl text-lime-500 font-bold mb-6">
                                    36 hours
                                </motion.p>
                                <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="text-white mb-6">
                                    of normal use
                                </motion.p>
                            </div>
                            <div className="">
                                <motion.h2 initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-2xl md:text-4xl font-bold mb-4 text-white">Up to</motion.h2>
                                <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-4xl text-lime-500 font-bold mb-6">
                                    60 hours
                                </motion.p>
                                <motion.p initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-white mb-6">
                                    on low power settings
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
