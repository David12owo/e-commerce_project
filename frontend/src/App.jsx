import { Route, Routes } from "react-router";
import Home from "./pages/Homepage";
import MarketPlace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="products">
          <Route index element={<MarketPlace />} />
          <Route path=":product_id" element={<ProductDetails />} />
        </Route>

        <Route path="checkout" element={<Checkout />} />
        <Route path="cart" element={<Cart />} />

        <Route path="admin">
          <Route index element={<Admin />} />
          <Route path=":order_id" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
