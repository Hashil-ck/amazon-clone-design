import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar,  SearchResults, ProductPage, Checkout, HomePage  } from "./Components";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;