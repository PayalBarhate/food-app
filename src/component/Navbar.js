import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import Cart from "../screens/Cart";
//import Cart from '../screens/Cart';
// import Cart from "../screens/Cart";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigation("/login");
  };
  // const handleLogout1 = ()=>{
  //   navigation("/")
  // }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            24TimeFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {!localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {localStorage.getItem("authToken") ? (
              <div className="d-flex ">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-1 "
                  to="/creatuser"
                >
                  signup
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  My Cart{""}
                  <Badge pill bg="danger">
                    2
                  </Badge>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />{" "}
                  </Modal>
                ) : null}
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
