import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BASE_URL = "https://hazaeldevs-portfolio.vercel.app/";

const portfolioItems = [
  {
    title: "Artist Kelle",
    text: "A responsive website for a visual artist featuring an artwork shop, commission request form with image uploads, and popup order modals — built for smooth client interaction across devices.",
    img: "/art-by-kelle.png",
    tools: ["UI Design", "Responsive Layout", "ReactJs", "Tailwind "],
    previewLink: "https://www.artistkelle.com/",
    repoLink: "https://github.com/AudiHazael/Kelle-Art",
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
    previewLink: "https://gadget-ecom-website.vercel.app/",
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

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const Portfolio = () => {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Haza’ElDevs Web Development Portfolio",
    description:
      "A collection of successful front-end development projects and designs built by Haza’ElDevs.",
    mainEntity: portfolioItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      description: item.text,
      url: item.previewLink,
      image: `${BASE_URL}${item.img}`,
      author: { "@type": "Person", name: "Haza’ElDevs" },
      keywords: item.tools.join(", "),
    })),
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-inherit text-gray-200 border-t border-gray-800"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.h6
          className="text-indigo-400 uppercase font-semibold mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          My Portfolio
        </motion.h6>

        <motion.h3
          className="text-3xl md:text-4xl font-bold text-zinc-50 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.2}
        >
          Check out some of my successful projects
        </motion.h3>

        {/* Portfolio Slider */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeUp}
          custom={0.4}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            {portfolioItems.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:border-indigo-400"
                  variants={fadeUp}
                  custom={i * 0.1}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-48 md:h-56 opacity-90 hover:opacity-100 transition"
                  />
                  <div className="p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-zinc-50">
                        {item.title}
                      </h4>
                      {item.collaborator && (
                        <>
                          <span className="text-sm text-stone-400">
                            – In collaboration with
                          </span>
                          <a
                            href={item.collaborator.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-300 hover:text-indigo-400 text-sm"
                          >
                            {item.collaborator.name}
                          </a>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-stone-200 mb-4 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.tools.map((tool, t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium text-zinc-100 border border-zinc-700 bg-zinc-800/40 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={item.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 transition"
                      >
                        {Icons.LinkIcon({ className: "w-4 h-4" })}
                        Live Demo
                      </a>
                      <a
                        href={item.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-stone-100 border border-indigo-500 hover:bg-indigo-400 hover:text-zinc-950 transition"
                      >
                        {Icons.Github({ className: "w-4 h-4" })}
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
