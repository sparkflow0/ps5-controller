import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import ConfiguratorPage from './pages/Configurator.jsx';
import CartPage from './pages/Cart.jsx';
import CheckoutPage from './pages/Checkout.jsx';
import PaymentPage from './pages/Payment.jsx';
import ConfirmationPage from './pages/Confirmation.jsx';
import OrderSummaryPage from './pages/OrderSummary.jsx';
import TrackOrderPage from './pages/TrackOrder.jsx';
import POSPage from './pages/POS.jsx';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/configurator" element={<ConfiguratorPage />} />
    //   <Route path="/cart" element={<CartPage />} />
    //   <Route path="/checkout" element={<CheckoutPage />} />
    //   <Route path="/payment" element={<PaymentPage />} />
    //   <Route path="/payment/confirmation" element={<ConfirmationPage />} />
    //   <Route path="/order-summary" element={<OrderSummaryPage />} />
    //   <Route path="/trackorder" element={<TrackOrderPage />} />
    //   <Route path="/pos" element={<POSPage />} />
    //   <Route path="*" element={<Navigate to="/" replace />} />
    // </Routes>
  );
}

export default App;
