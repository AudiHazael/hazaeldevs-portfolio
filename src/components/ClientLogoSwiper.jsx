import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LOGOS = [
  { id: 1, src: "/karez.png", alt: "Karez Nigeria ltd" },
  { id: 2, src: "/kelle.png", alt: "Artist Kelle" },
  { id: 3, src: "/i4DT-logo.png", alt: "Initiative for Digital Development" },
];

const ClientLogoSwiper = () => {
  return (
    <section className="py-12 w-full overflow-hidden">
      <div className="mx-auto px-6 md:px-12 max-w-7xl">

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="flex justify-center items-center"
        >
          {LOGOS.map((logo) => (
            <SwiperSlide
              key={logo.id}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center w-28 md:w-36 h-16 md:h-20">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 max-w-full max-h-full object-contain transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogoSwiper;
