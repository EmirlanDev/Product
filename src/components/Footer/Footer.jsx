import React from "react";
import logo from ".././Header/logo.svg";
import inst from ".././Footer/inst.svg";
import faceb from ".././Footer/faceb.svg";
import twit from ".././Footer/twit.svg";
import { useSelector } from "react-redux";

const Footer = () => {
  const { dark } = useSelector((s) => s);

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--body">
            <div className="footer--body--logoIcon">
              <div className="footer--body--logoIcon--logo">
                <img src={logo} alt="logo" />
                <h1 style={{ color: dark ? "#fff" : "#173a56" }}>Product</h1>
              </div>
              <div className="footer--body--logoIcon--icon">
                <img src={inst} alt="inst" />
                <img src={faceb} alt="faceb" />
                <img src={twit} alt="twit" />
              </div>
            </div>
            <ul className="footer--body--resource">
              <li style={{ color: dark ? "#fff" : "" }}>Resource</li>
              <li style={{ color: dark ? "#fff" : "" }}>About Us</li>
              <li style={{ color: dark ? "#fff" : "" }}>Blog</li>
              <li style={{ color: dark ? "#fff" : "" }}>Contact</li>
              <li style={{ color: dark ? "#fff" : "" }}>FAQ</li>
            </ul>
            <ul className="footer--body--legalStuff">
              <li style={{ color: dark ? "#fff" : "" }}>Legal Stuff</li>
              <li style={{ color: dark ? "#fff" : "" }}>Disclaimer</li>
              <li style={{ color: dark ? "#fff" : "" }}>Financing</li>
              <li style={{ color: dark ? "#fff" : "" }}>Privacy Policy</li>
              <li style={{ color: dark ? "#fff" : "" }}>Terms of Service</li>
            </ul>
            <div className="footer--body--signUpNow">
              <h2 style={{ color: dark ? "#fff" : "" }}>
                knowing you're always on the best energy deal.
              </h2>
              <div>
                <input type="text" />
              </div>
              <button>Sign up Now</button>
            </div>
          </div>
          <h4 style={{ color: dark ? "#fff" : "" }}>
            Made With Love By Figmaland All Right Reserved
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
