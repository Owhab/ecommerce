import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Announcement from "./components/Announcement/Announcement";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import { SingleProduct } from "./components/SingleProduct/SingleProduct";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
