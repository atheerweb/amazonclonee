import Home from "./views/Home";
import ProductsList  from "./views/ProductList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Nav */}
        <Nav />
        <Routes>
          {/*home */}
          <Route path="/" element={<Home />} />
          <Route path="/productslist" element={<ProductsList />} />
        </Routes>
        {/*Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
