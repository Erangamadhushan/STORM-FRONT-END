import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paymentMethods } from '../data/payment-methods.data';
import { CreditCard, Smartphone, Wallet, Lock, ArrowLeft, Check } from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import axios from "axios";
import { paymentApi } from '../services/api';


export default function CheckOut() {
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const navigate = useNavigate();

  const { orderDetails } = useOrder();


  // Order summary data
  const orderSummary = {
    shipping: 0,
    tax: (orderDetails.totalPrice * 0.001).toFixed(2),
    discount: (orderDetails.totalPrice * 0.02).toFixed(2)
  };

  const total = orderDetails.totalPrice || (orderSummary.price + orderSummary.tax - orderSummary.discount);

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e) => {
    const value = e.target.value.replace(/\//g, '');
    if (value.length <= 4 && /^\d*$/.test(value)) {
      if (value.length >= 2) {
        setExpiry(value.slice(0, 2) + '/' + value.slice(2));
      } else {
        setExpiry(value);
      }
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handlePayment = async () => {
    const token = localStorage.getItem('authToken');
    const watch = {
      image: orderDetails.imageURL,
      name: orderDetails.watch.modelNumber,
      quantity: orderDetails.quantity,
      price: Math.round((total + parseFloat(orderSummary.tax) - parseFloat(orderSummary.discount)) * 100), // amount in cents
      
      // You can add more payment details here if needed
    };
    const res =  await paymentApi(token, watch);
    

    window.location.href = res.data.url;
  };


  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cart</span>
        </button>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold">Shipping</span>
            </div>
            <div className="w-20 h-0.5 bg-lime-400"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-sm font-semibold text-lime-400">Payment</span>
            </div>
            <div className="w-20 h-0.5 bg-gray-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-sm text-gray-400">Confirm</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

              {/* Payment Method Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-6 rounded-xl border-2 transition ${
                        selectedMethod === method.id
                          ? 'border-lime-400 bg-lime-400/10'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-3 ${
                        selectedMethod === method.id ? 'text-lime-400' : 'text-gray-400'
                      }`} />
                      <p className="font-semibold text-sm mb-1">{method.name}</p>
                      <p className="text-xs text-gray-400">{method.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Card Payment Form */}
              {/* {selectedMethod === 'card' && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full bg-black border border-gray-700 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-lime-400 transition"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={handleExpiryChange}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-lime-400 transition"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="saveCard"
                      checked={saveCard}
                      onChange={(e) => setSaveCard(e.target.checked)}
                      className="w-4 h-4 accent-lime-400"
                    />
                    <label htmlFor="saveCard" className="text-sm text-gray-400 cursor-pointer">
                      Save this card for future purchases
                    </label>
                  </div>
                </div>
              )} */}

              {/* Mobile Payment */}
              {selectedMethod === 'mobile' && (
                <div className="text-center py-8">
                  <Smartphone className="w-16 h-16 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile Payment</h3>
                  <p className="text-gray-400 mb-6">
                    Click the button below to continue with your mobile payment app
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button className="px-6 py-3 bg-black border border-gray-700 rounded-lg hover:border-lime-400 transition">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🍎</span>
                        <span className="font-semibold">Apple Pay</span>
                      </div>
                    </button>
                    <button className="px-6 py-3 bg-black border border-gray-700 rounded-lg hover:border-lime-400 transition">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🔵</span>
                        <span className="font-semibold">Google Pay</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Digital Wallet */}
              {selectedMethod === 'wallet' && (
                <div className="text-center py-8">
                  <Wallet className="w-16 h-16 text-lime-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Digital Wallet</h3>
                  <p className="text-gray-400 mb-6">
                    Choose your preferred digital wallet provider
                  </p>
                  <div className="space-y-3 max-w-md mx-auto">
                    <button className="w-full px-6 py-4 bg-black border border-gray-700 rounded-lg hover:border-lime-400 transition flex items-center justify-between">
                      <span className="font-semibold">PayPal</span>
                      <span className="text-2xl">💳</span>
                    </button>
                    <button className="w-full px-6 py-4 bg-black border border-gray-700 rounded-lg hover:border-lime-400 transition flex items-center justify-between">
                      <span className="font-semibold">Venmo</span>
                      <span className="text-2xl">📱</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Security Info */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex items-start gap-4">
              <Lock className="w-6 h-6 text-lime-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Secure Payment Processing</h3>
                <p className="text-sm text-gray-400">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          {selectedMethod === 'card' && (
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-8">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                {/* Product Details */}
                <div className="flex gap-4 mb-6 pb-6 border-b border-gray-800">
                  <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={orderDetails.imageURL || 'https://via.placeholder.com/150'}
                      alt="Storm Watch"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{orderDetails.watch.modelNumber}</h4>
                    <p className="text-sm text-lime-400"> {orderDetails.watch.type}</p>
                    <p className="text-sm text-gray-400">Qty: {orderDetails.quantity}</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">${total}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold text-lime-400">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tax</span>
                    <span className="font-semibold">${orderSummary.tax}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Discount <span className="text-lime-500">(2% OFF)</span></span>
                    <span className="font-semibold text-lime-400">-${orderSummary.discount}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-lime-400" id="total-amount">${(total + parseFloat(orderSummary.tax) - parseFloat(orderSummary.discount)).toFixed(2) }</span>
                    </div>
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handlePayment}
                  className="w-full bg-lime-400 text-black font-bold py-4 rounded-lg hover:bg-lime-300 transition transform hover:scale-[101%] flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Pay ${(total + parseFloat(orderSummary.tax) - parseFloat(orderSummary.discount)).toFixed(2) }
                </button>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span>Encrypted</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-lime-400" />
                      <span>Protected</span>
                    </div>
                  </div>
                </div>

                {/* Accepted Cards */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 mb-2">We accept</p>
                  <div className="flex justify-center gap-2 opacity-50">
                    <span className="text-2xl">💳</span>
                    <span className="text-2xl">🍎</span>
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}