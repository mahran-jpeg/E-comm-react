import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import Menu from "./ui/Menu";
import Cart from "./ui/Cart";
import NavLogo from "../assets/logo.png";
import ProductImg from "../assets/product-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Nav = () => {
  const[cartOpen,setCartOpen]=useState(false)
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <>
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen ={setMenuOpen}/>
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </>
  );
};

export default Nav;
