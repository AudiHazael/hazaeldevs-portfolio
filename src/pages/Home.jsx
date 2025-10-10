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

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <div className="scroll-smooth">
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-stretch">
        <div className="md:col-span-6 relative py-20 h-full">
          <Hero />
        </div>
        <div className="md:col-span-6 h-full">
          <About />
        </div>
      </div>

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
