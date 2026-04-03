import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import  ProductDetailDemo  from "./practice/day5-router";
const isLoggedIn = false;

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // If not logged in, send them to login page
  if (!isLoggedIn) return <Navigate to="/login" replace />;

  // If logged in, show the actual page
  return <>{children}</>;
};

function App() {
  return (
    // Step 1: BrowserRouter wraps EVERYTHING
    // Nothing works without this wrapper
    <BrowserRouter>
      {/* Step 2: Routes holds all your route definitions */}
      <Routes>
        {/* Step 3: Each Route maps a URL to a component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Catch-all: any unknown URL redirects to home */}
        <Route path="*" element={<Navigate to="/" />} />

        <Route path='/products/:id' element={<ProductDetailDemo />} />

        <Route // here if not logged in , user will not b e able to go on checkout page
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
