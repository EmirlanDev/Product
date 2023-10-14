import React from "react";
import firstCart from ".././Information/firstCart.png";

const Information = () => {
  return (
    <section id="info">
      <div className="container">
        <div className="info">
          <div className="info--cartOne">
            <div className="info--cartOne--text">
              <h3>Effortless Validatio</h3>
              <h2>Management</h2>
              <p>
                The Myspace page defines the individual, his or her
                characteristics, traits, personal choices and the overall
                personality of the person.
              </p>
              <h4>Accessory makers</h4>
              <p>
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
            </div>
            <h4>Alterationists</h4>
            <p>
              If you are looking for a new way to promote your business that
              won't cost you more money,
            </p>
            <div className="info--cartOne--image">
              <img src={firstCart} alt="" />
            </div>
          </div>
          <div className="info--cartTwo"></div>
          <div className="info--cartThree"></div>
        </div>
      </div>
    </section>
  );
};

export default Information;
