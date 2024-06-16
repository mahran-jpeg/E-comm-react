import React from 'react';
import NavLogo from "../../assets/logo.png";
import ProductImg from "../../assets/product-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { Link } from 'react-router-dom';
const Navbar = ({setCartOpen,setMenuOpen}) => {
  return (
  <>
  <nav className="nav">
        <div className="nav__container">
          <Link to = "/">
            <img src={NavLogo} alt="" className="nav__logo" />
          </Link>
          <div className="nav__links">
            <Link to = "/products" className="nav__link">
              Products
            </Link>
            <button className="nav__cart" onClick={()=>setCartOpen(true)}>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="nav__cart__icon"
              />
           
            </button>
            <button className="nav__menu"onClick={()=>setMenuOpen(true)} >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
  </>
  );
}

export default Navbar;
