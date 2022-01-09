import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Announcement/Announcement";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Newsletter } from "../Newsletter/Newsletter";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

const Heading = styled.h1`
  align-items: center;
  text-align: center;
  padding: 30px;
`;

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Header></Header>
      <Slider></Slider>
      <Heading>Categories</Heading>
      <Categories></Categories>
      <Heading>Popular Products</Heading>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
