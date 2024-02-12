import React, { useEffect } from "react";
import Banner from './Banner/Banner.js';
import Footer from '../../Footer/Footer.js';
import Header from '../../Header/Header.js';
import Launch from './Launch/Launch.js';
import Legionnetwork from './Legionnetwork/Legionnetwork.js';
import Token from './Token/Token.js';



function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* <Header /> */}
      {/* <Banner />
      <Launch />
      <Legionnetwork />
      <Token /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Landing;