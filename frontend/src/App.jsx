import { Route, Routes } from "react-router";
import Home from "./pages/Homepage";
import MarketPlace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/protected/Admin";
import OrderDetails from "./pages/protected/OrderDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/protected/UserProfile";
import ProtectedLayout from "./layout/ProtectedLayout";
import ProtectedAdminLayout from "./layout/ProtectedAdminLayout";

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

        {/* protected layouts */}
        <Route element={<ProtectedLayout />}>
          <Route path="admin" element={<ProtectedAdminLayout />}>
            <Route index element={<Admin />} />
            <Route path=":order_id" element={<OrderDetails />} />
          </Route>

          <Route path="profile" element={<UserProfile />} />
        </Route>
        {/* **** */}

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
