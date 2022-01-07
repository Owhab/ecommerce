import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import Slider from "./components/Slider/Slider";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import styled from "styled-components";
import { Newsletter } from "./components/Newsletter/Newsletter";

const Heading = styled.h1`
  align-items: center;
  text-align: center;
  padding: 30px;
`;

function App() {
  return (
    <div className="App">
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
}

export default App;
