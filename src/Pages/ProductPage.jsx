import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Product from "../components/ui/Product";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductSkeleton from "../components/ui/ProductSkeleton";
import ProductPageSkeleton from "../components/ProductPageSkeleton";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const { products, addToCart } = useContext(AppContext);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  async function fetchData() {
    try {
      const { data } = await axios.get(
        `https://ecommerce-samurai.up.railway.app/product/${id}`
      );
      const productData = data.data;
      setSelectedProduct(productData);
      setSelectedImage(productData.images[0]);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    if (selectedProduct && quantity > 0) {
      addToCart(selectedProduct, quantity);
    } else {
      console.error('Invalid product or quantity');
    }
  };

  return (
    <>
      <main className="products__main">
        <div className="container">
          <div className="row product-page__row">
            {loading ? (
              <ProductPageSkeleton />
            ) : (
              selectedProduct && (
                <>
                  <div className="selected-product">
                    <div className="selected-product__left">
                      <figure className="selected-product__img__wrapper">
                        <img
                          src={`https://ecommerce-samurai.up.railway.app/${selectedImage}`}
                          alt=""
                          className="selected-product__img"
                        />
                      </figure>
                      <div className="selected-product__img__options">
                        {selectedProduct.images.map((image, index) => (
                          <img
                            key={index}
                            src={`https://ecommerce-samurai.up.railway.app/${image}`}
                            alt=""
                            onClick={() => setSelectedImage(image)}
                            className="selected-product__img__option"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="selected-product__right">
                      <h1 className="selected-product__title">
                        {selectedProduct.name}
                      </h1>
                      <p className="selected-product__para">
                        {selectedProduct.description}
                      </p>
                      <div className="selected-product__quantity">
                        <span className="selected-product__quantity__span selected-product__quantity__span-1">
                          Quantity
                        </span>
                        <div className="selected-product__quantity__wrapper">
                          <button
                            className="selected-product__quantity__btn"
                            onClick={() =>
                              setQuantity((prevQuantity) =>
                                prevQuantity > 1
                                  ? prevQuantity - 1
                                  : prevQuantity
                              )
                            }
                          >
                            -
                          </button>
                          <button className="selected-product__quantity__amount">
                            {quantity}
                          </button>
                          <button
                            className="selected-product__quantity__btn"
                            onClick={() =>
                              setQuantity((prevQuantity) => prevQuantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="selected-product__quantity__span selected-product__quantity__span-2">
                          $ {selectedProduct.price * quantity}
                        </span>
                      </div>
                      <button className="selected-product__add" onClick={handleAddToCart}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="specifications">
                    <div className="spec">
                      <h2 className="spec__title">Weight</h2>
                      <span className="spec__detail">
                        {selectedProduct.weight}
                      </span>
                    </div>
                    <div className="spec">
                      <h2 className="spec__title">Texture</h2>
                      <span className="spec__detail">
                        {selectedProduct.texture}
                      </span>
                    </div>
                    <div className="spec">
                      <h2 className="spec__title">Size</h2>
                      <span className="spec__detail">
                        {selectedProduct.size}
                      </span>
                    </div>
                  </div>
                </>
              )
            )}
            <div className="recommendations">
              <h2 className="products__title">Trending now</h2>
              <div className="products__list">
                {products.length > 0 && selectedProduct
                  ? products
                      .filter((product) => product.id !== selectedProduct.id)
                      .slice(0, 4)
                      .map((product) => (
                        <Product product={product} key={product.id} />
                      ))
                  : new Array(4)
                      .fill(0)
                      .map((_, index) => <ProductSkeleton key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
