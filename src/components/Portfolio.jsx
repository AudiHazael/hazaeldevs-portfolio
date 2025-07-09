import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Icons } from "./Icons";

import "../Styles/Styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Example portfolio items
const portfolioItems = [
  {
    title: "WealthWave",
    text: "An investment platform dashboard designed for tracking portfolios in real-time.",
    img: "/Wealthwave.png",
    tools: ["React", "Tailwind", "Chart.js", "Vite", "AOS"],
    previewLink: "https://wealth-wave-kappa.vercel.app/",
    repoLink: "https://github.com/AudiHazael/WealthWave",
  },
  {
    title: "Soy-Joy",
    text: "E-commerce site for a soy milk brand with responsive UI and product cart features.",
    img: "/soyjoy.png",
    tools: ["React", "Tailwind", "Chart.js", "Vite", "AOS"],
    previewLink: "https://soy-joy.vercel.app/",
    repoLink: "https://github.com/AudiHazael/soy-joy",
  },
  {
    title: "Extensive Academy",
    text: "A modern website for an educational institute with login and learning dashboard.",
    img: "/Extensive (1).png",
    tools: ["React", "Tailwind", "Chart.js", "Vite", "AOS"],
    previewLink: "https://academy-web-oasis.vercel.app/",
    repoLink: "#",
  },
  {
    title: "Luxor",
    text: "Coming soon placeholder for a new development project.",
    img: "/Luxor.png",
    tools: ["React", "Tailwind", "Chart.js", "Vite", "AOS"],
    previewLink: "https://luxor-seven.vercel.app/",
    repoLink: "https://github.com/AudiHazael/Luxor",
  },
  {
    title: "Project Five",
    text: "Coming soon placeholder for a new UI/UX concept. Just added this to make it longer.",
    img: "https://placehold.co/400x200",
    tools: ["React", "Tailwind", "Chart.js", "Vite", "AOS"],
    previewLink: "#",
    repoLink: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full px-0 sm:px-4 mx-auto my-12 md:max-w-7xl">
      <h6
        className="mb-2 font-semibold text-indigo-400 uppercase px-4"
        data-aos="fade-in"
        data-aos-delay="800">
        My Portfolio
      </h6>
      <h3
        className="mb-6 text-2xl font-bold md:text-3xl text-zinc-50 px-4"
        data-aos="fade-in"
        data-aos-delay="1500">
        Check out some of my successful projects
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        className="w-full px-4"
        data-aos="fade-in"
        data-aos-delay="2000">
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full overflow-hidden transition-transform duration-300 rounded-md shadow-md dark:bg-gray-800/80 backdrop-blur-lg hover:-translate-y-1">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-left">
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-zinc-50">
                  {item.title}
                </h4>
                <p className="mb-4 text-sm text-gray-600 dark:text-stone-100">
                  {item.text}
                </p>

                {/* Tools Section */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tools?.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-zinc-50 uppercaseshadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href={item.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm w-auto flex justify-center gap-3 font-medium text-white bg-gradient-to-r from-zinc-950 via-indigo-950 to-zinc-950 rounded hover:bg-blue-700">
                    {Icons.LinkIcon({ className: "w-4 h-4 pt-1" })}
                    Live Demo
                  </a>
                  <a
                    href={item.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm w-auto flex justify-center gap-3 font-medium text-stone-100 border border-indigo-800 px-6 py-2 rounded-md hover:bg-indigo-400 hover:text-zinc-950 transition">
                    {Icons.Github({ className: "w-4 h-4 pt-1" })}
                    Code
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
