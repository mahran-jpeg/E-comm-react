import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import Banner1 from "../components/Banner1";
import TrendingProjects from "../components/TrendingProjects";
import Banner2 from "../components/Banner2";

const HomePage = () => {
  return (
    <>
      <Header />
      <Products />
      <Banner1 />
      <TrendingProjects />
      <Banner2 />
    </>
  );
};

export default HomePage;
