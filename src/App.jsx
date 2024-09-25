import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Homepage from "./pages/Homepage";
import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </ParallaxProvider>
    </BrowserRouter>
  );
};

export default App;
