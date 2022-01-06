import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Announcement></Announcement>
      <Header></Header>
      <Slider></Slider>
    </div>
  );
}

export default App;
