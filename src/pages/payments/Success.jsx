import React from 'react'

export const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-4xl font-bold mb-6">Payment Successful</h1>
        <p className="text-lg mb-4">Thank you for your purchase! Your payment has been processed successfully.</p>
        <p className="text-lg mb-8">You will receive a confirmation email shortly.</p>
        <button 
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full transition-all duration-300"
            onClick={() => window.location.href="/"}
        >
            Back to Home
        </button>
    </div>
  )
}