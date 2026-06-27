"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const LOGOS = [
  { id: 1, src: "/karez.png", alt: "Karez Nigeria Ltd", invert: true },
  { id: 2, src: "/kelle.png", alt: "Artist Kelle", invert: true },
  {
    id: 3,
    src: "/i4DT-logo.png",
    alt: "Initiative for Digital Development",
    invert: false,
  },
  { id: 4, src: "/kwikride.png", alt: "KwikRide", invert: false },
  { id: 5, src: "/HaulConnect.png", alt: "HaulConnect", invert: false },
];

// Duplicate so Swiper loop never shows a gap
const LOOP_LOGOS = [...LOGOS, ...LOGOS];

export default function ClientLogoSwiper() {
  return (
    <section className="relative py-10 w-full overflow-hidden border-t border-zinc-800/60">
      {/* Edge fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #020617 30%, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #020617 30%, transparent)",
        }}
      />

      <div className="mx-auto px-6 md:px-12 max-w-7xl space-y-7">
        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.18em] text-center">
          Businesses I&apos;ve worked with
        </p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={64}
          loop={true}
          speed={3500}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 64 },
            768: { slidesPerView: 4, spaceBetween: 80 },
            1024: { slidesPerView: 5, spaceBetween: 96 },
          }}
          allowTouchMove={true}
          className="w-full overflow-visible"
        >
          {LOOP_LOGOS.map((logo, i) => (
            <SwiperSlide
              key={`${logo.id}-${i}`}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-12 w-auto max-w-35">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto max-w-35 object-contain opacity-50 hover:opacity-90 transition-opacity duration-300"
                  style={
                    logo.invert ? { filter: "brightness(0) invert(1)" } : {}
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
