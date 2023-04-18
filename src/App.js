import "./App.scss";
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Register from "./pages/auth/Register";
import Shop from "./pages/shop/Shop";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/reset" element={<Reset/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
