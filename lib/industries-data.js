/**
 * @typedef {Object} HeroHeadlinePart
 * @property {string} text
 * @property {boolean} [accent] - true renders this segment with the accent treatment
 *
 * @typedef {Object} PainPoint
 * @property {string} title
 * @property {string} description
 *
 * @typedef {Object} FixPoint
 * @property {string} title
 * @property {string} description
 *
 * @typedef {Object} FaqItem
 * @property {string} q
 * @property {string} a
 *
 * @typedef {Object} HeroStat
 * @property {string} label
 * @property {string} value
 *
 * @typedef {Object} IndustryData
 * @property {string} slug
 * @property {string} name
 * @property {'law'|'contractor'|'clinic'} theme
 * @property {string} eyebrow
 * @property {HeroHeadlinePart[]} heroHeadline
 * @property {string} heroSubhead
 * @property {HeroStat} [heroStat]
 * @property {PainPoint[]} painPoints
 * @property {FixPoint[]} fixPoints
 * @property {FaqItem[]} faq
 * @property {string} ctaHeadline
 * @property {string} ctaSubtext
 * @property {string} metaTitle
 * @property {string} metaDescription
 * @property {string[]} keywords
 * @property {string} targetKeyword
 */

/** @type {IndustryData[]} */
export const industries = [
  {
    slug: "law-firms",
    name: "Law Firms",
    theme: "law",
    eyebrow: "For Law Firms & Legal Practices",
    heroHeadline: [
      { text: "Your next client is already " },
      { text: "searching", accent: true },
      { text: "." },
    ],
    heroSubhead:
      "A slow site or a missed enquiry form isn't losing you traffic — it's losing you retainers. I build law firm websites with real intake systems behind them, so qualified leads reach you before they call the firm next door.",
    painPoints: [
      {
        title: "The Vanishing Contact Form",
        description:
          "Most firm sites route enquiries into an inbox nobody checks until Monday. By then, the prospect has already called three other firms.",
      },
      {
        title: "No After-Hours Coverage",
        description:
          "Legal problems don't happen 9-to-5. A site with no way to capture an after-hours enquiry hands that lead straight to a competitor.",
      },
      {
        title: "A Credibility Gap",
        description:
          "Outdated design reads as an outdated practice — even to visitors who never say so out loud.",
      },
      {
        title: "No Way to Qualify Leads",
        description:
          "Every enquiry gets treated the same, so your time goes to tire-kickers instead of real cases.",
      },
    ],
    fixPoints: [
      {
        title: "Structured Intake, Not a Contact Form",
        description:
          "A short qualifying form captures case type, urgency, and contact details — organized before you even open your inbox.",
      },
      {
        title: "Instant Acknowledgment",
        description:
          "Every enquiry gets an immediate, branded confirmation, so a prospect never wonders if their message went through.",
      },
      {
        title: "A Pipeline You Can See",
        description:
          "The same structured pipeline thinking behind a logistics operator's lead system applies here — enquiries land somewhere you can track, not lost in an inbox.",
      },
    ],
    faq: [
      {
        q: "How long does a law firm website take to build?",
        a: "Most firm sites are ready in 2–4 weeks, depending on the number of practice areas and whether an intake system is included.",
      },
      {
        q: "Can you add an intake form that filters serious cases from spam?",
        a: "Yes — a short qualifying form is standard on every law firm build, so unqualified enquiries don't reach your inbox.",
      },
      {
        q: "Do you work with firms outside Nigeria?",
        a: "Yes, I work with law firms and legal practices globally, with pricing in USD.",
      },
    ],
    ctaHeadline: "See what a lead-ready website looks like for your firm.",
    ctaSubtext:
      "Fill out a short discovery survey — no call required — and get a clear breakdown of what your site needs.",
    metaTitle: "Law Firm Website Design for Lead Generation | Haza'ElDevs",
    metaDescription:
      "Websites and intake systems built to turn searches into signed clients — for solo and small law firms.",
    keywords: [
      "law firm website design",
      "lawyer website that converts leads",
      "law firm lead generation website",
      "attorney intake form website",
      "personal injury lawyer web design",
    ],
    targetKeyword: "law firm website design for lead generation",
  },
  {
    slug: "home-service-contractors",
    name: "Home Service Contractors",
    theme: "contractor",
    eyebrow: "For Roofers, HVAC, Electricians & Remodelers",
    heroHeadline: [
      { text: "Every hour your site loads slow, a job " },
      { text: "goes to a competitor", accent: true },
      { text: "." },
    ],
    heroSubhead:
      "Emergency jobs get won in minutes, not days. I build contractor websites with fast-loading pages and lead capture built to catch the call before it goes to the next name on Google.",
    heroStat: { label: "Mobile visitors lost to a slow site", value: "~50%" },
    painPoints: [
      {
        title: "The Slow Load, Lost Job",
        description:
          "A slow site kills mobile leads outright, and most emergency searches happen on a phone, on the spot.",
      },
      {
        title: "No Real Quote Request Flow",
        description:
          "A single generic contact form makes visitors guess what info to include, so many leave without submitting.",
      },
      {
        title: "The Missed-Call Black Hole",
        description:
          "No follow-up system means a missed call is a lost job, not a delayed one.",
      },
      {
        title: "No Way to Show Proof of Work",
        description:
          "Without a real project gallery, pricing conversations start from zero trust.",
      },
    ],
    fixPoints: [
      {
        title: "Fast-Loading, Mobile-First Build",
        description:
          "Every page is built to load fast on mobile networks, so an urgent search doesn't bounce before it reaches you.",
      },
      {
        title: "Job-Specific Quote Requests",
        description:
          "A short structured form captures job type, location, and urgency — so you know what you're walking into before you call back.",
      },
      {
        title: "Automated Lead Notifications",
        description:
          "The same follow-up logic used to keep a logistics operator's dispatch pipeline moving now routes every quote request straight to your phone.",
      },
    ],
    faq: [
      {
        q: "How fast can I get a contractor website live?",
        a: "Most contractor sites launch in 2–3 weeks, including a mobile-first design and a structured quote request form.",
      },
      {
        q: "Can leads notify me by text or WhatsApp?",
        a: "Yes — new enquiries can trigger an instant WhatsApp or email notification, so you never miss a job.",
      },
      {
        q: "I already have a site. Can you just fix the lead capture?",
        a: "Yes — I regularly rebuild just the intake and follow-up layer without touching the rest of the site.",
      },
    ],
    ctaHeadline: "Stop losing jobs to a slow website.",
    ctaSubtext:
      "Send a short breakdown of your business and get a clear plan — no sales call required.",
    metaTitle: "Contractor Website Design for Lead Generation | Haza'ElDevs",
    metaDescription:
      "Fast, mobile-first websites and quote-request systems built to win jobs before your competitor's site loads.",
    keywords: [
      "contractor website lead generation",
      "website for roofing company",
      "HVAC company website design",
      "get more leads for contracting business",
      "website that generates leads for contractors",
    ],
    targetKeyword: "contractor website lead generation",
  },
  {
    slug: "medical-dental-clinics",
    name: "Medical & Dental Clinics",
    theme: "clinic",
    eyebrow: "For Private Practices, Dental & Chiropractic Clinics",
    heroHeadline: [
      { text: "A calm, clear website " },
      { text: "builds trust", accent: true },
      { text: " before the first appointment." },
    ],
    heroSubhead:
      "Patients decide whether to book before they ever call. I build clinic websites with simple booking flows and follow-up systems, so interested patients don't go cold overnight.",
    painPoints: [
      {
        title: "Phone-Only Booking",
        description:
          "Routing every booking through business-hours phone calls loses patients who browse after work.",
      },
      {
        title: "No Follow-Up for Unbooked Enquiries",
        description:
          "An enquiry that doesn't convert immediately usually just disappears, with nothing bringing the patient back.",
      },
      {
        title: "Clinical, Not Comforting",
        description:
          "A cold, generic site can undercut the reassurance a new patient needs before they'll book.",
      },
      {
        title: "No Clear Next Step",
        description:
          "Without one obvious action, visitors leave to compare other clinics instead of booking.",
      },
    ],
    fixPoints: [
      {
        title: "Simple, Guided Booking",
        description:
          "A clear booking or enquiry flow removes the guesswork, so patients know exactly what happens after they click.",
      },
      {
        title: "Gentle Automated Follow-Up",
        description:
          "Enquiries that don't convert immediately get a warm, automatic follow-up instead of going cold.",
      },
      {
        title: "A Real Patient Pipeline",
        description:
          "Applying the same structured pipeline thinking used to run a logistics operator's lead flow, so no enquiry falls through the cracks.",
      },
    ],
    faq: [
      {
        q: "Can patients book appointments directly on the site?",
        a: "Yes — I can build a guided booking or enquiry flow suited to your current scheduling system.",
      },
      {
        q: "Will this integrate with the booking software we already use?",
        a: "In most cases, yes. I review your current setup first and design the intake flow around it.",
      },
      {
        q: "How do you keep the design reassuring rather than clinical?",
        a: "Through softer visual choices, calm pacing, and copy that speaks to patients directly, not just services offered.",
      },
    ],
    ctaHeadline: "Give patients a reason to book, not just browse.",
    ctaSubtext:
      "Share a bit about your practice and get a clear recommendation — no call required.",
    metaTitle:
      "Clinic Website Design for Patient Lead Generation | Haza'ElDevs",
    metaDescription:
      "Calm, trustworthy websites and booking systems built to turn visitors into booked patients.",
    keywords: [
      "clinic website design",
      "dental website that books more patients",
      "medical practice lead generation website",
      "healthcare website design for small clinics",
      "patient booking website",
    ],
    targetKeyword: "medical practice lead generation website",
  },
];

/**
 * @param {string} slug
 * @returns {IndustryData | undefined}
 */
export function getIndustryBySlug(slug) {
  return industries.find((industry) => industry.slug === slug);
}
