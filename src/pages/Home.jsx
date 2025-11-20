import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
// import Price from "../components/Price";
import Navbar from "../components/Nav";
import Reviews from "../components/Reviews/ReviewComp";
import Footer from "../components/Footer";
import ClientLogoSwiper from "../components/ClientLogoSwiper";

import MainHero from "../components/MainHero";

function Home() {
  return (
    <div className="scroll-smooth">
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      <div>
        <MainHero />
      </div>

      <div id="about">
        <About />
      </div>

      <ClientLogoSwiper />

      <div className="" id="services">
        <Services />
      </div>

      <div>
        <Tools />
      </div>

      <section className="py-8">
        <div className="" id="portfolio">
          <Portfolio />
        </div>
      </section>

      {/* <div id="pricing">
        <Price />
      </div> */}

      <div id="reviews">
        <Reviews />
      </div>

      <div className="" id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
