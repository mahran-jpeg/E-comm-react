import React from "react";
import Product from "./ui/Product";
import ProductSkeleton from "./ui/ProductSkeleton";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const TrendingProjects = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className="container">
        <div className="row products__row">
          <h2 className="products__title">Trending Now</h2>
          <div className="products__list">
            {
              products.length > 0 ? products.slice(8,12).map(product => <Product product = {product} key={product.id}/>):
              new Array(4).fill(0).map((_,index)=> <ProductSkeleton key={index}/>)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProjects;
