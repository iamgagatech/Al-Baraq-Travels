// This is the single personalization swap-file. Verify every flagged value before launch.
export const business = {
  // ⚠️ CONTENT: Verified business name from the supplied lead data.
  name: "Al-Baraq Travels",
  // ⚠️ CONTENT: Location hypothesis supplied in the brief; confirm the customer-facing office.
  location: "Ikeja, Lagos",
  // ⚠️ CONTENT: Verified primary listed telephone number.
  phoneDisplay: "+234 802 402 9843",
  // ⚠️ CONTENT: Machine-readable version of the listed telephone number.
  phoneHref: "tel:+2348024029843",
  // ⚠️ CONTENT: The supplied number is not yet confirmed as WhatsApp-enabled.
  whatsappVerified: false,
  // ⚠️ CONTENT: Activate only after the owner confirms that this number receives WhatsApp messages.
  whatsappHref:
    "https://wa.me/2348024029843?text=Hello%20Al-Baraq%20Travels%2C%20I%20would%20like%20help%20planning%20a%20trip.",
  // ⚠️ CONTENT: Both supplied emails conflict, so neither is published in this demo.
  emailStatus: "Preferred email to be confirmed",
  // ⚠️ CONTENT: Supplied social profile; verify ownership before production.
  instagram: "https://www.instagram.com/albaraqtravelsng/",
  // ⚠️ CONTENT: Supplied social profile; verify ownership before production.
  linkedin: "https://www.linkedin.com/company/albaraqtravelsng/",
  // ⚠️ CONTENT: Supplied social profile; verify ownership before production.
  facebook: "https://www.facebook.com/albaraqtravel",
  // ⚠️ CONTENT: This draft website is intentionally not a production claim.
  demoLabel: "Private website preview",
  // ⚠️ CONTENT: Draft navigation labels.
  nav: ["Services", "Why Al-Baraq", "How it works", "About", "FAQ"],
  hero: {
    // ⚠️ CONTENT: Draft geographic eyebrow.
    eyebrow: "Travel guidance from Ikeja, Lagos",
    // ⚠️ CONTENT: Draft headline; owner approval required.
    headline: "Your Next Journey Starts in Ikeja.",
    // ⚠️ CONTENT: Draft supporting copy based only on supplied service categories.
    supporting:
      "From flights and hotels to visa and study-abroad assistance, get practical support for the journey ahead.",
    // ⚠️ CONTENT: Draft primary action label.
    primaryCta: "Explore our services",
    // ⚠️ CONTENT: Draft telephone action label.
    phoneCta: "Call 0802 402 9843",
    // ⚠️ CONTENT: Disabled label until WhatsApp ownership is confirmed.
    whatsappPending: "WhatsApp: confirm number",
    // ⚠️ CONTENT: Photo by Adrien Olichon on Pexels.
    image:
      "https://images.pexels.com/photos/2387803/pexels-photo-2387803.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=82",
    // ⚠️ CONTENT: Descriptive image text.
    imageAlt: "Aircraft wing above sunlit clouds",
  },
  trust: {
    // ⚠️ CONTENT: Transparent trust statement.
    heading: "Clear help, without overstated promises.",
    // ⚠️ CONTENT: The review count comes from the supplied Google listing snapshot and must be rechecked.
    reviewLine: "Rated by 3 Google reviewers in the supplied listing snapshot",
    // ⚠️ CONTENT: The rating comes from the supplied snapshot and must be rechecked.
    ratingLine: "Snapshot rating: 3.0 / 5 - verify current listing",
    // ⚠️ CONTENT: Honest demo disclosure.
    note: "No invented testimonials, prices, approvals, or availability.",
  },
  serviceOverview: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "What we can help with",
    // ⚠️ CONTENT: Draft section heading.
    heading: "One place to start your travel plans.",
    // ⚠️ CONTENT: Draft supporting copy; current service list needs owner confirmation.
    intro:
      "Choose the support you need. The current service list should be confirmed with the Al-Baraq team before launch.",
  },
  // ⚠️ CONTENT: Supplied service categories, plus study abroad from the build brief. Details need owner approval.
  services: [
    { title: "Flight bookings", detail: "Request route and date options for your next trip.", icon: "plane" },
    { title: "Visa assistance", detail: "Get guidance on application steps and document preparation.", icon: "file" },
    { title: "Study abroad", detail: "Discuss education travel goals and available support.", icon: "school" },
    { title: "Hotel reservations", detail: "Ask for accommodation options that suit your trip.", icon: "hotel" },
    { title: "Airport transfers", detail: "Plan your onward journey to or from the airport.", icon: "car" },
    { title: "Holiday packages", detail: "Explore ideas for a personal or family getaway.", icon: "sun" },
    { title: "Corporate travel", detail: "Coordinate travel requirements for your organisation.", icon: "briefcase" },
  ],
  why: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Why Al-Baraq",
    // ⚠️ CONTENT: Draft section heading.
    heading: "A more guided way to move.",
    // ⚠️ CONTENT: Draft copy avoids unverified operational claims.
    body:
      "Travel can involve many moving parts. This proposed experience gives every enquiry a clear starting point, then routes it to the right service conversation.",
    // ⚠️ CONTENT: Draft principles for owner review, not claims of an established process.
    points: [
      ["Start with your goal", "Share where you are going, when, and what support you need."],
      ["Understand the next step", "Receive practical guidance before making a commitment."],
      ["Keep the conversation human", "Call the listed Al-Baraq telephone line when you need direct help."],
    ],
  },
  explorer: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Explore services",
    // ⚠️ CONTENT: Draft section heading.
    heading: "What are you planning?",
    // ⚠️ CONTENT: Draft interaction prompt.
    prompt: "Select a service to prefill your enquiry.",
    // ⚠️ CONTENT: Draft action label.
    action: "Ask about this service",
  },
  process: {
    // ⚠️ CONTENT: Proposed process label; owner approval required.
    eyebrow: "Proposed process",
    // ⚠️ CONTENT: Proposed process heading; owner approval required.
    heading: "A clear route from question to confirmation.",
    // ⚠️ CONTENT: Proposed workflow stages; confirm with owner.
    steps: [
      ["01", "Enquire", "Tell the team your destination, dates, travellers, and the support you need."],
      ["02", "Consult", "Discuss requirements, documentation, preferences, and any applicable fees."],
      ["03", "Review options", "Consider the available options and ask questions before deciding."],
      ["04", "Confirm", "Proceed only after details, policies, payment steps, and availability are clear."],
    ],
    // ⚠️ CONTENT: Process disclaimer.
    note: "Workflow shown for demonstration. Obtain owner approval before publishing.",
  },
  about: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "About the business",
    // ⚠️ CONTENT: Factual heading based on supplied location and category.
    heading: "A travel agency serving Lagos.",
    // ⚠️ CONTENT: Business description limited to supplied facts.
    body:
      "Al-Baraq Travels is listed as a travel agency in Lagos, Nigeria, with a primary telephone number of +234 802 402 9843. Company history, team details, customer-facing address, operating hours, and credentials are to be collected from the owner.",
    // ⚠️ CONTENT: Intentional collection slot label.
    placeholderTitle: "Meet the Al-Baraq team",
    // ⚠️ CONTENT: Required asset specification.
    placeholderSpec: "1600 x 1100 px landscape",
    // ⚠️ CONTENT: Suggested owner-controlled source.
    placeholderSource: "Source: owner-approved office or team photo; check their IG grid, first 6 posts",
  },
  assistance: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Visa and study-abroad assistance",
    // ⚠️ CONTENT: Draft section heading.
    heading: "Preparation support, never an approval promise.",
    // ⚠️ CONTENT: Conservative service explanation requiring owner approval.
    body:
      "Al-Baraq can describe its guidance, document-checking support, and application preparation process here once confirmed. Visa and admission decisions always remain with the relevant embassy, government, or institution.",
    // ⚠️ CONTENT: Honest limitations copy.
    disclaimer: "No visa, admission, processing-time, or outcome guarantee is made on this demo.",
  },
  destinations: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Destination inspiration",
    // ⚠️ CONTENT: Draft section heading.
    heading: "Ideas for the journey ahead.",
    // ⚠️ CONTENT: Editorial disclosure.
    intro: "Editorial inspiration only. These are not live offers, prices, or availability claims.",
    // ⚠️ CONTENT: Editorial destinations and properly credited Pexels photography.
    items: [
      {
        name: "Dubai",
        line: "City breaks, family visits, and business travel inspiration.",
        image: "https://images.pexels.com/photos/10549879/pexels-photo-10549879.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=78",
        alt: "Dubai coastline and skyline",
        credit: "Photo: tommy picone / Pexels",
      },
      {
        name: "London",
        line: "Study, leisure, and family travel inspiration.",
        image: "https://images.pexels.com/photos/17152060/pexels-photo-17152060.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&q=78",
        alt: "Big Ben and Westminster Palace in London",
        credit: "Photo: Josh Withers / Pexels",
      },
    ],
  },
  reviews: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Reviews and trust",
    // ⚠️ CONTENT: Accurate heading about the limited supplied snapshot.
    heading: "Trust should be easy to verify.",
    // ⚠️ CONTENT: Snapshot disclosure; current rating and Google URL need verification.
    body:
      "The supplied listing snapshot shows a 3.0 rating from 3 Google reviewers. Recheck the live listing and link it here before production. Customer quotes will only appear with permission.",
    // ⚠️ CONTENT: Intentional collection slot.
    slot: "[COLLECT FROM OWNER] Approved testimonials and verified Google listing URL",
  },
  faq: {
    // ⚠️ CONTENT: Draft section label.
    eyebrow: "Before you enquire",
    // ⚠️ CONTENT: Draft section heading.
    heading: "Useful answers, stated carefully.",
    // ⚠️ CONTENT: Draft FAQs requiring owner approval.
    items: [
      ["Which travel services do you provide?", "The supplied list includes flight bookings, visa assistance, hotel reservations, airport transfers, holiday packages, corporate travel, and proposed study-abroad support. Confirm the current list with the team."],
      ["Can Al-Baraq guarantee my visa?", "No. Government and embassy decisions are outside any travel agency's control. Ask what preparation support is currently available."],
      ["How much will my trip cost?", "Pricing, fees, taxes, and availability change. Send your route, dates, and traveller details to request current options."],
      ["Where is the office?", "Ikeja, Lagos is the proposed customer-facing context. The exact current office address must be confirmed before launch."],
      ["Can I contact you on WhatsApp?", "The listed phone number has not yet been confirmed as WhatsApp-enabled. Please call +234 802 402 9843 for now."],
    ],
  },
  form: {
    // ⚠️ CONTENT: Draft form heading.
    heading: "Start your travel enquiry.",
    // ⚠️ CONTENT: Transparent demo delivery notice.
    note: "Demo preview: this form validates your enquiry but does not transmit personal data until Al-Baraq confirms a delivery email.",
    // ⚠️ CONTENT: Form field labels and options.
    labels: { name: "Full name", phone: "Phone number", service: "Service", message: "How can Al-Baraq help?" },
    // ⚠️ CONTENT: Form placeholders.
    placeholders: { name: "Your name", phone: "+234...", message: "Destination, preferred dates, and number of travellers" },
    // ⚠️ CONTENT: Form action label.
    submit: "Review my enquiry",
    // ⚠️ CONTENT: Successful demo validation message.
    success: "Your enquiry is ready. Because this is a private demo, nothing was sent. Call Al-Baraq to continue.",
    // ⚠️ CONTENT: Error state copy.
    error: "Please complete every field so the team has enough detail to help.",
  },
  finalCta: {
    // ⚠️ CONTENT: Draft final CTA label.
    eyebrow: "Ready when you are",
    // ⚠️ CONTENT: Draft final CTA heading.
    heading: "Bring the next journey into focus.",
    // ⚠️ CONTENT: Draft final CTA supporting copy.
    body: "Choose a service, share the essentials, and start a direct conversation with Al-Baraq Travels.",
  },
  footer: {
    // ⚠️ CONTENT: Demo disclosure.
    note: "Demonstration website by GagaTech. Not authorised for production publishing.",
    // ⚠️ CONTENT: Privacy copy for this non-transmitting demo.
    privacy: "Privacy: this demo form does not send or store your information.",
    // ⚠️ CONTENT: Pending details disclosure.
    pending: "Office address, preferred email, hours, and WhatsApp status require owner confirmation.",
  },
} as const;

export type Service = (typeof business.services)[number];