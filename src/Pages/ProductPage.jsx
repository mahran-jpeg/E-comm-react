import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProductPage = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <main className="products__main">
        <div className="container">
          <div className="row product-page__row">
            <div className="selected-product">
              <div className="selected-product__left">
                <figure className="selected-product__img__wrapper">
                  <img
                    src={`https://ecommerce-samurai.up.railway.app/${products[0]?.images[0]}`}
                    alt=""
                    className="selected-product__img"
                  />
                </figure>
                <div className="selected__product__img__options">
                  {
                    products[0]?.images.map((image)=>(
                      <img src={`https://ecommerce-samurai.up.railway.app/${image}`}
                       alt="" className="selected-product__img__option" />
                    ))
                  }
                </div>
              </div>
              <div className="selected-product__right">
                <h1 className="selected-product__title">
                  {products[0]?.name}
                </h1>
                <p className="selected-product__paragraph">
                  {products[0]?.description}
                </p>
                <div className="selected-product__quantity">
                  <span className="selected-product__quantity__span
                  selected-product__quantity__span-1
                  "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
