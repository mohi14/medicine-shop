import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutNavBar from "./Components/NavBarAboutComponents/AboutNavBar";
import ServicesNavbar from "./Components/NavBarAboutComponents/ServicesNavbar";

import ShopGridNabBar from "./Components/NavBarShopComponents/ShopGridNabBar";
import Login from "./SharedPages/Login";
import Register from "./SharedPages/Register";
import ContactNabVar from "./Components/NabBarContactComponent/ContactNabVar";
import ProductDetailsShowById from "./Components/ProductsInfo/ProductDetailsShowById";
import ScrollTOTop from "./SharedPages/ScrollTOTop";
import AccountDetails from "./SharedPages/AccountDetails";
import Product from "./Pages/Product";
import Main from "./Layouts/Main";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "./features/cart/cartSlice";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const carts = localStorage.getItem("vicodinCart");
    if (carts) {
      const allProducts = JSON.parse(carts);
      dispatch(loadProducts(allProducts));
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, []);
  return isLoading ? (
    <div></div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />}></Route>

          {/* navbar about section */}
          <Route path="/about" element={<AboutNavBar></AboutNavBar>} />
          <Route path="/service" element={<ServicesNavbar></ServicesNavbar>} />
          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/wishlist" element={<Wishlist></Wishlist>} />

          {/* navbar about section */}

          {/* nabbar shop section */}
          <Route path="/shopgrid" element={<ShopGridNabBar></ShopGridNabBar>} />
          {/* nabbar shop section */}

          {/* navbar contact */}
          <Route path="/contact" element={<ContactNabVar></ContactNabVar>} />
          <Route
            path="/accountdetails"
            element={<AccountDetails></AccountDetails>}
          />
          {/* navbar contact */}

          <Route path="/products" element={<Product />} />

          {/* Product Details Show */}
          <Route
            path="/ProductDetails/:id"
            element={<ProductDetailsShowById></ProductDetailsShowById>}
          />
          {/* Product Details Show */}

          {/* Login and register */}

          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          {/* Login and register */}
        </Route>
      </Routes>

      <ScrollTOTop></ScrollTOTop>
    </BrowserRouter>
  );
}

export default App;

// #6d83df
