import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StripeContainer from "./components/Stripe/StripeContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";

import Cart from "./pages/Cart/Cart";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products/:category" element={<ProductList />} />

                <Route path="/product/:id" element={<Product />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/checkout" element={<StripeContainer />} />
            </Routes>
        </Router>
    );
};

export default App;
