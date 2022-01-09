import styled from "styled-components";
import "./App.css";
import Announcement from "./components/Announcement/Announcement";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList></ProductList>
    </div>
  );
}

export default App;
