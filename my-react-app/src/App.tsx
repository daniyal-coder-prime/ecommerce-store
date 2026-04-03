import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    // Step 1: BrowserRouter wraps EVERYTHING
    // Nothing works without this wrapper
    <BrowserRouter>

      {/* Step 2: Routes holds all your route definitions */}
      <Routes>

        {/* Step 3: Each Route maps a URL to a component */}
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* Catch-all: any unknown URL redirects to home */}
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;