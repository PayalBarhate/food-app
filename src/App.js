import "./App.css";

import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup";
//  import Cart from './screens/Cart';
import { CartProvider } from "./component/ContextReducer";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

          {/* <Route exact path="/myorder" element={<MyOrder />} /> */}
        </Routes>
      </Router>
    </CartProvider>

    //  {/* </CartProvider> */}
  );
};

export default App;
