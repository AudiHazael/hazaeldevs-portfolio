import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/styles.scss";
import "../styles/temporary.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Temporary() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#000",
        height: "100vh",
        width: "100vw",
      }}>
      <section
        className="Temp d-flex flex-column justify-content-center align-items-center text-center"
        data-aos="fade-in"
        data-aos-delay="500"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          color: "white",
        }}>
        <div className="container">
          <img src="" alt="" />
          <h4>We're Sorry!</h4>
          <p>
            HazaelDevs Website is still <br />
            Under Construction
          </p>
          <p className="small">
            If you still wish to have a peek at what <br /> we're building,
          </p>
          <Link className="btn" to="./Home">
            Click Here !!!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Temporary;
