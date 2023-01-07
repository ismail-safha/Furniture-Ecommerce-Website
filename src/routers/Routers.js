import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import PruductDetails from "../pages/PruductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProtectedRouter from "./ProtectedRouter";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<PruductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectedRouter>
            <Checkout />
          </ProtectedRouter>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
    </Routes>
  );
};

export default Routers;
