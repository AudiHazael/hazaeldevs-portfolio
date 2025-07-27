import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Icons } from "./Icons";

import "../Styles/Styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const portfolioItems = [
  {
    title: "WealthWave",
    text: "A web platform designed to educate users on financial growth and investment strategies. WealthWave provides insights, tools, and resources to help users make smarter financial decisions. I developed the frontend interface that communicates trust, clarity.",
    img: "/Wealthwave.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Bootstrap"],
    previewLink: "https://wealth-wave-kappa.vercel.app/",
    repoLink: "https://github.com/AudiHazael/WealthWave",
  },
  {
    title: "Soy-Joy",
    text: "A modern landing page for a health-conscious soy milk brand. I designed and developed a responsive website for SoyJoy, a startup focused on natural soy milk products. The site highlights the product’s health benefits, tells the brand story.",
    img: "/soyjoy.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Bootstrap"],
    previewLink: "https://soy-joy.vercel.app/",
    repoLink: "https://github.com/AudiHazael/soy-joy",
  },
  {
    title: "Extensive Academy ",
    text: "In collaboration with Codemax, I contributed to designing and developing the frontend interface of this educational platform. The goal was to build a clean, accessible, and responsive website that appeals to parents, students, and educators.",
    img: "/Extensive (1).png",
    tools: ["ReactJs", "Tailwind"],
    previewLink: "https://academy-web-oasis.vercel.app/",
    repoLink: "#",
    collaborator: {
      text: "In collaboration with",
      name: "CodeMax",
      link: "https://preciousamos.dev",
    },
  },
  {
    title: "Luxor",
    text: "A bold and elegant digital presence for a premium watch brand. For Luxor, I crafted a stylish landing page that reflects the premium nature of the brand. The site features high-end visuals, product highlights, and smooth scroll animations to impress visitors and reflect luxury.",
    img: "/Luxor.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Bootstrap"],
    previewLink: "https://luxor-seven.vercel.app/",
    repoLink: "https://github.com/AudiHazael/Luxor",
  },
  {
    title: "Haza'ElDevs Store",
    text: "A sleek and user-friendly interface for a modern gadget store. This is a fully responsive frontend interface for an electronics store. It features product listings, filterable categories, a dynamic cart, and reusable components to ensure scalability.",
    img: "/ecom.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Tailwind"],
    previewLink: "https://i4-dt.vercel.app/",
    repoLink: "../pages/Error.jsx",
  },
  {
    title: "i4DT",
    text: "i4DT is a volunteer-driven initiative where we teach tech-related skills to students. I built a clean, informative landing page that showcases our mission and allows interested learners to sign up through an embedded Google Form. It’s mobile-optimized and community-focused.",
    img: "/i4dt.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Tailwind"],
    previewLink: "https://i4-dt.vercel.app/",
    repoLink: "../pages/Error.jsx",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full px-0 sm:px-4 mx-auto md:max-w-7xl">
      <h6
        className="mb-2 font-semibold text-indigo-400 uppercase px-4"
        data-aos="fade-in"
        data-aos-delay="300">
        My Portfolio
      </h6>
      <h3
        className="mb-6 text-2xl font-bold md:text-3xl text-zinc-50 px-4"
        data-aos="fade-in"
        data-aos-delay="600">
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
        data-aos-delay="900">
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full overflow-hidden transition-transform duration-300 rounded-md shadow-md dark:bg-gray-800/80 backdrop-blur-lg hover:-translate-y-1">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-48"
              />
              <div className="p-4 text-left">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-zinc-50">
                    {item.title}
                  </h4>
                  {item.collaborator && (
                    <>
                      <span className="text-[12px] md:text-base text-stone-300">
                        – In collaboration with
                      </span>
                      <a
                        href={item.collaborator.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] md:text-base text-indigo-200 hover:text-indigo-400">
                        {item.collaborator.name}
                      </a>
                    </>
                  )}
                </div>

                <p className="mb-4 text-[12px] text-gray-600 dark:text-stone-100">
                  {item.text}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tools?.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-zinc-50 uppercase shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 rounded-lg">
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
