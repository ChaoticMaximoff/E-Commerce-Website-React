import React, { useContext } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import {TextDirectionContext} from "../context/TextDirection";
export default function Header() {
  const {isEnglish, setIsEnglish} = useContext(TextDirectionContext);
  const countCartItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand" style={{ fontFamily: '"Jersey 10", sans-serif', fontSize: "35px" }}>Waku Waku Shop</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex justify-content-between w-100">
            <div>
              <Link className="nav-link" to="/">
                Products List
              </Link>
            </div>
            <div className="d-flex pe-3">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {isEnglish ? "EN" : "AR"}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"
                    onClick={() => setIsEnglish(true)}
                  >EN</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item"
                    onClick={() => setIsEnglish(false)}
                  href="#">AR</a></li>
                </ul>
              </li>
              <Link to="/cart" className="nav-link d-flex justify-content-evenly me-3 position-relative">
                <FontAwesomeIcon icon={faCartShopping} size="2x" />
                {countCartItems > 0 && (<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark bg-opacity-75">
                  {countCartItems}

                </span>)}
              </Link>
              <div className="nav-link me-3">
                Login
              </div>
              <Link to="/register" className="nav-link me-3">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
