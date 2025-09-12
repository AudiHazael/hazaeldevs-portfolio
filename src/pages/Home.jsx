import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Tools from "../components/Tools";
import Portfolio from "../components/Portfolio";
import Price from "../components/Price";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="scroll-smooth">
      <section>
        <div>
          <Navbar
            data-aos="fade-in"
            data-aos-delay="600"
            data-aos-duration="500"
          />
        </div>
      </section>

      <div className="" id="" data-aos="fade-up" data-aos-delay="">
        <Hero />
      </div>

      {/* <div className="" id="about">
        <About />
      </div> */}

      <div className="" id="services">
        <Services />
      </div>

      <div>
        <Tools />
      </div>

      <section
        className="py-8 text-gray-800"
        data-aos="fade-in"
        data-aos-delay="700"
      >
        <div className="" id="portfolio">
          <Portfolio />
        </div>
      </section>

      <div id="pricing">
        <Price />
      </div>

      <div className="" id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
