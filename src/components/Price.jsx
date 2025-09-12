import React from "react";
import { motion } from "framer-motion";

function Price() {
  const plans = [
    {
      name: "Basic",
      price: "$150 - $250",
      popular: false,
      features: [
        "Up to 3 pages (Home, About, Contact)",
        "Mobile responsive design",
        "Contact/inquiry form",
        "Social media integration",
        "Domain & hosting guidance",
        "1 week free support",
      ],
      unavailable: ["Analytics", "Security", "Technical SEO"],
    },
    {
      name: "Standard",
      price: "$400 – $700",
      popular: true,
      features: [
        "Up to 7 pages (Home, About, Services, Blog, Contact, etc.)",
        "Modern, mobile-friendly design",
        "SEO setup (basic keyword optimization + Google indexing)",
        "Blog/news integration",
        "Contact & booking forms",
        "Google Maps + WhatsApp chat integration",
        "Analytics setup (Google Analytics + Facebook Pixel)",
        "2 weeks free support",
      ],
      unavailable: ["Priority support"],
    },
    {
      name: "Premium",
      price: "$800 – $1,500+",
      popular: false,
      features: [
        "Everything in Standard, plus:",
        "E-commerce store (up to 30 products) OR advanced booking system",
        "Payment gateway integration (Paystack, Flutterwave, Stripe, PayPal, etc.)",
        "Advanced speed optimization (fast loading)",
        "SSL setup & advanced website security",
        "Advanced SEO (keyword research, on-page SEO, technical SEO)",
        "Newsletter/email marketing integration",
        "Unlimited pages & features as needed",
        "Training on how to manage the site",
        "1 month free maintenance & updates",
      ],
      unavailable: [],
    },
  ];

  // Container for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <section id="pricing" className="max-w-7xl px-4 mx-auto py-16 text-zinc-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <p className="text-gray-400 mt-2">
          Choose a package that fits your project needs
        </p>
      </div>

      {/* Plans with staggered motion */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`w-full lg:w-96 bg-white/10 backdrop-blur-md shadow-lg rounded-xl px-6 py-8 relative overflow-hidden transition-transform hover:scale-105 ${
              plan.popular ? "border-2 border-indigo-400" : ""
            }`}
            variants={cardVariants}
          >
            {/* Badge */}
            {plan.popular && (
              <span className="absolute top-4 right-4 text-xs bg-indigo-500 text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Header */}
            <div className="flex justify-between items-center my-4">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <span className="text-lg font-medium">{plan.price}</span>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-sm">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
              {plan.unavailable.map((f, i) => (
                <li key={i} className="flex items-center opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="line-through">{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-6">
              <button className="w-full py-3 rounded-md bg-indigo-500 hover:bg-indigo-600 transition-colors font-medium">
                {plan.popular
                  ? "Choose Standard"
                  : plan.name === "Premium"
                  ? "Go Premium"
                  : "Get Started"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Price;
