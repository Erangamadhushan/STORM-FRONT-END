import {useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getCountryCode } from "../utils/country.code"; // Import the utility function
import { useNavigate } from "react-router-dom";
import { userAuth } from "../services/api";

const UserProfile = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [verifiedUser, setVerifiedUser] = useState(null);
  //const [showOrders, setShowOrders] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setVerifiedUser(null);
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    console.log("UserProfile Token:", token);
    if (!token) {
        navigate("/login")
    };
    console.log("Verifying user with token:", token);

    const result = userAuth.verifyUser(token);
    if (result) {
        result.then((res) => {
            console.log("Verified User Data:", res.data);
            setVerifiedUser(res.data);
        });
    }
  }, [verifiedUser, navigate]);

  const code = isAuthenticated && getCountryCode(user.shippingAddress.country);
  console.log("User Profile Code:", code);
  return (
    <div className="min-h-screen bg-black p-6">
      {/* Page Container */}
      <div className="mx-auto max-w-6xl bg-black text-white border border-black p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-300 pb-6">
          {/* User Info */}
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Hello, {user?.name}</h2>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{user?.country}</span>
            </div>

            <p className="text-sm text-white">{user?.email}</p>

            <p className="text-sm text-white">
              Account created at:{" "}
              {new Date(user?.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-lime-500 p-2 px-4 rounded-md text-black font-semibold hover:text-white transition"
          >
            Logout
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Orders */}
          <div className="md:col-span-2 border border-black p-4">
            <h3 className="font-semibold mb-4">Recent Order Details</h3>

            
          </div>

          {/* Cart */}
          <div className="border border-black p-4">
            <h3 className="font-semibold mb-4">Cart Items</h3>
            <p className="text-sm text-white">No items in cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
