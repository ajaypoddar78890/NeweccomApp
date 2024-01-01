import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Form from "./Components/Form";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/product" element={<Product />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
