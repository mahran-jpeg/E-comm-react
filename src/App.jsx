import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Banner1 from "./components/Banner1";
import TrendingProjects from "./components/TrendingProjects";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import Banner2 from "./components/Banner2";
import Newsletter from "./components/Newsletter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios.get(
      "https://ecommerce-samurai.up.railway.app/product"
    );

    const productsData = data.data;
    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ products }}>
      <Router>
        <Nav/>
      
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path="/products/1"element={<ProductPage/>}/>
        </Routes>
        <Newsletter/>
        <Footer/>
        {/* <Nav />
       
        <Newsletter /> */}
      </Router>
    </AppContext.Provider>
  );
}

export default App;
