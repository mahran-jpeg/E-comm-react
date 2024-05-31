import React from "react";
import Product from "./ui/Product";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import ProductSkeleton from "./ui/ProductSkeleton";
const Products = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <section id="products">
        <div className="container">
          <div className="row products__row">
            <h2 className="products__title">Products we are proud of</h2>
            <div className="products__list">
              {products.length > 0
                ? products
                    .slice(0, 8)
                    .map((product) => (
                      <Product product={product} key={product.id} />
                    ))
                : new Array(8).fill(1).map((_,index) => <ProductSkeleton key={index}/>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
