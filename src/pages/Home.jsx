import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

import Portfolio from "../components/Portfolio";
import Form from "../components/Form";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>HazaelDevs</title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Business",
        "name": "HazaelDevs",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 15, Jesus Avenue",
          "addressLocality": "Simawa",
          "addressRegion": "Ogun",
          "postalCode": "121101",
          "addressCountry": "NG"
        },
        "telephone": "+2347039404909",
        "url": "",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "20"
        }
      }
    `}
        </script>
      </Helmet>

      <Navbar data-aos="fade-in" />

      <section className="hero" data-aos="fade-up">
        <div className="container text-light">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h2>Hi, I am Hazael Audi</h2>
                <h1>UI designer and a Front-End Developer</h1>
                <a
                  href="https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  Hire Me
                </a>
              </div>

              <div className="carousel-item">
                <h1 className="">
                  Launch your with a website that stands out from the crowd
                </h1>
                <p className="">
                  Create custom websites that perfectly match your brand's
                  identity.
                </p>
                <a
                  href="https://wa.me/2347039404909?text=Hello%20HazaelDevs!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary">
                  Contact Me !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about pt-4 pb-4"
        data-aos="fade-up"
        data-aos-delay="800">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <img src="/" alt="image-of-hazael-audi" />
            </div>
            <div className="col-md-6 col-12">
              <h6>My Bio</h6>
              <h3>A Freelance UI Designer and Frontend Developer</h3>
              <p>
                My interest in user interfaces and the desire to create
                user-centric solutions sparked my interest in design. I have
                honed my skills in creating visually appeaning designs that not
                only captivates, but also inprove user interactions. <br />
                <br />
                Consequently, as a frontend developer, I bring these designs to
                life by weaving the fabric of functionality and aesthetics
                together. I believe in the power of code to turn abstract
                concepts into tangible, interactive experiences that leaves an
                impression.
              </p>
              <h5>CEO, HazaelDevs | Audi Hazael</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="services pt-4 pb-4">
        <div className="container">
          <h6>My Services</h6>
          <h3>Professional UI Design and Development Services</h3>
          <div
            className="row justify-content-center align-irens-center"
            data-aos="fade-left">
            <div className="col-md-4 col-12 image">
              <img src="" alt="image-for-ui-design" />
            </div>
            <div
              className="col-md-7 col-12 shadow-sm text"
              data-aos="fade-left"
              data-aos-delay="800">
              <h4>User Interface (UI) Design</h4>
              <p>
                I specialize in visually appealing and user-centered
                experiences. My approach revolves around understanding user
                needs, and seamlessly translating them into elegant design
                solutions, from the initial concept to the final product. <br />
                <br /> I strve to create interfaces that not only engage users,
                but also improve theri overall digital journey through a
                meticulous blend of aesthetics andfunctionality. Each design is
                a meticulously crafted work of art with the goal of leaving a
                lasting impression and providing a ddelightful user experience
              </p>
            </div>
          </div>
          <div
            className="row justify-content-center align-irens-center"
            data-aos="fade-right">
            <div
              className="col-md-7 col-12 shadow-sm text"
              data-aos="fade-right"
              data-aos-delay="800">
              <h4>Frontend Development</h4>
              <p>
                With precision and functionality, I bring designs to life. I
                convert static visuals into dynamic, interactive interfaces with
                ReactJS, adhering to industry best practices. <br />
                <br /> My experience includes developing responsive and scalable
                user interface (UI) components that ensure consistent user
                experience acrossmultiple devices and platforms. I navigate the
                complexities of development to deliver polished and
                user-friendly interfaces that stand the test of technological
                evolution, with a focus on clean code and optimal performance
              </p>
            </div>
            <div className="col-md-4 col-12 image">
              <img src="" alt="image-of-front-end-development" />
            </div>
          </div>
        </div>
      </section>

      <section className="tools pt-4 pb-5">
        <div className="container d-flex justify-content-center align-items-center">
          <div data-aos="fade-right" data-aos-delay="">
            <FaFigma
              fontSize="6rem"
              color="#f24e1e"
              className="ps-4 pe-4"
              data-aos="fade-right"
              data-aos-delay=""
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="500">
            <FaReact fontSize="6rem" color="#61dafb" className="ps-4 pe-4" />
          </div>
          <div data-aos="fade-down" data-aos-delay="700">
            <FaSass fontSize="6rem" color="#cd6799" className="ps-4 pe-4" />
          </div>
          <div data-aos="fade-left" data-aos-delay="900">
            <FaBootstrap
              fontSize="6rem"
              color="#7952b3"
              className="ps-4 pe-4"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="1000">
            <FaGithub fontSize="6rem" color="#181717" className="ps-4 pe-4" />
          </div>
        </div>
      </section>

      <section
        className="portfolio pt-4 pb-4"
        data-aos="fade-in"
        data-aos-delay="700">
        <div className="container">
          <h6>My Portfolio</h6>
          <h3>Check out some of my successful projects</h3>
          <Portfolio />
        </div>
      </section>

      <section
        className="blog pt-4 pb-4"
        data-aos="fade-in"
        data-aos-delay="500">
        <div className="container">
          <h6>My Blog</h6>
          <p>
            From practical tips to creative inspirations, each entry provides a
            unique perspective, resulting in a knowledge hub for enthusiasts,
            learners, and fellow creators alike.
          </p>
        </div>
      </section>

      <section className="contact" data-aos="fade-in" data-aos-delay="500">
        <div className="container">
          <h6>Contact Me</h6>
          <h4>Reach Out - Let's Create Together</h4>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-12 ps-3 d-flex flex-column justify-content-center aligh-items-center">
              <p>
                Do you want to transform your ideas into memorable experiences?
                I am here to listen, collaborate, and help you realize your
                vision. Reach out today and let's embark on a creative and
                successful journey together.
              </p>
              <div className="d-flex mt-5">
                <FaEnvelope fontSize="3rem" color="#181717" className="pe-4" />
                <p>
                  Plot 15, Jesus Avenue, Simawa, Lukosi, <br /> Sagamu, Ogun
                  State
                </p>
              </div>
              <div className="d-flex">
                <FaPhoneAlt fontSize="3rem" color="#181717" className="pe-4" />
                <p className="pt-2">+234 703 940 4909</p>
              </div>
              <div className="d-flex">
                <FaMapMarkerAlt
                  fontSize="3rem"
                  color="#181717"
                  className="pe-4"
                />
                <p className="pt-2">hazaeldevs@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
