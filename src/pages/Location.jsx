import { Helmet } from "react-helmet-async";

export default function Location() {
  return (
    <>
      <Helmet>
        <title>Location | Haza’ElDevs – Remote Web Development Services</title>
        <meta
          name="description"
          content="Haza’ElDevs is based in Lagos, Nigeria and works remotely with clients across Africa, Europe, the UK, and North America."
        />
        <link rel="canonical" href="https://www.hazaeldevs.com/location" />
      </Helmet>

      <main className="mx-auto px-6 py-16 max-w-5xl text-zinc-100">
        <h1 className="mb-6 font-bold text-3xl md:text-4xl">
          Location & Availability
        </h1>

        <p className="mb-8 max-w-3xl text-zinc-300">
          Haza’ElDevs operates from Lagos, Nigeria, and works remotely with
          clients worldwide. Projects are handled fully online, with structured
          communication and clear delivery timelines.
        </p>

        {/* Primary Location */}
        <section className="mb-10">
          <h2 className="mb-3 font-semibold text-white text-xl">
            Primary Location
          </h2>
          <p className="text-zinc-300 text-sm">
            📍 Lagos, Nigeria
            <br />
            Time Zone: GMT+1 (West Africa Time)
          </p>
        </section>

        {/* Remote Work */}
        <section className="mb-10">
          <h2 className="mb-3 font-semibold text-white text-xl">
            Remote Work Model
          </h2>
          <p className="max-w-3xl text-zinc-300 text-sm">
            All projects are executed remotely using async-first workflows. This
            allows clients in different time zones to collaborate efficiently
            without delays or unnecessary meetings.
          </p>
        </section>

        {/* Served Regions */}
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-white text-xl">
            Clients Served
          </h2>

          <ul className="space-y-2 pl-6 text-zinc-300 text-sm list-disc">
            <li>Nigeria & West Africa</li>
            <li>United Kingdom</li>
            <li>Europe</li>
            <li>United States & Canada</li>
            <li>Remote-first startups globally</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/#contact"
            className="inline-block bg-purple-500/80 hover:bg-purple-400 px-8 py-3 rounded-full font-semibold text-white transition"
          >
            Start a Project
          </a>
        </div>
      </main>
    </>
  );
}
