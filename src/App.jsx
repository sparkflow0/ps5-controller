import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy-load heavy pages to reduce initial JS memory footprint.
const HomePage = lazy(() => import('./pages/Home.jsx'));
const ConfiguratorPage = lazy(() => import('./pages/Configurator.jsx'));
const CartPage = lazy(() => import('./pages/Cart.jsx'));
const CheckoutPage = lazy(() => import('./pages/Checkout.jsx'));
const PaymentPage = lazy(() => import('./pages/Payment.jsx'));
const ConfirmationPage = lazy(() => import('./pages/Confirmation.jsx'));
const OrderSummaryPage = lazy(() => import('./pages/OrderSummary.jsx'));
const TrackOrderPage = lazy(() => import('./pages/TrackOrder.jsx'));
const POSPage = lazy(() => import('./pages/POS.jsx'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/configurator" element={<ConfiguratorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/confirmation" element={<ConfirmationPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/trackorder" element={<TrackOrderPage />} />
        <Route path="/pos" element={<POSPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
