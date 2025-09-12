import React from "react";

function Price() {
  const plans = [
    {
      name: "Basic",
      price: "$150 - $250",
      popular: false,
      features: [
        "  Up to 3 pages (Home, About, Contact)",
        "  Mobile responsive design",
        "  Contact/inquiry form",
        "  Social media integration",
        "  Domain & hosting guidance",
        "  1 week free support",
      ],
      unavailable: ["Analytics", "Security", "TechnicalSEO"],
    },
    {
      name: "Standard",
      price: "$400 – $700",
      popular: true, // Highlight this
      features: [
        "  Up to 7 pages (Home, About, Services, Blog, Contact, etc.)",
        "  Modern, mobile-friendly design",
        "  SEO setup (basic keyword optimization + Google indexing)",
        "  Blog/news integration",
        "  Contact & booking forms",
        "  Google Maps + WhatsApp chat integration",
        "  Analytics setup (Google Analytics + Facebook Pixel)",
        "  2 weeks free support",
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
        "  Newsletter/email marketing integration",
        "  Unlimited pages & features as needed",
        "Training on how to manage the site",
        " 1 month free maintenance & updates",
      ],
      unavailable: [],
    },
  ];

  return (
    <div className="max-w-7xl px-4 mx-auto py-12 text-zinc-50">
      <h2 className="text-2xl font-bold">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="card w-full lg:w-96 bg-white/10 backdrop-blur-md inset-shadow-xs shadow-sm px-auto py-8 rounded-md"
          >
            <div className="card-body">
              {plan.popular && (
                <span className="badge badge-xs badge-warning self-start">
                  Most Popular
                </span>
              )}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <span className="text-lg">{plan.price}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-md">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
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
                  <li key={i} className="opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-base-content/50"
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
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">
                  Book Your Spot Now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
