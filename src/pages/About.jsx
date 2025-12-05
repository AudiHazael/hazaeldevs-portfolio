import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Haza’ElDevs | Professional Web Developer</title>
        <meta
          name="description"
          content="Learn how Haza’ElDevs approaches professional website development—focused on clarity, performance, SEO, and business impact."
        />
        <link rel="canonical" href="https://www.hazaeldevs.com/about" />
      </Helmet>

      <main className="mx-auto px-6 py-16 max-w-5xl text-zinc-100">
        <h1 className="mb-6 font-bold text-3xl md:text-4xl">
          About Haza’ElDevs
        </h1>

        <p className="mb-6 max-w-3xl text-zinc-300">
          Haza’ElDevs is a remote-first web development practice focused on
          building clear, professional websites for businesses that want to be
          taken seriously online.
        </p>

        <p className="mb-10 max-w-3xl text-zinc-300">
          Most websites fail not because of bad ideas, but because they create
          uncertainty. Confusing layouts, unclear messaging, and poor
          performance cost businesses potential clients every day. My work is
          centered on removing that friction.
        </p>

        {/* How I Work */}
        <section className="mt-10">
          <h2 className="mb-4 font-semibold text-white text-xl">How I Work</h2>

          <ul className="space-y-2 pl-6 text-zinc-300 text-sm list-disc">
            <li>Clear project scope and written expectations</li>
            <li>Mobile-first, performance-focused builds</li>
            <li>SEO foundations baked in from day one</li>
            <li>No unnecessary features or visual clutter</li>
            <li>Remote, async-first communication</li>
          </ul>
        </section>

        {/* Who This Is For */}
        <section className="mt-12">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Who This Is For
          </h2>

          <p className="max-w-3xl text-zinc-300 text-sm">
            This is for small businesses, solo founders, and professionals who
            value clarity, long-term usability, and a website that supports real
            business decisions—not hype or gimmicks.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="/#contact"
            className="inline-block bg-purple-500/80 hover:bg-purple-400 px-8 py-3 rounded-full font-semibold text-white transition"
          >
            Work With Me
          </a>
        </div>
      </main>
    </>
  );
}
