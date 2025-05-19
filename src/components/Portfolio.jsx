import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/PortfolioSlider.scss";

const portfolioItems = [
  {
    title: "WealthWave",
    text: "Description for project one.",
    img: "https://via.placeholder.com/400x200",
  },
  {
    title: "Soy-Joy",
    text: "Description for project two.",
    img: "https://via.placeholder.com/400x200",
  },
  {
    title: "Extensive Academy",
    text: "Description for project three.",
    img: "https://via.placeholder.com/400x200",
  },
  {
    title: "Project Four",
    text: "Description for project four.",
    img: "https://via.placeholder.com/400x200",
  },
  {
    title: "Project Five",
    text: "Description for project five.",
    img: "https://via.placeholder.com/400x200",
  },
];

const Portfolio = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
      className="portfolio-swiper mt-4">
      {portfolioItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="card h-100 shadow-sm">
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h4 className="card-title mb-3">{item.title}</h4>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Portfolio;
