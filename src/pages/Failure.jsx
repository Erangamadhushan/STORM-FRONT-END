import React from 'react'

export const Failure = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4"> Payment Failed </h1>
        <p className="mb-6"> Unfortunately, your payment could not be processed. Please try again. </p>
        <a href="/" className="text-lime-400 hover:underline"> Go back to Home </a>
    </div>
  )
}
