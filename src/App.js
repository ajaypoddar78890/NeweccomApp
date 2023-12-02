import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
