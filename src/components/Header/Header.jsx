import React, { useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";

import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  // redux data use Selector total quantity
  const totlaQuantity = useSelector((state) => state.cart.totlaQuantity);
  // ==> header menu
  const menuRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stick__header");
      } else {
        headerRef.current.classList.remove("stick__header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  // => menu
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  // navigate To Cart
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  // useAuth
  const { currentUser } = useAuth();
  // ==> firebase
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // profile active ref
  const profileActiveRef = useRef(null);
  const toggleProfileActive = () =>
    profileActiveRef.current.classList.toggle("show__profileActive");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        {/* <Row> */}
        {/* pearent */}
        <div className="nav__wrapper">
          {/*==>start start */}
          <div className="logo">
            <img src={Logo} alt="logo" />

            <Link to="/home" className="title">
              MultiShop
            </Link>
          </div>
          {/*==>end start */}
          {/* start center */}
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* end center */}
          {/* start end */}
          <div className="nav__icons">
            <span className="fav__icon">
              <i className="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="cart__icon" onClick={navigateToCart}>
              <i className="ri-shopping-bag-line"></i>
              <span className="badge">{totlaQuantity}</span>
            </span>
            <div className="proifle">
              <motion.img
                whileTap={{ scale: 1.2 }}
                src={currentUser ? currentUser.photoURL : userIcon}
                alt="userIcon"
                onClick={toggleProfileActive}
              />
              <div
                className="profile__actions"
                ref={profileActiveRef}
                onClick={toggleProfileActive}
              >
                {currentUser ? (
                  <span onClick={logout}>Logout</span>
                ) : (
                  <div className="d-flex align-items-center justify-content-center flex-column">
                    <Link to="/signup"> Signup</Link>
                    <Link to="/login"> Login</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="mobile__menu">
              <span onClick={menuToggle}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
          {/* end end */}
        </div>
        {/* </Row> */}
      </Container>
    </header>
  );
};

export default Header;
