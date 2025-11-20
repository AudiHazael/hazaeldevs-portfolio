import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LOGOS = [
  { id: 1, src: "/logos/company1.png", alt: "Company 1" },
  { id: 2, src: "/logos/company2.png", alt: "Company 2" },
  { id: 3, src: "/logos/company3.png", alt: "Company 3" },
];

const ClientLogoSwiper = () => {
  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-start text-sm md:text-md font-medium text-zinc-300 tracking-wide mb-6">
          Trusted by businesses we’ve helped grow
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center"
        >
          {LOGOS.map((logo) => (
            <SwiperSlide
              key={logo.id}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-32 md:w-36 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogoSwiper;
