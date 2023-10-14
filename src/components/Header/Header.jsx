import React, { useState } from "react";
import logo from ".././Header/logo.svg";
import burger from ".././Header/burger.svg";
import burgerWhite from ".././Header/burgerWhite.svg";
import darkMode from ".././Header/darkMode.svg";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode } from "../../redux/actions";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { dark } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [menuBurger, setMenuBurger] = useState(false);
  const [modal, setModal] = useState("header--navigation--burgerMenu close");
  // console.log(menuBurger);
  // console.log(dark);

  function addData() {
    let obj = {
      dark: dark,
    };
    let data = JSON.parse(localStorage.getItem("dark_mode")) || [];
    data.push(obj);
    localStorage.setItem("dark_mode", JSON.stringify(data));

    dispatch(DarkMode(dark));
  }
  // console.log(dark);

  function Change() {
    menuBurger
      ? setModal("header--navigation--burgerMenu open")
      : setModal("header--navigation--burgerMenu close");
    setMenuBurger(!menuBurger);
  }

  console.log(menuBurger);

  return (
    <header
      style={{ background: dark ? "#1F2E35" : "#fff", transition: "0.5s" }}
      id="header"
    >
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img src={logo} alt="logo" />
            <h1 style={{ color: dark ? "#fff" : "#173a56" }}>Product</h1>
          </div>
          <div className="header--navigation">
            <nav className="header--navigation--nav">
              <NavLink to="/">
                <li style={{ color: dark ? "#fff" : "#173a56" }}>Product</li>
              </NavLink>
              <NavLink>
                <li style={{ color: dark ? "#fff" : "#173a56" }}>Customers</li>
              </NavLink>
              <NavLink>
                <li style={{ color: dark ? "#fff" : "#173a56" }}>Pricing</li>
              </NavLink>
              <NavLink to="/resourse">
                <li style={{ color: dark ? "#fff" : "#173a56" }}>Resources</li>
              </NavLink>
            </nav>
            <div className="header--navigation--btns">
              <button style={{ color: dark ? "#fff" : "#173a56" }}>
                Sign In
              </button>
              <button>Sign Up</button>
              <div onClick={() => dispatch(DarkMode(dark))}>
                <img src={darkMode} alt="darkMode" />
              </div>
            </div>
            <div
              onClick={() => Change()}
              className="header--navigation--burger"
            >
              {dark ? (
                <img src={burgerWhite} alt="burgerWhite" />
              ) : (
                <img src={burger} alt="burger" />
              )}
            </div>
            <div className={modal}>
              <div className="container">
                <div className="tail">
                  <nav className="header--navigation--burgerMenu--nav">
                    <NavLink to="/">
                      <li>Product</li>
                    </NavLink>
                    <NavLink>
                      <li>Customers</li>
                    </NavLink>
                    <NavLink>
                      <li>Pricing</li>
                    </NavLink>
                    <NavLink to="/resourse">
                      <li>Resources</li>
                    </NavLink>
                  </nav>
                  <div className="header--navigation--burgerMenu--btns">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                    <div onClick={() => addData()}>
                      <img src={darkMode} alt="darkMode" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
