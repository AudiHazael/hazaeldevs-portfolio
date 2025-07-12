import React from "react";
import { Icons } from "./Icons";

function Services() {
  return (
    <section className="py-10 text-gray-800 bg-inherit" id="services">
      <div className="max-w-6xl px-4 mx-auto">
        <h6
          className="mb-2 font-semibold text-indigo-400 uppercase"
          data-aos="fade-in"
          data-aos-delay="300">
          My Services
        </h6>
        <h3
          className="mb-10 text-3xl font-bold text-zinc-50"
          data-aos="fade-in"
          data-aos-delay="600">
          Professional UI Design and Development Services
        </h3>

        {/* UI Design Section - Card */}
        <div
          className="flex flex-col md:flex-row overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-gray-800 hover:-translate-y-1 shadow mb-12"
          data-aos="fade-in"
          data-aos-delay="900">
          {/* Image flush to the left */}
          <div className="md:w-auto w-full h-auto">
            <img
              src="/service-one.png"
              alt="image-for-ui-design"
              className="h-full w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-2/3 p-6">
            <h4 className="mb-4 text-xl font-semibold text-zinc-50">
              User Interface (UI) Design
            </h4>
            <p className="leading-relaxed text-stone-50">
              I specialize in visually appealing and user-centered experiences.
              My approach revolves around understanding user needs and
              seamlessly translating them into elegant design solutions—from the
              initial concept to the final product.
              <br />
              <br />I strive to create interfaces that not only engage users but
              also improve their overall digital journey through a meticulous
              blend of aesthetics and functionality. Each design is a crafted
              work of art with the goal of leaving a lasting impression and
              providing a delightful user experience.
            </p>
          </div>
        </div>

        {/* Frontend Development Section - Card */}
        <div
          className="flex flex-col md:flex-row-reverse overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-gray-800 hover:-translate-y-1 shadow"
          data-aos="fade-in"
          data-aos-delay="1200">
          {/* Image flush to the right */}
          <div className="md:w-auto w-full h-auto">
            <img
              src="/service-two.png"
              alt="image-of-front-end-development"
              className="h-full w-full object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl"
            />
          </div>

          {/* Text content */}
          <div className="w-full md:w-2/3 p-6">
            <h4 className="mb-4 text-xl font-semibold text-zinc-50">
              Frontend Development
            </h4>
            <p className="leading-relaxed text-stone-50">
              With precision and functionality, I bring designs to life. I
              convert static visuals into dynamic, interactive interfaces with
              ReactJS, adhering to industry best practices.
              <br />
              <br />
              My experience includes developing responsive and scalable user
              interface (UI) components that ensure consistent user experiences
              across multiple devices and platforms. I navigate the complexities
              of development to deliver polished and user-friendly interfaces
              that stand the test of technological evolution, with a focus on
              clean code and optimal performance.
            </p>
          </div>
        </div>
        {/* Bottom grid: features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition">
            <div className="my-2">
              {Icons.CodeIcon({ className: "text-indigo-400" })}
            </div>
            <h2
              className="mb-2 font-semibold text-zinc-50 uppercase"
              data-aos="fade-in"
              data-aos-delay="600">
              Clean Code
            </h2>
            <p className="leading-relaxed text-stone-100">
              Writing clear, efficient, and scalable code with proper
              documentation, following established best practices.
            </p>
          </div>

          <div
            className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
            data-aos="fade-in"
            data-aos-delay="1000">
            <div className="my-2">
              {Icons.LayoutDashboard({ className: "text-indigo-400" })}
            </div>
            <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
              UI/UX Focus
            </h2>
            <p className="leading-relaxed text-stone-100">
              Designing user-friendly and aesthetically pleasing interfaces that
              deliver exceptional user experiences.
            </p>
          </div>

          <div
            className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
            data-aos="fade-in"
            data-aos-delay="1500">
            <div className="my-2">
              {Icons.Mphone({ className: "text-indigo-400" })}
            </div>
            <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
              Mobile Optimization
            </h2>
            <p className="leading-relaxed text-stone-100">
              Optimizing apps for fast load times, accessibility compliance, and
              strong search engine presence.
            </p>
          </div>

          <div
            className="p-4 rounded-xl shadow-md inset-shadow-xs backdrop-blur-sm bg-white/10 border border-gray-800 hover:-translate-y-1 transition"
            data-aos="fade-in"
            data-aos-delay="1500">
            <div className="my-2">
              {Icons.Zap({ className: "text-indigo-400" })}
            </div>
            <h2 className="mb-2 font-semibold text-zinc-50 uppercase">
              Performance
            </h2>
            <p className="leading-relaxed text-stone-100">
              Optimizing apps for fast load times, accessibility compliance, and
              strong search engine presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
