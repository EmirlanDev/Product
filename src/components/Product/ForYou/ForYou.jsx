import React from "react";
import { useSelector } from "react-redux";
import cursor from ".././ForYou/cursor.svg";
import blue from ".././ForYou/blue.svg";
import heart from ".././ForYou/heart.svg";
import orange from ".././ForYou/orange.svg";
import Bg from ".././ForYou/Bg.png";
import Bg1 from ".././ForYou/Bg1.png";

const ForYou = () => {
  const { dark } = useSelector((s) => s);
  return (
    <section id="forYou">
      <div className="container">
        <div className="forYou">
          <h1 style={{ color: dark ? "#fff" : "" }}>
            Product was Built Specifically for You
          </h1>
          <div className="forYou--carts">
            <div className="forYou--carts--cart">
              <div className="forYou--carts--cart--icon">
                <img src={cursor} alt="cursor" />
              </div>
              <h2 style={{ color: dark ? "#fff" : "" }}>First click tests</h2>
              <p style={{ color: dark ? "#fff" : "" }}>
                While most people enjoy casino gambling,
              </p>
            </div>
            <div className="forYou--carts--cart">
              <div className="forYou--carts--cart--icon first">
                <img src={blue} alt="blue" />
              </div>
              <h2 style={{ color: dark ? "#fff" : "" }}>Design surveys</h2>
              <p style={{ color: dark ? "#fff" : "" }}>
                Sports betting, lottery and bingo playing for the fun
              </p>
            </div>
            <div className="forYou--carts--cart">
              <div className="forYou--carts--cart--icon second">
                <img src={heart} alt="heart" />
              </div>
              <h2 style={{ color: dark ? "#fff" : "" }}>Preference tests</h2>
              <p style={{ color: dark ? "#fff" : "" }}>
                The Myspace page defines the individual.
              </p>
            </div>
            <div className="forYou--carts--cart">
              <div className="forYou--carts--cart--icon third">
                <img src={orange} alt="orange" />
              </div>
              <h2 style={{ color: dark ? "#fff" : "" }}>Five second tests</h2>
              <p style={{ color: dark ? "#fff" : "" }}>
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <button>SIGN UP NOW</button>
        </div>
      </div>
      {dark ? (
        <img className="ten" src={Bg1} alt="BackgroundShadow" />
      ) : (
        <img className="ten" src={Bg} alt="BackgroundShadow" />
      )}
    </section>
  );
};

export default ForYou;
