import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <section
        data-aos="fade-in"
        data-aos-delay="500"
        className="w-full max-w-md p-6 text-center text-white border shadow-lg rounded-xl backdrop-blur-md bg-white/10 border-white/20"
      >
        <div className="flex flex-col items-center gap-4">
          <img src="" alt="" className="w-24 h-24" />
          <h4 className="text-xl font-semibold">We're Sorry!</h4>
          <p className="text-lg leading-relaxed">
            HazaelDevs Website is still <br />
            Under Construction
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            If you still wish to have a peek at what <br /> we're building,
          </p>
          <Link
            to="/home"
            className="inline-block px-6 py-2 mt-4 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Click Here !!!
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Temporary;
