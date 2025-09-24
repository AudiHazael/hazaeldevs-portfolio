import React from "react";
import reviews from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
  const total = reviews.length;
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / total;

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hazael Audi",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: total,
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: r.author,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
      },
      reviewBody: r.body,
    })),
  };

  return (
    <section className="max-w-7xl mx-auto py-8 px-4">
      <motion.h2
        className="text-2xl font-bold mb-6 text-zinc-50"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        What Clients Say
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="bg-white/10 rounded-lg shadow-md p-6 flex flex-col w-full h-auto md:h-86"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-yellow-500 text-lg mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>
              <p className="text-zinc-50 flex-grow font-light">“{r.body}”</p>

              {/* Avatar + Author */}
              <div className="flex items-center mt-4">
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-white/20"
                  />
                )}
                <div>
                  <span className="text-md font-semibold text-zinc-50">
                    {" "}
                    {r.author}
                  </span>{" "}
                  <br />
                  <span className="text-sm text-zinc-50"> {r.post}</span>
                  <span className="text-sm text-zinc-50">{r.organization}</span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
