import { motion } from 'motion/react';
import { useEffect, useState } from 'react'

const fetchCurrentOrder = async () => {
    const order = localStorage.getItem('currentOrder');
    localStorage.removeItem('currentOrder');
    return order ? JSON.parse(order) : null;
}
export const PaymentFailure = () => {
    const [modelNumber, setModelNumber] = useState(null);
    useEffect(() => {
        // Clear current order from local storage on payment failure
        const { modelNumber } = fetchCurrentOrder();
        if (modelNumber) {
            setModelNumber(modelNumber);
            alert(`Redirecting to checkout for model number: ${modelNumber}`);
        }
        
    }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-4xl font-bold mb-6">Payment Failed</h1>
        <p className="text-lg mb-4">Unfortunately, your payment could not be processed at this time.</p>
        <p className="text-lg mb-8">Please try again or contact support if the issue persists.</p>
        <button 
            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full transition-all duration-300"
            onClick={() => window.location.href=`/check-out/:${modelNumber}`}
        >
            Retry Payment
        </button>
    </div>
  )
}
