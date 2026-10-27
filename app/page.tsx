import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(661) 437-6772";
const TEL = "tel:+16614376772";
const SMS = "sms:+16614376772";
const LIC = "Lic# 1149218";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Valley%20Oak%20Landscape%20Co&query_place_id=ChIJSSjpZ2wdEkUREXp_zn80jqQ";
const IG = "https://www.instagram.com/valley_oak_landscape";
const FB = "https://www.facebook.com/p/Valley-oak-landscape-61560608361475";

const services = [
  { icon: "home", name: "New-Construction Yards", text: "Bought a new home with a dirt yard? We plan and finish the whole thing: patio, sod, plants and rock, front and back.", img: "/images/p6.jpg", alt: "Newly finished front yard with green sod at a new-construction home" },
  { icon: "layers", name: "Concrete Patios", text: "Backyard patios poured clean and level, laid out so you get room for a table, a grill and space for the kids.", img: "/images/p13.jpg", alt: "Fresh concrete patio poured behind a new home" },
  { icon: "route", name: "Driveway Extensions", text: "New-build driveways are often too narrow. We widen them so two cars, a trailer or the trash bins actually fit.", img: "/images/p2.jpg", alt: "Front yard with widened driveway, curbed lawn and rock beds" },
  { icon: "sprout", name: "Sod & Sprinklers", text: "Fresh sod over a new sprinkler system, set up so the lawn takes root and stays green through Bakersfield summers.", img: "/images/p11.jpg", alt: "New sod lawn along a block wall with young trees" },
  { icon: "ruler", name: "Decorative Curbing", text: "Clean concrete borders that separate lawn from rock and planting beds, and keep the edges looking sharp for years.", img: "/images/p7.jpg", alt: "Curved concrete curbing between lawn and decorative rock" },
  { icon: "leaf", name: "Artificial Turf", text: "Low-water turf for side yards, play areas and backyards that look green all year without mowing.", img: "/images/p8.jpg", alt: "Artificial turf side yard along a wood fence" },
  { icon: "hammer", name: "Concrete Steps & Demo", text: "Old, cracked concrete broken out and hauled away, with new steps and stairs poured in its place.", img: "/images/p12.jpg", alt: "Circular concrete pad in a newly landscaped yard" },
];

const reviews = [
  { name: "Samantha H.", job: "New-construction yard", text: "Our yard was just dirt. Now we have a patio and green sod, and Cristian, the owner, was patient with every question we had." },
  { name: "Juan H.", job: "Driveway extension + backyard, Gossamer Grove", text: "They extended our narrow new-build driveway and added a concrete patio, turf and landscaping. Honest, reasonable prices and multiple options." },
  { name: "Christian M.", job: "Concrete backyard + driveway", text: "Clean, durable concrete work that gave my kids a lot more room to play." },
  { name: "Robbie B.", job: "Sod, sprinklers & curbing", text: "They did even better than I imagined." },
  { name: "Jess", job: "Front yard landscaping", text: "Cristian listened to what we wanted and paid close attention to the details." },
  { name: "Javier V.", job: "Concrete steps", text: "They demolished the old concrete and poured brand new steps." },
];

const steps = [
  { title: "Call or text", text: "Tell Cristian about your yard and send a few photos if you have them." },
  { title: "On-site visit", text: "He walks the property with you and lays out a few options at different prices." },
  { title: "Your quote", text: "You get an honest price for the option you choose. No pressure." },
  { title: "We build it", text: "Concrete first, then sprinklers, sod, turf, curbing and rock." },
  { title: "Final walk-through", text: "We look at every detail together before the crew packs up." },
];

const faqs = [
  { q: "Do you work on brand-new homes?", a: "That's our specialty. Many of our customers just closed on a new Lennar or Gossamer Grove home with a bare-dirt yard, and we take it all the way to a finished front and backyard." },
  { q: "Are you licensed?", a: `Yes. Valley Oak Landscape Co. is licensed, ${LIC}.` },
  { q: "Do you give estimates?", a: "Yes. Call or text (661) 437-6772. Cristian will come out, look at the yard and give you a few options with honest pricing." },
  { q: "Can you widen my driveway?", a: "Yes. Driveway extensions are one of our most requested jobs, especially on new builds where the factory driveway is too narrow for two cars." },
  { q: "Turf or real grass?", a: "We install both. Sod with sprinklers gives you a real lawn; artificial turf saves water and work. Cristian will help you decide which fits each part of your yard." },
  { q: "What are your hours?", a: "Monday through Saturday, 6 a.m. to 6 p.m. Closed Sunday." },
];

