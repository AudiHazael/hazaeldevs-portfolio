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

  // JSON-LD Schema for Reviews
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Haza’ElDevs Web Development",
    image: "https://www.hazaeldevs.com/og-preview.png",
    url: "https://www.hazaeldevs.com/",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: total,
    },

    // Individual Reviews
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",

      itemReviewed: {
        "@type": "Service",
        name: "Haza’ElDevs Web Development",
      },

      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.body,
    })),
  };

  return (
    <section className="mx-auto px-4 py-12 md:max-w-[80%]">
      <h6 className="mb-3 font-semibold text-purple-300/50 text-sm uppercase tracking-widest">
        Testimonials
      </h6>
      <motion.h2
        className="mb-6 font-bold text-zinc-50 text-2xl"
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
        className=""
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="flex flex-col justify-between bg-zinc-900/40 shadow-md p-6 border border-zinc-800 hover:border-indigo-400 rounded-xl w-full h-fit md:h-[250px] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Rating */}
              <p className="mb-2 text-yellow-500 text-lg">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>

              {/* Review Body */}
              <p className="flex-1 mb-4 text-stone-200 text-sm leading-relaxed">
                “{r.body}”
              </p>

              {/* Avatar + Author */}
              <div className="flex items-center mt-4 pt-4 border-zinc-800 border-t">
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className="mr-3 border border-white/10 rounded-full w-10 h-10 object-cover"
                  />
                )}
                <div>
                  <span className="block mb-1 font-semibold text-md text-zinc-50">
                    {r.author}
                  </span>
                  <div className="flex gap-2">
                    {r.post && (
                      <span className="block text-gray-300 text-xs md:text-sm">
                        {r.post}
                      </span>
                    )}
                    {r.organization && (
                      <span className="text-gray-400 text-xs md:text-sm">
                        {r.organization}
                      </span>
                    )}
                  </div>
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
