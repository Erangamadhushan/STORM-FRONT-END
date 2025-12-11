import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Index } from './pages/Index';
import { BuyWatches } from './pages/BuyWatches';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="buy-watches" element={<BuyWatches />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
