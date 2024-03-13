import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart/Cart";
import { Shop } from "../pages/shop/Shop";
import { ShopContextProvider } from "../context/shopContext";

import NavBar from "../Componets/NavBar";
function App() {
  return (
    <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
