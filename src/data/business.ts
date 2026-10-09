// ---------------------------------------------------------------------------
// Single personalization swap-file for Al-Baraq Travels.
// Everything a human might want to edit lives here.
// Values marked VERIFIED come from the confirmed brief of 2026-10-09.
// Values marked CONFIRM still need owner sign-off before launch.
// ---------------------------------------------------------------------------

const WHATSAPP_NUMBER = "2348024029843"; // VERIFIED: WhatsApp-enabled business number

/** Build a wa.me deep link with a properly URL-encoded prefilled message. */
export function waHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const business = {
  // VERIFIED business identity.
  name: "Al-Baraq Travels",
  // VERIFIED business location. Street address still to be confirmed.
  location: "Ikeja, Lagos",
  country: "Nigeria",
  // VERIFIED primary telephone number.
  phoneDisplay: "+234 802 402 9843",
  phoneHref: "tel:+2348024029843",
  whatsapp: {
    // VERIFIED by the developer on 2026-10-09: the number is WhatsApp-enabled.
    verified: true,
    display: "+234 802 402 9843",
    generalHref: waHref(
      "Hello Al-Baraq Travels, I found your website and would like help planning a trip.",
    ),
    floatLabel: "Chat with Al-Baraq Travels on WhatsApp",
  },
  // VERIFIED social profiles supplied in the brief.
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/albaraqtravelsng/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/albaraqtravelsng/" },
    { label: "Facebook", href: "https://www.facebook.com/albaraqtravel" },
  ],
  // This site is a sales demonstration until the owner approves launch.
  demoLabel: "Private website preview",
  nav: [
    ["Services", "#services"],
    ["Visa & study", "#assistance"],
    ["How it works", "#process"],
    ["About", "#about"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ],
  hero: {
    eyebrow: "Travel agency · Ikeja, Lagos",
    headline: "Your next journey starts here.",
    supporting:
      "Visa guidance, international and domestic flights, study-abroad support, hotels, transfers and holidays — planned with you from Ikeja, Lagos.",
    primaryCta: "Explore our services",
    whatsappCta: "Chat on WhatsApp",
    // VERIFIED hero photograph (Adrien Olichon / Pexels).
    image:
      "https://images.pexels.com/photos/2387803/pexels-photo-2387803.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=82",
    imageAlt: "Aircraft wing above sunlit clouds, seen from a window seat",
  },
  trustStrip: [
    {
      icon: "pin",
      title: "Based in Ikeja, Lagos",
      body: "Serving travellers across Nigeria and beyond.",
    },
    {
      icon: "phone",
      title: "Direct, human contact",
      body: "Call or WhatsApp the listed line — no faceless ticket queues.",
    },
    {
      icon: "shield",
      title: "Honest guidance",
      body: "Preparation support without approval promises or invented prices.",
    },
  ],
  serviceOverview: {
    eyebrow: "What we can help with",
    heading: "One place to start your travel plans.",
    intro:
      "Six core services, ordered the way most enquiries arrive. Pick one to see what support looks like and start a conversation.",
  },
  // Ordered by the business's stated focus: visas first, then flights,
  // study abroad, corporate travel, hotels/transfers, holidays/tours.
  services: [
    {
      icon: "file",
      title: "Visa assistance",
      scope: "Document preparation · Application guidance · SOP support",
      detail:
        "Help preparing a complete, well-documented application: document checklists, preparation of paperwork and Statement of Purpose support. Embassy decisions always remain with the embassy — we help you arrive prepared.",
      cta: "Ask about visa assistance",
      wa: waHref(
        "Hello Al-Baraq Travels, I would like help with a visa application. My destination is ____, and my planned travel window is ____.",
      ),
    },
    {
      icon: "plane",
      title: "Flight bookings",
      scope: "International · Domestic · Round-trip & one-way",
      detail:
        "Share your route, dates and number of travellers and the team will request current options on your behalf. Fares, taxes and availability are confirmed per enquiry — no guesswork published here.",
      cta: "Ask about flight bookings",
      wa: waHref(
        "Hello Al-Baraq Travels, please help me find flight options. Route: ____. Dates: ____. Travellers: ____.",
      ),
    },
    {
      icon: "school",
      title: "Study abroad",
      scope: "Course planning · Documents · Student-visa route",
      detail:
        "Guidance for studying overseas — discussing your options, preparing application documents and understanding the student-visa steps that follow an admission.",
      cta: "Ask about study abroad",
      wa: waHref(
        "Hello Al-Baraq Travels, I would like study-abroad guidance. I am interested in ____.",
      ),
    },
    {
      icon: "briefcase",
      title: "Corporate travel",
      scope: "Teams & executives · Itineraries · Coordination",
      detail:
        "Travel coordination for organisations: flights, accommodation and itineraries for teams, executives and business visitors.",
      cta: "Ask about corporate travel",
      wa: waHref(
        "Hello Al-Baraq Travels, I would like to discuss corporate travel management for my organisation.",
      ),
    },
    {
      icon: "hotel",
      title: "Hotel reservations & airport transfers",
      scope: "Accommodation · Pickups & drop-offs",
      detail:
        "Accommodation matched to your trip and budget, plus onward transfers to and from the airport so the journey stays smooth on the ground.",
      cta: "Ask about hotels & transfers",
      wa: waHref(
        "Hello Al-Baraq Travels, I need help with hotel reservations and airport transfers. Destination: ____. Dates: ____.",
      ),
    },
    {
      icon: "sun",
      title: "Holiday packages & group tours",
      scope: "Leisure getaways · Family & group travel",
      detail:
        "Leisure getaways and organised group tours for families, friends and teams — built around your dates, group size and budget.",
      cta: "Ask about holidays & tours",
      wa: waHref(
        "Hello Al-Baraq Travels, I am interested in holiday packages or group tours. I have in mind ____.",
      ),
    },
  ],
  assistance: {
    eyebrow: "Visa & study-abroad support",
    heading: "Preparation support. Never an approval promise.",
    body:
      "From document checks to application steps — and Statement of Purpose support where needed — Al-Baraq helps you present the strongest, most complete application it can. Final decisions always rest with embassies, governments and institutions.",
    points: [
      "Review of required documents before submission",
      "Help preparing paperwork and supporting letters",
      "Statement of Purpose drafting support, where applicable",
      "Guidance on the steps that follow an application",
    ],
    disclaimer:
      "No agency controls embassy, immigration or admission outcomes. Ask what preparation support fits your case.",
  },
  process: {
    eyebrow: "How it works",
    heading: "From first question to confirmed plans.",
    steps: [
      [
        "01",
        "Enquire",
        "Call, WhatsApp or use the enquiry form. Share your destination, dates, travellers and the support you need.",
      ],
      [
        "02",
        "Consult",
        "Discuss requirements, documents and any applicable service fees before committing to anything.",
      ],
      [
        "03",
        "Review options",
        "Compare the options the team brings back, and ask every question you have.",
      ],
      [
        "04",
        "Confirm",
        "Proceed once details, payment steps and policies are clear to you.",
      ],
    ],
    note: "A typical enquiry flow — the Al-Baraq team will confirm the exact steps for your request.",
  },
  why: {
    eyebrow: "Why Al-Baraq",
    heading: "A guided, honest way to plan.",
    body:
      "Travel has many moving parts. Al-Baraq gives every enquiry one clear starting point, then routes it into the right service conversation — with a person, not a queue.",
    points: [
      [
        "Start with your goal",
        "Share where you are going, when, and what support you need.",
      ],
      [
        "Understand before you commit",
        "Get practical guidance on requirements, documents and next steps first.",
      ],
      [
        "Keep it human",
        "Reach the team directly by phone or WhatsApp whenever you need help.",
      ],
    ],
  },
  about: {
    eyebrow: "About Al-Baraq Travels",
    heading: "A travel agency serving Lagos from Ikeja.",
    body:
      "Al-Baraq Travels is a travel agency in Ikeja, Lagos, supporting international and domestic travel — visa preparation, flight bookings, study-abroad plans, hotels, transfers and holidays. This website is proposed as the agency's dedicated home online, in place of a link-hub profile.",
    facts: [
      ["Location", "Ikeja, Lagos, Nigeria"],
      ["Phone & WhatsApp", "+234 802 402 9843"],
      ["Response channel", "Call or WhatsApp the listed line"],
    ],
    // CONFIRM: street address, opening hours and a preferred email.
    pendingNote:
      "Street address, opening hours and a preferred email address will be added once confirmed by the owner.",
    photoPlaceholder: {
      title: "Owner photograph",
      spec: "[Development placeholder] Replace with an approved office or team photo before launch — e.g. from the Al-Baraq Instagram grid.",
    },
  },
  destinations: {
    eyebrow: "Destination inspiration",
    heading: "Ideas for the journey ahead.",
    intro:
      "Editorial inspiration only — not live offers, prices or availability claims. Ask about any destination you have in mind.",
    items: [
      {
        name: "Dubai",
        line: "City breaks, family visits and business travel.",
        image:
          "https://images.pexels.com/photos/10549879/pexels-photo-10549879.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=78",
        alt: "Dubai coastline and skyline",
        credit: "Photo: tommy picone / Pexels",
      },
      {
        name: "London",
        line: "Study, leisure and family travel.",
        image:
          "https://images.pexels.com/photos/17152060/pexels-photo-17152060.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=78",
        alt: "Big Ben and Westminster Palace in London",
        credit: "Photo: Josh Withers / Pexels",
      },
    ],
  },
  faq: {
    eyebrow: "Before you enquire",
    heading: "Useful answers, stated carefully.",
    items: [
      [
        "Which travel services do you provide?",
        "Visa consultancy and application assistance, international and domestic flight bookings, study-abroad assistance, corporate travel management, hotel reservations, airport transfers, and holiday packages and group tours. Document preparation and Statement of Purpose support are available as part of visa and study-abroad support.",
      ],
      [
        "Can you guarantee my visa?",
        "No. Visa decisions rest with the relevant embassy, high commission or government, and no agency can control them. What Al-Baraq can do is help you prepare a complete, well-documented application.",
      ],
      [
        "How do I get a price for a trip?",
        "Prices, fares and availability change constantly, so nothing is published here. Send your route, dates and number of travellers on WhatsApp or by phone, and the team will respond with current options.",
      ],
      [
        "Can I contact you on WhatsApp?",
        "Yes. The listed number is WhatsApp-enabled — message +234 802 402 9843 or use any of the WhatsApp buttons on this page. You can also call the same number.",
      ],
      [
        "Where is the office?",
        "Al-Baraq Travels is based in Ikeja, Lagos, Nigeria. The exact street address and opening hours will be published once confirmed — until then, call or WhatsApp ahead.",
      ],
    ],
  },
  form: {
    heading: "Start your enquiry",
    note: "Demo behaviour: submitting builds a WhatsApp message from your answers — nothing is stored or sent by this page itself.",
    labels: {
      name: "Full name",
      phone: "Phone (for a reply)",
      service: "Service",
      message: "How can Al-Baraq help?",
    },
    placeholders: {
      name: "Your name",
      phone: "+234...",
      message: "Destination, preferred dates, number of travellers…",
    },
    submit: "Build my WhatsApp message",
    success:
      "WhatsApp is opening with your enquiry pre-filled — press send there to deliver it.",
    fallback: "If WhatsApp did not open, call",
    error: "Please complete the highlighted fields.",
  },
  contact: {
    eyebrow: "Start the conversation",
    heading: "Ready when you are.",
    body:
      "Share the essentials of your trip and continue the conversation wherever it suits you — WhatsApp, phone or the enquiry form.",
  },
  footer: {
    disclosure:
      "Demonstration website prepared for Al-Baraq Travels. No live booking engine, prices or availability claims are made.",
    pending:
      "Office address, opening hours and a preferred email remain to be confirmed by the owner.",
    privacy:
      "This demo enquiry form does not store or transmit your information by itself — it only prepares a WhatsApp message you send.",
  },
} as const;

export type Service = (typeof business.services)[number];
