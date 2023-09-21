import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/ProductCatalog";
import classes from "./styles/product.module.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={classes.container}>
      <Navbar />
      <Router>
        <Routes>
          <Route element={<ProductCatalog />} path="/products"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