const gallery = [
  { src: "/images/p1.jpg", alt: "Front yard with concrete walkway, sod and decorative rock", w: 810, h: 1080 },
  { src: "/images/p4.jpg", alt: "Backyard artificial turf with patio seating", w: 810, h: 1080 },
  { src: "/images/p5.jpg", alt: "Lawn with palm trees and a concrete walkway at a commercial building", w: 1440, h: 1080 },
  { src: "/images/p9.jpg", alt: "Paver path through new sod in a backyard", w: 810, h: 1080 },
  { src: "/images/p14.jpg", alt: "Front yard turf with a young tree and rock border", w: 810, h: 1080 },
  { src: "/images/p3.jpg", alt: "Backyard lawn with lit planting bed at dusk", w: 1440, h: 1080 },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Valley Oak Landscape Co.",
  telephone: "+1-661-437-6772",
  url: "https://valley-oak-landscape-co.growlocalvisibility.com",
  image: "/images/p3.jpg",
  founder: { "@type": "Person", name: "Cristian" },
  areaServed: "Bakersfield, CA",
  address: { "@type": "PostalAddress", addressLocality: "Bakersfield", addressRegion: "CA", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 5, reviewCount: 7 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "06:00", closes: "18:00" }],
  sameAs: [IG, FB],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Valley Oak Landscape Co. home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white"><Icon name="tree" className="h-6 w-6" /></span>
            <span className="font-heading text-xl font-extrabold text-brand-deep">Valley Oak <span className="font-semibold text-muted">Landscape Co.</span></span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="ring-phone hidden items-center gap-2 font-bold text-brand-deep md:inline-flex"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex">Free Estimate</a>
            <a href={TEL} className="grid h-11 w-11 place-items-center rounded-full bg-cta text-ink sm:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative isolate overflow-hidden">
          <Image src="/images/p3.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[oklch(0.2_0.04_155/0.88)] via-[oklch(0.2_0.04_155/0.7)] to-[oklch(0.2_0.04_155/0.25)]" />
          <div className="mx-auto max-w-6xl px-5 py-20 md:px-6 md:py-28">
            <div className="max-w-2xl text-white">
              <h1 className="text-[clamp(2.3rem,5vw,3.75rem)]">Landscaping &amp; Concrete for New Homes in Bakersfield</h1>
              <p className="mt-5 text-lg text-white/90 md:text-xl">From bare dirt to a finished backyard. Owner Cristian and his crew pour patios, widen driveways and lay sod, sprinklers, curbing and turf.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta ring-phone text-lg"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                <a href={SMS} className="btn border-[1.5px] border-white/50 text-lg text-white hover:border-white"><Icon name="text" className="h-5 w-5" />Text photos of your yard</a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-semibold">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline"><Stars className="h-5 w-5" /> 5.0 on Google</a>
                <span className="inline-flex items-center gap-1.5"><Icon name="shield" className="h-5 w-5 text-cta" /> Licensed · {LIC}</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="user" className="h-5 w-5 text-cta" /> Owner-operated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-line bg-white" aria-label="Quick facts">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb", t: "5.0 stars", d: "Every Google review" },
              { icon: "shield", t: LIC, d: "Licensed contractor" },
              { icon: "home", t: "New-build experts", d: "Lennar, Gossamer Grove" },
              { icon: "clock", t: "Mon–Sat 6–6", d: "Early starts, beat the heat" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name={x.icon} className="h-5 w-5" /></span>
                <span><span className="block font-bold leading-tight">{x.t}</span><span className="text-sm text-muted">{x.d}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="max-w-2xl text-3xl text-brand-deep md:text-5xl">Everything your new yard needs, from one crew</h2>
            <p className="mt-4 max-w-2xl text-muted">Concrete and landscaping under one roof means one schedule, one price and no finger-pointing between contractors.</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.name} className={`reveal lift overflow-hidden rounded-2xl border border-line bg-white ${i === 0 ? "ring-2 ring-brand/30" : ""}`}>
                  <div className="relative aspect-[4/3]">
                    <Image src={s.img} alt={s.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="flex items-center gap-2 text-xl text-brand-deep"><Icon name={s.icon} className="h-5 w-5 text-brand" />{s.name}</h3>
                    <p className="mt-2 text-[17px] text-muted">{s.text}</p>
                    <a href={TEL} className="mt-4 inline-flex items-center gap-1.5 font-bold text-brand">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl text-brand-deep md:text-5xl">Rated 5.0 from 7 Google reviews</h2>
                <p className="mt-3 max-w-xl text-muted">Every review this year. Homeowners mention the same things: Cristian is patient, offers real options and prices honestly.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost shrink-0">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-7">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[17px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-sm"><span className="font-bold">{r.name}</span><span className="block text-muted">{r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/p5.jpg" alt="Finished lawn with palm trees and walkway installed by Valley Oak Landscape Co." fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl text-brand-deep md:text-5xl">Meet Cristian</h2>
              <p className="mt-5">Valley Oak Landscape Co. is owned and run by Cristian. Most of his customers have just moved into a brand-new Bakersfield home and are looking at a yard of bare dirt and a driveway that&apos;s a little too narrow.</p>
              <p className="mt-4">He takes the time to explain every option, answers the same question twice without a sigh, and gives you honest prices. Then his crew builds it right, from the concrete to the last roll of sod.</p>
              <ul className="mt-8 space-y-4">
                {[
                  { t: "Patient with every question", d: "You'll understand the plan before work starts." },
                  { t: "More than one option", d: "Pick what fits your budget and how you use the yard." },
                  { t: "Built to last", d: "Clean, durable concrete and lawns that take root." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name="check" className="h-4 w-4" /></span>
                    <span><span className="block font-bold">{d.t}</span><span className="text-muted">{d.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-brand-deep py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <h2 className="text-3xl text-white md:text-5xl">How it works</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-cta font-heading text-lg font-extrabold text-ink">{i + 1}</span>
                  <h3 className="mt-4 text-lg text-white">{s.title}</h3>
                  <p className="mt-1 text-[16px] text-white/80">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="text-3xl text-brand-deep md:text-5xl">Recent yards around Bakersfield</h2>
              <div className="flex gap-3">
                <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Valley Oak on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand hover:border-brand"><Icon name="instagram" className="h-5 w-5" /></a>
                <a href={FB} target="_blank" rel="noopener noreferrer" aria-label="Valley Oak on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand hover:border-brand"><Icon name="facebook" className="h-5 w-5" /></a>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {gallery.map((g) => (
                <div key={g.src} className="reveal relative aspect-square overflow-hidden rounded-xl">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-300 hover:scale-[1.03]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl text-brand-deep md:text-5xl">Serving Bakersfield</h2>
              <p className="mt-4 text-muted">We work across Bakersfield, with a lot of our jobs in the city&apos;s newer subdivisions. Not sure if you&apos;re in range? Just call.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Bakersfield", "Gossamer Grove", "Lennar communities", "New-build subdivisions"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[15px] font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
              <p className="mt-8 font-semibold">Hours</p>
              <p className="text-muted">Monday – Saturday, 6 a.m. – 6 p.m. · Sunday closed</p>
            </div>
            <div className="min-h-[340px] overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Bakersfield, CA" src="https://maps.google.com/maps?q=Bakersfield%2C%20CA&z=11&output=embed" className="h-full min-h-[340px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <h2 className="text-3xl text-brand-deep md:text-5xl">Common questions</h2>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="plus text-brand"><Icon name="plus" className="h-5 w-5" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl text-white md:text-5xl">Ready for a finished yard? Call Cristian.</h2>
              <p className="mt-3 text-white/85">Mon–Sat 6 a.m.–6 p.m. · Texts welcome</p>
            </div>
            <a href={TEL} className="btn btn-cta ring-phone text-lg"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
          </div>
        </section>
      </main>

      <footer className="pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-extrabold text-brand-deep">Valley Oak Landscape Co.</p>
            <p className="mt-2 max-w-sm text-[16px] text-muted">Landscaping, concrete and design for Bakersfield homes. {LIC}.</p>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Contact</p>
            <p className="mt-2"><a href={TEL} className="font-semibold text-brand">{PHONE}</a></p>
            <p className="mt-1 text-muted">Bakersfield, CA</p>
            <p className="mt-1 text-muted">Mon–Sat 6–6 · Sun closed</p>
            <p className="mt-1"><a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-brand underline">Google listing</a></p>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Services</p>
            <ul className="mt-2 space-y-1 text-muted">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-6">© {new Date().getFullYear()} Valley Oak Landscape Co. · Bakersfield, California</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
