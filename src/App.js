import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './layout';
import { Index } from './pages/Index';
import { BuyWatches } from './pages/BuyWatches';
import { PurchaseWatch } from './pages/PurchaseWatch';
import Login from './pages/UserAuthLogin';
import Register from './pages/UserAuthRegister';
import CheckOut from './pages/CheckOut';
import UserProfile from './pages/UserProfile';
import About from './pages/about/About';
import FAQ from './pages/faq/FAQ';
import CustomerCare from './pages/customercare/CustomerCare';
import TermsAndConditions from './pages/terms/TermsAndConditions.jsx';
import Contact from './pages/contact/Contact';
import { PaymentSuccess } from './pages/payments/Success.jsx';
import { PaymentFailure } from './pages/payments/Failure.jsx';

// import context providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import { useAuth } from './context/AuthContext';
import { useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <OrderProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="buy-watches" element={<BuyWatches />} />
                
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="purchase-watch/:modelNumber" element={<PurchaseWatch />} />
              
              <Route path="check-out/:modelNumber" element={
                <ProtectedRoute>
                  <CheckOut />
                </ProtectedRoute>
              } />
              <Route path="user-profile/summary" element={
                <UserProfile />
              } />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/contact" element={<Contact />} />    
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failure" element={<PaymentFailure />} />  
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </OrderProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
