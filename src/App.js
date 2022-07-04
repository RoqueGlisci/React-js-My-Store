

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/CartContext";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {

  return (
    <>
      <MyContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/inicio" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/producto/:id" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="*" element={<h1>not found</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext>
    </>
  );
}

export default App;
