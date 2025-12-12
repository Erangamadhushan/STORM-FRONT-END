import { useParams } from "react-router-dom";
import {
  ShoppingCart,
  Check,
  Star,
  Shield,
  Truck,
  CreditCard,
  Info,
} from "lucide-react";
import { useEffect, useState } from "react";
import { fetchWatchByModelNumber } from "../services/api";

export const PurchaseWatch = () => {
  const { modelNumber } = useParams();
  const [watch, setWatch] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleCheckout = () => {
    console.log("Checkout:", { watch, quantity });
    alert(`Proceeding to checkout with ${quantity} watch(es)`);
    // Navigate to checkout page
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", { watch, quantity });
    alert(`Added ${quantity} watch(es) to cart`);
  };

  useEffect(() => {
    const getWatchDetails = async () => {
      try {
        const watchDetails = await fetchWatchByModelNumber(modelNumber);
        console.log("Watch details:", watchDetails);
        setWatch(watchDetails);
      } catch (error) {
        console.error("Failed to fetch watch details:", error);
      }
    };
    getWatchDetails();
  }, [modelNumber]);
  return (
    <div>
      <main className="bg-black text-white min-h-screen p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Purchase Watch
        </h1>
        {watch ? (
          <div className="max-w-full mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Left: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="bg-gray-900 rounded-2xl p-3 border border-gray-800 overflow-hidden">
                  <img
                    src={watch.imageURL}
                    alt={watch.modelNumber}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                </div>
              </div>

              <div>
                {/* Right: Product Details */}
                <div className="space-y-6">
                  {/* Brand & Type */}
                  <div>
                    <div className="flex items-center gap-2 text-lime-400 text-sm font-semibold mb-2">
                      <Check className="w-4 h-4" />
                      <span>IN STOCK</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">{watch.brand}</h1>
                    <p className="text-gray-400 text-lg">{watch.type}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-lime-400 text-lime-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">(234 reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-bold text-lime-400">
                        ${watch.price}
                      </span>
                      <span className="text-gray-400 line-through text-xl">
                        $1,299
                      </span>
                      <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        23% OFF
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      Pre-order price - Limited time offer
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Model Number:</span>
                      <span className="font-semibold">{watch.modelNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Country of Origin:</span>
                      <span className="font-semibold">
                        {watch.countryOfOrigin}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type:</span>
                      <span className="font-semibold">{watch.type}</span>
                    </div>
                  </div>
                </div>
              </div>

                <div>
                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-gray-900 rounded-lg border border-gray-800">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-3 hover:bg-gray-800 transition"
                        >
                          -
                        </button>
                        <span className={"px-6 py-3 font-semibold border-x border-gray-800 "}>
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-3 hover:bg-gray-800 transition"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-gray-400" title={(watch.price * quantity).toFixed(2) > 100000 ? "Warning: High total price" : ""}>
                        Total:{" "}
                        <span className={`${(watch.price * quantity).toFixed(2) > 100000 ? "text-red-600" : "text-lime-400"} font-bold text-xl`}>
                          ${(watch.price * quantity).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleCheckout}
                      className="w-full bg-lime-400 text-black font-bold py-4 rounded-lg hover:bg-lime-300 transition transform hover:scale-105 flex items-center justify-center gap-2 my-3"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Checkout Now
                    </button>
                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-gray-900 text-white font-semibold py-4 rounded-lg border-2 border-gray-700 hover:border-lime-400 transition"
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-2">
                        <Shield className="w-8 h-8 text-lime-400 mx-auto" />
                      </div>
                      <p className="text-xs text-gray-400">2 Year Warranty</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-2">
                        <Truck className="w-8 h-8 text-lime-400 mx-auto" />
                      </div>
                      <p className="text-xs text-gray-400">Free Shipping</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mb-2">
                        <CreditCard className="w-8 h-8 text-lime-400 mx-auto" />
                      </div>
                      <p className="text-xs text-gray-400">Secure Payment</p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-gray-900 rounded-xl p-4 my-3 border border-gray-800 flex items-start gap-3">
                    <Info className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-400">
                      <p className="font-semibold text-white mb-1">
                        Pre-order Information
                      </p>
                      <p>
                        Expected delivery: January 2026. You will be charged
                        when your order ships. Cancel anytime before shipping.
                      </p>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        ) : (
          <p>Loading watch details...</p>
        )}
      </main>
    </div>
  );
};
