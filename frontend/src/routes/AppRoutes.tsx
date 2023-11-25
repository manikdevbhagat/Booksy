import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Authors from "../pages/Authors";
import BookDetails from "../pages/BookDetails";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;