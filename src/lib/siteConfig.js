// A Model Plumbing LLC — site content extracted from production HTML
// All values are real business data; nothing is placeholder.

export const SITE_CONFIG = {
  // ─── Business basics ────────────────────────────────────────────────────────
  businessName: "A Model Plumbing LLC",
  license: "#M-31665",
  established: "2001",
  phone: "(512) 994-9391",
  phoneHref: "tel:5129949391",
  email: "amodelplumbing@yahoo.com",
  address: "Dripping Springs, TX 78620",
  hours: "Open 24 hours, every day",

  // ─── SEO ────────────────────────────────────────────────────────────────────
  pageTitle:
    "A Model Plumbing LLC — Licensed Master Plumber, Dripping Springs & the Hill Country",
  metaDescription:
    "Licensed master plumber serving Dripping Springs, South Austin, Wimberley & the Texas Hill Country since 2001. 24/7 emergency service. Free quotes. Lic #M-31665.",

  // ─── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services" },
    { label: "Pricing",  href: "#pricing"  },
    { label: "Reviews",  href: "#reviews"  },
    { label: "FAQ",      href: "#faq"      },
    { label: "Contact",  href: "#contact"  },
  ],

  // ─── Hero ───────────────────────────────────────────────────────────────────
  tagline: "Licensed Master Plumber · Hays & Travis County",
  heroHeadline: "Leaks Don't Keep\nOffice Hours.\nNeither Do We.",
  heroSubheadline:
    "Round-the-clock plumbing repair and installation for Dripping Springs, South Austin, Wimberley & the Hill Country — real quotes, a real warranty, and a real person who shows up.",

  heroBadges: [
    "24/7 Emergency",
    "Free Consult",
    "1-Yr Warranty",
    "Permits Handled",
  ],

  // ─── Trust strip ────────────────────────────────────────────────────────────
  trustStrip: [
    { value: "#M-31665",        label: "TSBPE Master License"    },
    { value: "24/7/365",        label: "Emergency Dispatch"      },
    { value: "Since 2001",      label: "Serving Greater Austin"  },
    { value: "Hays + Travis Co.", label: "Full Service Radius"   },
  ],

  // ─── Animated stats ─────────────────────────────────────────────────────────
  stats: [
    { value: 25, suffix: "+",  label: "Years in Business"      },
    { value: 24, suffix: "/7", label: "Emergency Availability"  },
    { value: 6,  suffix: "",   label: "Service Categories"      },
    { value: 8,  suffix: "+",  label: "Cities Served"           },
  ],

  // ─── About ──────────────────────────────────────────────────────────────────
  about: {
    headline: "A Family Trade\nNot a Franchise",
    description:
      "Danny Lee Terry has been repairing and installing plumbing systems around the Austin area since 2001, journeyman-licensed in three states and carrying Texas Master Plumber license #M-31665. What started as one truck is now a small, close-knit crew — still small enough that when you call, you get an owner who answers, not a call-center script.",
    features: [
      "Licensed & insured, TSBPE #M-31665",
      "Free consultation before any work begins",
      "All permits & inspections handled for you",
      "1-year warranty on completed work, no charge",
    ],
  },

  // ─── Services ───────────────────────────────────────────────────────────────
  services: [
    {
      title: "Water Heaters",
      description:
        "Tank & tankless installation, repair, replacement, and anode/element service.",
    },
    {
      title: "Drain & Sewer",
      description:
        "Clogged drain clearing, sewer line cleaning, camera inspection and repair.",
    },
    {
      title: "Fixtures",
      description:
        "Faucets, sinks, toilets, garbage disposals, and dishwasher installation.",
    },
    {
      title: "Gas Lines",
      description:
        "New gas line installation, reroutes, and leak detection & repair.",
    },
    {
      title: "Backflow & Filtration",
      description:
        "Backflow prevention testing and reverse-osmosis system installation.",
    },
    {
      title: "Emergency Repair",
      description:
        "Burst pipes, no hot water, active leaks — dispatched 24 hours a day.",
    },
  ],

  // ─── Pricing ────────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "No surprises",
    headline: "Sample Pricing",
    subtext:
      "Real labor rates, published up front. Parts and permit fees are worked into your quote — not added after the fact.",
    note:
      "Labor pricing shown above. Tankless heaters, sump pumps, repiping and larger jobs are quoted after a free on-site or remote consult.",
    items: [
      { name: "Kitchen faucet replacement",      amount: "$190"          },
      { name: "Bathroom faucet replacement",     amount: "$200"          },
      { name: "Garbage disposal replacement",    amount: "$220"          },
      { name: "Dishwasher installation",         amount: "$285"          },
      { name: "Reverse-osmosis system install",  amount: "$250–$350"     },
      { name: "Tank water heater (parts + labor)", amount: "$1,700–$2,000" },
    ],
  },

  // ─── Testimonials ────────────────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Danny replaced our water heater quickly, explained the whole job clearly, and didn't pad the invoice — he even waived a service charge on a return visit.",
      author: "Verified Customer",
      title: "Google Review · ★★★★★",
    },
    {
      quote:
        "Musa walked us through every repair step by step and the work has held up since. Professional from the first call to the final walkthrough.",
      author: "Verified Customer",
      title: "Google Review · ★★★★★",
    },
    {
      quote:
        "Showed up on time, priced fairly compared to other quotes we got, and had the problem solved on the first visit.",
      author: "Verified Customer",
      title: "Google Review · ★★★★★",
    },
  ],

  // ─── Service Area ────────────────────────────────────────────────────────────
  serviceArea: {
    eyebrow: "Where we work",
    headline: "Service Area",
    description:
      "Based in Dripping Springs, covering Hays County and taking calls in Travis County.",
    towns: [
      "Dripping Springs",
      "South Austin",
      "Wimberley",
      "Driftwood",
      "Bee Cave",
      "Lake Travis",
      "Buda",
      "RR 620 Corridor",
    ],
    mapSrc:
      "https://www.google.com/maps?q=Dripping+Springs,+TX+78620&z=11&output=embed",
  },

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  faq: [
    {
      question: "How much does a consultation cost?",
      answer:
        "Nothing. We offer a free quote by phone, photo, or an in-person visit — whichever is easiest for you.",
    },
    {
      question: "Is there a warranty on the work?",
      answer:
        "Yes — every job comes with a 1-year warranty at no extra charge.",
    },
    {
      question: "Do I need to pull my own permits?",
      answer:
        "No. Any permit or inspection the job requires is handled by us and built into your quote.",
    },
    {
      question: "Can you come out nights or weekends?",
      answer:
        "Yes — we run 24/7 emergency dispatch, every day of the week, including holidays.",
    },
  ],

  // ─── Contact form ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Get in touch",
    headline: "Get a Free Quote",
    subtext:
      "Tell us what's going on — we'll follow up with pricing, usually the same day.",
    mailtoEmail: "amodelplumbing@yahoo.com",
    mailtoSubject: "Quote Request from Website",
  },

  // ─── Social / footer links ───────────────────────────────────────────────────
  social: [
    {
      platform: "Facebook",
      href: "https://www.facebook.com/amodelplumbing/",
    },
    {
      platform: "Nextdoor",
      href: "https://nextdoor.com/pages/a-model-plumbing-dripping-springs-tx/",
    },
  ],

  footer: {
    copyright: "A Model Plumbing LLC · Lic #M-31665 · TSBPE",
  },
};
