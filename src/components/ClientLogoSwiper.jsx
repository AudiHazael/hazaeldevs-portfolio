import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LOGOS = [
  { id: 1, src: "/karez.png", alt: "Karez Nigeria ltd" },
  { id: 2, src: "/kelle.png", alt: "Artist Kelle" },
  { id: 3, src: "/i4DT-logo.png", alt: "Initiative for Digital Development" },
];

const ClientLogoSwiper = () => {
  const defaultSlides = 3;
  const breakpoints = {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  };

  const maxSlidesPerView = Math.max(
    defaultSlides,
    ...Object.values(breakpoints).map((b) => b.slidesPerView)
  );
  const enableLoop = LOGOS.length >= maxSlidesPerView;

  return (
    <section className="py-6 w-full overflow-hidden">
      <div className="mx-auto px-6 md:px-12 max-w-7xl">
        <h2 className="mb-6 font-medium text-zinc-300 md:text-md text-sm text-center lg:text-start tracking-wide">
          Trusted by businesses we’ve helped grow
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={defaultSlides}
          spaceBetween={40}
          loop={enableLoop}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={breakpoints}
          className="flex items-center"
        >
          {LOGOS.map((logo) => (
            <SwiperSlide key={logo.id} className="flex justify-center items-center">
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
