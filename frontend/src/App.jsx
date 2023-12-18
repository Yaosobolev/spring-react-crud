import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./users/AddProduct";
import EditProduct from "./users/EditProduct";
import ViewProduct from "./users/ViewProduct";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
          <Route exact path="/viewproduct/:id" element={<ViewProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
