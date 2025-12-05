import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BASE_URL = "https://hazaeldevs.com/";

const portfolioItems = [
  {
    title: "Artist Kelle",
    text: "Artist Kelle needed a platform to showcase artwork, handle commission requests, and manage orders without confusing clients. I built a responsive website with a clear gallery structure, simple enquiry flow, and mobile-friendly ordering experience.",
    img: "/art-by-kelle.png",
    tools: [],
    previewLink: "https://www.artistkelle.com/",
    repoLink: "https://github.com/AudiHazael/Kelle-Art",
  },
  {
    title: "Karez Nigeria Limited",
    text: "A modern, responsive website built for Karez Nigeria, an automotive service company that offers repair, diagnostics, and maintenance solutions — all designed to build trust and convert visitors into customers.",
    img: "/karez-nigeria.png",
    tools: [],
    previewLink: "https://www.kareznigeria.com/",
    repoLink: "/",
  },
  {
    title: "Soy-Joy",
    text: "Soy-Joy required a simple product-focused website to introduce their brand and communicate their values clearly. I designed and developed a clean landing page that presents the product, highlights key information, and works reliably across devices.",
    img: "/soyjoy.png",
    tools: [],
    previewLink: "https://soy-joy.vercel.app/",
    repoLink: "https://github.com/AudiHazael/soy-joy",
  },
  {
    title: "Extensive Academy",
    text: "Working alongside Codemax, I contributed to the frontend development of an educational platform. My role focused on translating designs into a responsive, accessible interface suitable for students and administrators.",
    img: "/Extensive (1).png",
    tools: [],
    previewLink: "https://academy-web-oasis.vercel.app/",
    repoLink: "#",
    collaborator: {
      name: "CodeMax",
      link: "https://preciousamos.dev",
    },
  },
  {
    title: "Luxor",
    text: "A bold and elegant digital presence for a premium watch brand. For Luxor, I crafted a stylish landing page that reflects the premium nature of the brand.",
    img: "/Luxor.png",
    tools: [],
    previewLink: "https://luxor-seven.vercel.app/",
    repoLink: "https://github.com/AudiHazael/Luxor",
  },
  {
    title: "Haza'ElDevs Store",
    text: "A sleek and user-friendly interface for a modern gadget store. This is a fully responsive frontend interface featuring product listings, filterable categories, a dynamic cart, and reusable components for scalability.",
    img: "/ecom.png",
    tools: [],
    previewLink: "https://gadget-ecom-website.vercel.app/",
    repoLink: "#",
  },
  {
    title: "i4DT",
    text: "i4DT is a volunteer-driven initiative where we teach tech-related skills to students. I built a clean, informative landing page that showcases our mission and allows interested learners to sign up easily.",
    img: "/i4dt.png",
    tools: [],
    previewLink: "https://i4-dt.vercel.app/",
    repoLink: "#",
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
      className="bg-inherit py-12 border-gray-800 border-t text-gray-200"
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <div className="mx-auto px-4 md:max-w-[80%]">
        {/* Section Heading */}
        <motion.h6
          className="mb-2 font-semibold text-indigo-400 uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          My Portfolio
        </motion.h6>

        <motion.h3
          className="mb-10 font-bold text-zinc-50 text-2xl md:text-4xl"
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
            centeredSlides={false}
            grabCursor={true}
            className="pb-10 cursor-grab"
          >
            {portfolioItems.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="flex flex-col bg-zinc-900/40 backdrop-blur-md border border-zinc-800 hover:border-indigo-400 rounded-xl h-[375px] overflow-hidden transition-transform hover:-translate-y-2 duration-300 m"
                  variants={fadeUp}
                  custom={i * 0.1}
                >
                  {/* Project Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="opacity-90 hover:opacity-100 w-full h-48 md:h-64 object-cover transition"
                  />

                  {/* Project Details */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-semibold text-zinc-50 text-lg">
                        {item.title}
                      </h4>
                      {item.collaborator && (
                        <>
                          <span className="text-stone-400 text-sm">
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

                    <p className="flex-1 mb-4 text-stone-200 text-sm leading-relaxed">
                      {item.text}
                    </p>

                    {/* <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, t) => (
                        <span
                          key={t}
                          className="bg-zinc-800/40 px-3 py-1 border border-zinc-700 rounded-lg font-medium text-zinc-100 text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div> */}

                    {/* Buttons at bottom */}
                    <div className="flex gap-3">
                      <a
                        href={item.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-indigo-500/15 hover:bg-indigo-600 px-4 py-2 border border-gray-700 rounded-md font-medium text-white text-sm transition"
                      >
                        <Icons.LinkIcon className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={item.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:bg-indigo-400 px-4 py-2 border border-indigo-500 rounded-md font-medium text-stone-100 hover:text-zinc-950 text-sm transition"
                      >
                        <Icons.Github className="w-4 h-4" />
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
