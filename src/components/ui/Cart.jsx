import React, { useContext } from "react";
import EmptyCartImg from "../../assets/empty-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/AppContext";

const Cart = ({ cartOpen, setCartOpen }) => {
  const { cart = [], addToCart, reduceCartQuantity, removeFromCart } = useContext(AppContext);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className={`cart__wrapper ${cartOpen ? "cart-open" : ""}`}>
      <nav className="cart">
        <div className="cart__header">
          <h3 className="cart__header__title">Your Shopping Cart</h3>
          <button className="cart__header__close" onClick={() => setCartOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="cart__items">
          {cart.length > 0 ? 
            cart.map((item) => (
              <div className="cart__item" key={item.id}>
                <div className="cart__item__left">
                  <img 
                    src={item.images && item.images[0] ? `https://ecommerce-samurai.up.railway.app/${item.images[0]}` : EmptyCartImg} 
                    alt={item.name || "Cart item"} 
                    className="cart__item__img" 
                  />
                </div>
                <div className="cart__item__mid">
                  <h4 className="cart__item__title">{item.name}</h4>
                  <span className="cart__item__price">${(item.price * item.quantity).toFixed(2)}</span>
                  <div className="cart__item__quantity">
                    <button className="cart__item__quantity__btn" onClick={() => reduceCartQuantity(item)}>-</button>
                    <span className="cart__item__quantity__amount">{item.quantity}</span>
                    <button className="cart__item__quantity__btn" onClick={() => addToCart(item, 1)}>+</button>
                  </div>
                </div>
                <FontAwesomeIcon 
                  icon={faTimes} 
                  className="cart__item__remove" 
                  onClick={() => removeFromCart(item)} 
                />
              </div>
            )) 
          : 
            <div className="cart__empty">
              <img src={EmptyCartImg} alt="Empty cart" className="cart__empty__img" />
              <span className="cart__empty__text">Your cart is empty!</span>
              <button className="cart__empty__btn" onClick={() => setCartOpen(false)}>
                Keep Browsing
              </button>
            </div>
          }
        </div>
        {cart.length > 0 && (
          <div className="cart__footer">
            <div className="cart__footer__details">
              <h4 className="cart__footer__title">Subtotal</h4>
              <span className="cart__footer__subtotal">${calculateSubtotal()}</span>
            </div>
            <button className="cart__footer__btn" onClick={() => alert("Haven't implemented this feature yet!")}>
              Go to checkout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Cart;
