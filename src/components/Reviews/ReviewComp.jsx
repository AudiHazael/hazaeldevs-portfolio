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
    image: "https://hazaeldevs-portfolio.vercel.app/og-preview.png",
    url: "https://hazaeldevs-portfolio.vercel.app/",

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
    <section className="md:max-w-[80%] mx-auto px-4">
      <h6 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-3">
        Testimonials
      </h6>
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
        className=""
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="bg-zinc-900/40 rounded-xl shadow-md p-6 flex flex-col justify-between w-full h-[320px] md:h-[340px] border border-zinc-800 hover:border-indigo-400 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Rating */}
              <p className="text-yellow-500 text-lg mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>

              {/* Review Body */}
              <p className="text-zinc-50 text-sm flex-grow leading-relaxed italic">
                “{r.body}”
              </p>

              {/* Avatar + Author */}
              <div className="flex items-center mt-4 pt-4 border-t border-zinc-800">
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-white/10"
                  />
                )}
                <div>
                  <span className="text-md font-semibold text-zinc-50 block">
                    {r.author}
                  </span>
                  {r.post && (
                    <span className="text-sm text-gray-400 block">
                      {r.post}
                    </span>
                  )}
                  {r.organization && (
                    <span className="text-xs text-gray-500">
                      {r.organization}
                    </span>
                  )}
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
