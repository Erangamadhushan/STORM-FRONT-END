import React from 'react'

export const Success = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4"> Payment Success </h1>
        <p className="mb-6"> Thank you for your purchase! Your payment was successful. </p>
        <a href="/" className="text-lime-400 hover:underline"> Go back to Home </a>
    </div>
  )
}
