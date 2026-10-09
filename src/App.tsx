import { FormEvent, ReactNode, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronDown,
  CircleAlert,
  FileCheck2,
  GraduationCap,
  Hotel,
  MapPin,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  SunMedium,
  X,
} from "lucide-react";
import { business, waHref } from "./data/business";
import { cn } from "./utils/cn";

/* ------------------------------------------------------------------ */
/* Brand icon glyphs (Simple Icons / Bootstrap Icons paths, inline to  */
/* avoid extra dependencies; lucide v1 ships no brand icons).          */
/* ------------------------------------------------------------------ */

const GLYPHS = {
  whatsapp: {
    viewBox: "0 0 24 24",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  instagram: {
    viewBox: "0 0 24 24",
    d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
  facebook: {
    viewBox: "0 0 24 24",
    d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  linkedin: {
    viewBox: "0 0 16 16",
    d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
} as const;

type GlyphName = keyof typeof GLYPHS;

function Glyph({ name, size = 18, className }: { name: GlyphName; size?: number; className?: string }) {
  const glyph = GLYPHS[name];
  return (
    <svg viewBox={glyph.viewBox} width={size} height={size} fill="currentColor" aria-hidden="true" className={className}>
      <path d={glyph.d} />
    </svg>
  );
}

const socialGlyph: Record<string, GlyphName> = { Instagram: "instagram", LinkedIn: "linkedin", Facebook: "facebook" };
const serviceIcon = { file: FileCheck2, plane: Plane, school: GraduationCap, briefcase: BriefcaseBusiness, hotel: Hotel, sun: SunMedium };
const trustIcon = { pin: MapPin, phone: Phone, shield: ShieldCheck };

/* ------------------------------------------------------------------ */
/* Shared primitives                                                    */
/* ------------------------------------------------------------------ */

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("mb-4 text-xs font-bold uppercase tracking-[0.22em]", light ? "text-brass-light" : "text-brass-deep")}>
      {children}
    </p>
  );
}

function Reveal({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                               */
/* ------------------------------------------------------------------ */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 text-white transition-colors duration-300", scrolled || open ? "bg-forest-deep" : "bg-transparent")}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="font-display flex min-h-11 items-center text-2xl font-bold tracking-tight sm:text-[1.7rem]" aria-label={`${business.name} — back to top`}>
          Al-Baraq <span className="text-brass">Travels</span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {business.nav.map(([label, href]) => (
            <a key={href} href={href} className="flex min-h-11 items-center text-xs font-semibold tracking-wide text-white/85 hover:text-brass-light">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-3">
          <a href={business.phoneHref} className="hidden min-h-11 items-center gap-2 px-2 text-sm font-bold hover:text-brass-light md:inline-flex">
            <Phone size={17} aria-hidden="true" /> {business.phoneDisplay}
          </a>
          <a
            href={business.whatsapp.generalHref}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 bg-wa-deep px-4 text-sm font-bold text-white transition-colors hover:bg-wa-dark lg:inline-flex"
          >
            <Glyph name="whatsapp" size={16} /> WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid min-h-11 min-w-11 place-items-center xl:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 bg-forest-deep px-5 pb-7 pt-1 xl:hidden" aria-label="Mobile">
          {business.nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-white/10 text-base font-semibold text-white"
            >
              {label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={business.whatsapp.generalHref}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 bg-wa-deep text-sm font-bold text-white transition-colors hover:bg-wa-dark"
            >
              <Glyph name="whatsapp" size={17} /> Chat on WhatsApp
            </a>
            <a href={business.phoneHref} className="flex min-h-12 items-center justify-center gap-2 border border-white/40 text-sm font-bold text-white">
              <Phone size={17} aria-hidden="true" /> {business.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-forest text-white">
      <motion.img
        src={business.hero.image}
        alt={business.hero.imageAlt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        initial={reduceMotion ? false : { scale: 1.05 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,30,24,0.93)_0%,rgba(9,30,24,0.74)_48%,rgba(9,30,24,0.28)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,30,24,0.85)_0%,rgba(9,30,24,0)_52%)]" aria-hidden="true" />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.12 }}
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-brass-light">{business.hero.eyebrow}</p>
          <p className="font-display text-3xl font-bold text-brass-light sm:text-5xl">{business.name}</p>
          <h1 className="font-display mt-3 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-7xl lg:text-[5.6rem]">
            {business.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{business.hero.supporting}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#services"
              className="cta-sweep inline-flex min-h-12 items-center justify-center gap-2 bg-ivory px-6 py-3 text-sm font-bold text-forest"
            >
              {business.hero.primaryCta} <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              href={business.whatsapp.generalHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-wa-deep px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-wa-dark"
            >
              <Glyph name="whatsapp" size={17} /> {business.hero.whatsappCta}
            </a>
            <a href={business.phoneHref} className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-bold text-white/90 underline-offset-4 hover:text-brass-light hover:underline">
              <Phone size={16} aria-hidden="true" /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/20 bg-forest-deep/75 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:block">
        {business.demoLabel}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip — honest statements only, no unverifiable statistics     */
/* ------------------------------------------------------------------ */

function TrustStrip() {
  return (
    <aside className="bg-forest-deep text-white" aria-label="Why travellers can trust Al-Baraq">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:py-12">
        {business.trustStrip.map((item) => {
          const Icon = trustIcon[item.icon];
          return (
            <div key={item.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-brass/40 text-brass">
                <Icon size={19} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-bold">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-white/70">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Services — ordered by the business's stated focus, each with a       */
/* context-specific WhatsApp enquiry action                             */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <Reveal id="services" className="scroll-mt-24 bg-ivory px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>{business.serviceOverview.eyebrow}</Eyebrow>
            <h2 className="font-display max-w-2xl text-4xl font-semibold leading-none tracking-tight sm:text-6xl">
              {business.serviceOverview.heading}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-moss lg:justify-self-end">{business.serviceOverview.intro}</p>
        </div>
        <div className="mt-14 border-t border-forest/20">
          {business.services.map((service, index) => {
            const Icon = serviceIcon[service.icon];
            return (
              <article key={service.title} className="grid gap-5 border-b border-forest/20 py-9 lg:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-8 lg:py-11">
                <span className="hidden pt-2 text-sm font-bold text-brass-deep lg:block">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    <Icon size={24} strokeWidth={1.5} className="mr-3 inline-block align-[-3px] text-forest" aria-hidden="true" />
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-brass-deep">{service.scope}</p>
                </div>
                <div>
                  <p className="max-w-xl text-base leading-7 text-moss">{service.detail}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href={service.wa}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-sweep inline-flex min-h-11 items-center justify-center gap-2 bg-forest px-5 text-sm font-bold text-white hover:text-forest"
                    >
                      <Glyph name="whatsapp" size={15} /> {service.cta}
                    </a>
                    <a href={business.phoneHref} className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-brass-deep hover:text-forest">
                      or call {business.phoneDisplay}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Visa & study-abroad spotlight                                        */
/* ------------------------------------------------------------------ */

function Assistance() {
  return (
    <Reveal id="assistance" className="scroll-mt-24 bg-forest px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="edge-lit mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <Eyebrow light>{business.assistance.eyebrow}</Eyebrow>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">{business.assistance.heading}</h2>
            <p className="mt-7 max-w-lg leading-7 text-white/80">{business.assistance.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={business.services[0].wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-wa-deep px-6 text-sm font-bold text-white transition-colors hover:bg-wa-dark"
              >
                <Glyph name="whatsapp" size={17} /> Ask about visa support
              </a>
              <a
                href={business.phoneHref}
                className="cta-sweep inline-flex min-h-12 items-center justify-center gap-2 border border-white/60 px-6 text-sm font-bold hover:text-forest"
              >
                <Phone size={17} aria-hidden="true" /> Call the team
              </a>
            </div>
          </div>
          <div>
            <ul className="border-t border-white/20">
              {business.assistance.points.map((point) => (
                <li key={point} className="flex gap-3 border-b border-white/20 py-4 text-sm leading-6 text-white/85">
                  <Check size={18} className="mt-0.5 shrink-0 text-brass" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-l-2 border-brass pl-5 text-sm font-semibold leading-6 text-brass-light">
              {business.assistance.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                              */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <Reveal id="process" className="scroll-mt-24 bg-ivory px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{business.process.eyebrow}</Eyebrow>
        <h2 className="font-display max-w-3xl text-4xl font-semibold leading-none sm:text-6xl">{business.process.heading}</h2>
        <div className="mt-14 grid border-l border-t border-forest/20 sm:grid-cols-2 lg:grid-cols-4">
          {business.process.steps.map(([number, title, body]) => (
            <div key={number} className="border-b border-r border-forest/20 p-6 sm:min-h-64 sm:p-7">
              <span className="font-display text-3xl text-brass-deep">{number}</span>
              <h3 className="mt-10 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-moss">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-moss">{business.process.note}</p>
          <a href={business.whatsapp.generalHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-forest underline-offset-4 hover:text-brass-deep hover:underline">
            Start at step one — send a WhatsApp message <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Why Al-Baraq                                                         */
/* ------------------------------------------------------------------ */

function Why() {
  return (
    <Reveal id="why" className="bg-sand px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Eyebrow>{business.why.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">{business.why.heading}</h2>
          <p className="mt-6 max-w-md leading-7 text-moss">{business.why.body}</p>
        </div>
        <div className="border-t border-forest/20">
          {business.why.points.map(([title, body], index) => (
            <div key={title} className="grid gap-3 border-b border-forest/20 py-7 sm:grid-cols-[56px_1fr]">
              <span className="font-display text-2xl text-brass-deep">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-moss">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                                */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <Reveal id="about" className="scroll-mt-24 bg-clay px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div className="edge-lit grid min-h-[380px] place-items-center bg-forest-deep p-8 text-center text-white" role="img" aria-label="Development placeholder for an owner-supplied photograph">
          <div>
            <Camera className="mx-auto text-brass" size={42} strokeWidth={1.2} aria-hidden="true" />
            <p className="font-display mt-5 text-3xl font-semibold">{business.about.photoPlaceholder.title}</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/60">{business.about.photoPlaceholder.spec}</p>
          </div>
        </div>
        <div className="lg:pl-8">
          <Eyebrow>{business.about.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">{business.about.heading}</h2>
          <p className="mt-6 max-w-xl leading-7 text-moss-dark">{business.about.body}</p>
          <dl className="mt-8 border-t border-forest/25">
            {business.about.facts.map(([term, value]) => (
              <div key={term} className="grid gap-1 border-b border-forest/25 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brass-deep">{term}</dt>
                <dd className="text-sm font-semibold text-forest">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs leading-5 text-moss-dark">{business.about.pendingNote}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {business.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${business.name} on ${social.label} (opens in a new tab)`}
                className="grid min-h-11 min-w-11 place-items-center border border-forest/40 text-forest transition-colors hover:bg-forest hover:text-brass-light"
              >
                <Glyph name={socialGlyph[social.label]} size={18} />
              </a>
            ))}
            <a href={business.phoneHref} className="cta-sweep inline-flex min-h-11 items-center gap-2 bg-forest px-5 text-sm font-bold text-white hover:text-forest">
              <Phone size={16} aria-hidden="true" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Destinations — editorial inspiration only                            */
/* ------------------------------------------------------------------ */

function Destinations() {
  return (
    <Reveal id="destinations" className="bg-ivory px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{business.destinations.eyebrow}</Eyebrow>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">{business.destinations.heading}</h2>
          <p className="max-w-md text-sm leading-6 text-moss">{business.destinations.intro}</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {business.destinations.items.map((item) => (
            <figure key={item.name} className="group relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-ink/90 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h3 className="font-display text-4xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-white/80">{item.line}</p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-white/50">{item.credit}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

function Faq() {
  return (
    <Reveal id="faq" className="scroll-mt-24 bg-ivory px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <Eyebrow>{business.faq.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-none sm:text-6xl">{business.faq.heading}</h2>
        </div>
        <div className="border-t border-forest/20">
          {business.faq.items.map(([question, answer]) => (
            <details key={question} className="group border-b border-forest/20">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-4 text-base font-bold">
                <span>{question}</span>
                <ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={19} aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-8 text-sm leading-7 text-moss">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Contact + enquiry form (WhatsApp hand-off — no silent data capture)  */
/* ------------------------------------------------------------------ */

type FormErrors = Partial<Record<"name" | "phone" | "service" | "message", string>>;

function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: FormErrors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (phone && !/^\+?[0-9()\-\s.]{7,17}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!service) next.service = "Please choose a service.";
    if (message.length < 10) next.message = "Please add a few more details (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    const text = [
      `Hello Al-Baraq Travels, my name is ${name}.`,
      `Service: ${service}.`,
      message,
      phone ? `You can reach me on ${phone}.` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waHref(text), "_blank", "noopener");
    setStatus("sent");
  }

  const field =
    "min-h-12 w-full border border-white/30 bg-white/5 px-4 text-sm text-white placeholder:text-white/45 focus:border-brass";
  const errorText = "mt-2 flex items-start gap-1.5 text-xs leading-5 text-[#f3c6b7]";

  return (
    <form id="enquiry-form" onSubmit={submit} noValidate className="edge-lit bg-forest-deep/60 p-6 text-white sm:p-8">
      <h3 className="font-display text-3xl font-semibold">{business.form.heading}</h3>
      <p className="mt-3 text-xs leading-5 text-white/60">{business.form.note}</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-bold uppercase tracking-wider">
          {business.form.labels.name}
          <input
            required
            name="name"
            autoComplete="name"
            placeholder={business.form.placeholders.name}
            aria-invalid={Boolean(errors.name)}
            className={cn(field, "mt-2")}
          />
          {errors.name && (
            <p className={errorText}>
              <CircleAlert size={13} className="mt-0.5 shrink-0" aria-hidden="true" /> {errors.name}
            </p>
          )}
        </label>
        <label className="text-xs font-bold uppercase tracking-wider">
          {business.form.labels.phone}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={business.form.placeholders.phone}
            aria-invalid={Boolean(errors.phone)}
            className={cn(field, "mt-2")}
          />
          {errors.phone && (
            <p className={errorText}>
              <CircleAlert size={13} className="mt-0.5 shrink-0" aria-hidden="true" /> {errors.phone}
            </p>
          )}
        </label>
      </div>
      <label className="mt-5 block text-xs font-bold uppercase tracking-wider">
        {business.form.labels.service}
        <select required name="service" defaultValue="" aria-invalid={Boolean(errors.service)} className={cn(field, "mt-2 [&>option]:text-forest")}>
          <option value="" disabled>
            Select a service
          </option>
          {business.services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className={errorText}>
            <CircleAlert size={13} className="mt-0.5 shrink-0" aria-hidden="true" /> {errors.service}
          </p>
        )}
      </label>
      <label className="mt-5 block text-xs font-bold uppercase tracking-wider">
        {business.form.labels.message}
        <textarea
          required
          name="message"
          rows={4}
          placeholder={business.form.placeholders.message}
          aria-invalid={Boolean(errors.message)}
          className={cn(field, "mt-2 py-3")}
        />
        {errors.message && (
          <p className={errorText}>
            <CircleAlert size={13} className="mt-0.5 shrink-0" aria-hidden="true" /> {errors.message}
          </p>
        )}
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-wa-deep px-6 text-sm font-bold text-white transition-colors hover:bg-wa-dark"
      >
        <Glyph name="whatsapp" size={17} /> {business.form.submit}
      </button>
      <div aria-live="polite">
        {status === "sent" && (
          <div className="mt-5 border border-brass/40 p-4 text-sm leading-6">
            <p className="flex gap-2 text-brass-light">
              <Check className="mt-1 shrink-0" size={15} aria-hidden="true" /> {business.form.success}
            </p>
            <p className="mt-2 text-white/70">
              {business.form.fallback}{" "}
              <a href={business.phoneHref} className="font-bold text-white underline underline-offset-2">
                {business.phoneDisplay}
              </a>
              .
            </p>
          </div>
        )}
        {status === "error" && (
          <p className="mt-5 flex gap-2 text-sm text-[#f3c6b7]">
            <CircleAlert className="mt-0.5 shrink-0" size={15} aria-hidden="true" /> {business.form.error}
          </p>
        )}
      </div>
    </form>
  );
}

function Contact() {
  return (
    <Reveal id="contact" className="scroll-mt-24 bg-forest-deep px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Eyebrow light>{business.contact.eyebrow}</Eyebrow>
          <h2 className="font-display text-5xl font-semibold leading-none sm:text-6xl">{business.contact.heading}</h2>
          <p className="mt-6 max-w-md leading-7 text-white/75">{business.contact.body}</p>
          <ul className="mt-9 border-t border-white/20 text-sm">
            <li className="grid gap-1 border-b border-white/20 py-5 sm:grid-cols-[140px_1fr]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brass">WhatsApp</span>
              <span>
                <a href={business.whatsapp.generalHref} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-brass-light">
                  <Glyph name="whatsapp" size={16} /> {business.whatsapp.display} — message us
                </a>
              </span>
            </li>
            <li className="grid gap-1 border-b border-white/20 py-5 sm:grid-cols-[140px_1fr]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brass">Phone</span>
              <span>
                <a href={business.phoneHref} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-brass-light">
                  <Phone size={16} aria-hidden="true" /> {business.phoneDisplay}
                </a>
              </span>
            </li>
            <li className="grid gap-1 border-b border-white/20 py-5 sm:grid-cols-[140px_1fr]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brass">Location</span>
              <span className="inline-flex min-h-11 items-center gap-2">
                <MapPin size={16} className="text-brass" aria-hidden="true" /> {business.location}, {business.country}
              </span>
            </li>
            <li className="grid gap-2 border-b border-white/20 py-5 sm:grid-cols-[140px_1fr]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brass">Follow</span>
              <span className="flex items-center gap-2">
                {business.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${business.name} on ${social.label} (opens in a new tab)`}
                    className="grid min-h-11 min-w-11 place-items-center border border-white/25 transition-colors hover:border-brass hover:text-brass-light"
                  >
                    <Glyph name={socialGlyph[social.label]} size={17} />
                  </a>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <InquiryForm />
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep px-5 pb-24 pt-12 text-white sm:px-8 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.8fr]">
          <div>
            <p className="font-display text-3xl font-bold">
              Al-Baraq <span className="text-brass">Travels</span>
            </p>
            <p className="mt-2 text-sm text-white/60">
              {business.location}, {business.country}
            </p>
            <div className="mt-3 flex flex-col">
              <a href={business.phoneHref} className="inline-flex min-h-11 items-center text-sm font-semibold text-brass-light hover:underline hover:underline-offset-2">
                {business.phoneDisplay}
              </a>
              <a
                href={business.whatsapp.generalHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brass-light hover:underline hover:underline-offset-2"
              >
                <Glyph name="whatsapp" size={15} /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Explore</p>
            <ul className="mt-3">
              {business.nav.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="inline-flex min-h-9 items-center text-sm text-white/70 hover:text-brass-light">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Follow</p>
            <div className="mt-3 flex gap-2">
              {business.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${business.name} on ${social.label} (opens in a new tab)`}
                  className="grid min-h-11 min-w-11 place-items-center border border-white/20 transition-colors hover:border-brass hover:text-brass-light"
                >
                  <Glyph name={socialGlyph[social.label]} size={17} />
                </a>
              ))}
            </div>
            <a href="#top" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-white/70 hover:text-brass-light">
              Back to top <ArrowRight size={15} className="-rotate-90" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-5 text-white/50">
          <p>
            © {new Date().getFullYear()} {business.name}. {business.footer.disclosure}
          </p>
          <p className="mt-2">{business.footer.privacy}</p>
          <p className="mt-2">{business.footer.pending}</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Floating WhatsApp action                                             */
/* ------------------------------------------------------------------ */

function FloatingWhatsApp() {
  return (
    <a
      href={business.whatsapp.generalHref}
      target="_blank"
      rel="noreferrer"
      aria-label={business.whatsapp.floatLabel}
      title={business.whatsapp.floatLabel}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg shadow-forest-ink/40 transition-colors hover:bg-wa-deep sm:right-6"
    >
      <Glyph name="whatsapp" size={27} />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-forest"
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <TrustStrip />
      <main id="main">
        <Services />
        <Assistance />
        <Process />
        <Why />
        <About />
        <Destinations />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
