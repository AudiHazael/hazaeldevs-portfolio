import React from "react";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="socials d-fex flex-column justify-content-center align-items-center">
            <FaFacebook fontSize="3rem" color="#181717" className="pe-4" />
            <FaGithub fontSize="3rem" color="#181717" className="pe-4" />
            <FaWhatsapp fontSize="3rem" color="#181717" className="pe-4" />
            <FaInstagram fontSize="3rem" color="#181717" className="pe-4" />
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 col-12">
              <img src="" alt="logo-image" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ex
                aut incidunt ipsa consequuntur dignissimos aliquid, distinctio
                natus veniam illo.
              </p>
            </div>
            <div className="col-md-4 col-12 flex-column">
              <ul>
                <li>
                  <a href="">Lorem ipsum</a>
                </li>
                <li>
                  <a href="">Lorem ipsum</a>
                </li>
                <li>
                  <a href="">Lorem ipsum</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <div className="d-flex">
                <FaEnvelope fontSize="3rem" color="#f5f5f5" className="pe-4" />
                <p>
                  Plot 15, Jesus Avenue, Simawa, Lukosi, <br /> Sagamu, Ogun
                  State
                </p>
              </div>
              <div className="d-flex">
                <FaPhoneAlt fontSize="3rem" color="#f5f5f5" className="pe-4" />
                <p className="pt-2">+234 703 940 4909</p>
              </div>
              <div className="d-flex">
                <FaMapMarkerAlt
                  fontSize="3rem"
                  color="#f5f5f5"
                  className="pe-4"
                />
                <p className="pt-2">hazaeldevs@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="copyright p-0 m-0 d-flex justify-content-center">
            <p className="">
              © Copyrights 2025 HazaElDevs | Designed by{" "}
              <a href="https://wa.link/8k0f7s" target="_blank" rel="nofollow">
                Hazael Audi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
