
import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <>
      <section className="mainbanner">
        <div className="custom-container">
          <div className="parenttext">
            <h2>Launch your project with Legion</h2>
            <p>Secure early access to meticulously selected Web3 projects, trusted and endorsed by top-tier industry leaders.</p>
            <button>Apply for listing</button>
          </div>
        </div>
        <section className="box">
          <div className="parentbox">
            <div className="parenttext1">
              <div className="mainhead">
                <h3>108</h3>
                <p>PROJECTS LAUNCHED</p>
              </div>
              <div className="mainhead">
                <h3>108</h3>
                <p>PROJECTS LAUNCHED</p>
              </div>
              <div className="mainhead">
                <h3>108</h3>
                <p>PROJECTS LAUNCHED</p>
              </div>
              <div className="mainhead">
                <h3>108</h3>
                <p>PROJECTS LAUNCHED</p>
              </div>
            </div>

          </div>
        </section>
      </section>
    </>
  );
};

export default Banner;
