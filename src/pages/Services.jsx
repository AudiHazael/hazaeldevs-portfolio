import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="mx-auto px-6 py-16 max-w-5xl text-zinc-100">
      <Link
        to="/"
        className="flex gap-2 mt-4 px-4 py-2 rounded-md text-indigo-300 transition"
      >
        <ArrowLongLeftIcon className="w-5" />
        Go Back Home
      </Link>
      <h1 className="mb-6 font-bold text-3xl md:text-4xl">
        Professional Website Development Services
      </h1>

      <p className="mb-10 max-w-3xl text-zinc-300">
        I help businesses establish trust online with clear, fast, and
        professional websites that turn visitors into enquiries.
      </p>

      <section className="space-y-10">
        <div>
          <h2 className="font-semibold text-white text-xl">
            Business Websites
          </h2>
          <p className="mt-2 text-zinc-300">
            Credibility-focused websites designed to explain what you do, who
            you serve, and why customers should contact you.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-white text-xl">
            Portfolio Websites
          </h2>
          <p className="mt-2 text-zinc-300">
            Clean, professional portfolios for developers, designers, and
            creatives who need to look established and trustworthy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-white text-xl">Landing Pages</h2>
          <p className="mt-2 text-zinc-300">
            Conversion-focused landing pages for specific offers, services, or
            campaigns.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-white text-xl">
            Website Redesigns
          </h2>
          <p className="mt-2 text-zinc-300">
            Modern rebuilds of outdated websites to improve clarity,
            performance, and lead generation.
          </p>
        </div>
      </section>

      <div className="mt-12">
        <a
          href="#contact"
          className="inline-block bg-purple-500/80 hover:bg-purple-400 px-8 py-3 rounded-full font-semibold text-white transition"
        >
          Request a Free Project Review
        </a>
      </div>
    </main>
  );
}
