import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Index } from './pages/Index';
import { BuyWatches } from './pages/BuyWatches';
import { PurchaseWatch } from './pages/PurchaseWatch';
import Login from './pages/UserAuthLogin';
import Register from './pages/UserAuthRegister';

// import context providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
// import { useAuth } from './context/AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useAuth();

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="buy-watches" element={<BuyWatches />} />
              
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="purchase-watch/:modelNumber" element={<PurchaseWatch />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
