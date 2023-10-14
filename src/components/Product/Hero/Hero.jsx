import React from "react";
import { useSelector } from "react-redux";
import heroImage from "../Hero/heroImage.png";
import watch from "../Hero/watch.svg";

const Hero = () => {
  const { dark } = useSelector((s) => s);
  return (
    <section id="product">
      <div className="container">
        <div className="product">
          <div className="product--text">
            <h1 style={{ color: dark ? "#fff" : "" }}>
              Work at the speed of thought
            </h1>
            <p style={{ color: dark ? "#fff" : "" }}>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="product--text--btns">
              <button>Get started</button>
              <button>
                <img src={watch} alt="watch" />
                Watch the Video
              </button>
            </div>
          </div>
          <div className="product--image">
            <img src={heroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
