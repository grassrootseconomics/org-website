import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support Grassroots Economics through donations, volunteering, or collaboration. Help communities build their own economies.",
};

const roles = [
  {
    title: "Pool Stewards",
    description:
      "Lead the way in designing, implementing and monitoring your own Commitment Pool!",
    image: "/images/get-involved/availabeimg1.webp",
  },
  {
    title: "Researchers",
    description:
      "Gather and analyze community resource pooling related historical information and data. Research into related fields and work to monitor project implementation and effectiveness. Publish your findings and help expand on our work and take it to other communities around the world.",
    image: "/images/get-involved/availableimg2.webp",
  },
  {
    title: "Grow the Network",
    description:
      "Work closely with your community, coordinate internal resources as well as external resources in common resource pools!",
    image: "/images/get-involved/availableimg3.webp",
  },
  {
    title: "Developers",
    description:
      "Lead the way in designing, implementing and monitoring our diverse projects from a tech perspective.",
    image: "/images/get-involved/availableimg4.webp",
  },
];

const testimonials = [
  {
    quote:
      "These last days with Grassroots Economics have been an eye-opener. We\u2019ve seen commitment pools improve individuals\u2019 capacity to save, strengthen social relations, increase community cohesion and help communities articulate their interest towards local government. Thank you all for very inspiring days and thought-provoking discussions!",
    author: "Ester Barinaga",
    title: "Professor in Social Innovation at the Copenhagen Business School",
    image: "/images/get-involved/carousel1.webp",
  },
  {
    quote:
      "I\u2019ve learned the skills I need to bring commitment pools to marginalized communities in Benin.",
    author: "Marion Cauvet",
    title:
      'Student in the MSc "Agricultural Development" at the University of Copenhagen',
    image: "/images/get-involved/carousel2.webp",
  },
  {
    quote:
      "The course taught me the practical steps in designing and implementing a Commitment Pool.",
    author: "AbdulHakim Maina",
    title: "Working with the College of Islamic Studies, Kenya",
    image: "/images/get-involved/carousel3.webp",
  },
  {
    quote:
      "Seeing first hand the development of Miyani-Pesa in rural Kenya made Commitment Pools seem practical.",
    author: "Thibaud Dezyn",
    title:
      "Student in Cultural Anthropology and Development Studies (CADES) at the University of Leuven, Belgium",
    image: "/images/get-involved/carousel5.webp",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/get-involved/ge-team-dec-2023_sm.jpeg"
          alt="Grassroots Economics team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-serif">
              Joining
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight font-serif uppercase">
              FORCES
            </h1>
          </div>
        </div>
      </section>

      {/* Multiply your impact */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-slate-900 mb-6">
              Multiply your impact
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              By seeding Commitment Pools you create an environment where local,
              community resource commitments can stay in circulation helping
              communities to help themselves.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/get-involved/impact.png"
                alt="Impact visualization"
                fill
                className="object-contain"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Donation section */}
      <Section background="gray">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg text-slate-600 mb-4">
                  For a tax deductible 501(c)3 donation, please{" "}
                  <a href="/contact" className="text-green-600 hover:underline">
                    Contact us
                  </a>
                  !
                </p>
                <p className="text-lg font-semibold text-slate-900 mb-4">
                  Donate and Endow with your credit card or paypal:
                </p>
                <p className="text-slate-600 mb-4">
                  Check out the{" "}
                  <a
                    href="https://sarafu.network/pools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    pools
                  </a>{" "}
                  on Sarafu.Network and find one that you appreciate and support
                  it with your credit card. If you don&apos;t see something there
                  to support &mdash;{" "}
                  <a
                    href="https://sarafu.network/pools/create"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    create your own pool
                  </a>{" "}
                  and curate the values, people, bio-regions you care about.
                </p>
                <p className="text-lg font-semibold text-slate-900 mb-2">
                  Stake on Grassroots Economics!
                </p>
                <p className="text-slate-600 mb-4">
                  The Value of Ethereum (ETH) is growing and growing. We&apos;ve
                  been building on top of the Ethereum Ecosystem since 2018 and
                  it&apos;s never failed us. You can now{" "}
                  <a
                    href="https://grassroots.impactstake.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    invest in Ethereum and send your staking returns to Grassroots
                    Economics
                  </a>
                  .
                </p>
                <p className="text-slate-600 mb-4">
                  Celo is the layer-2 chain in the Ethereum Ecosystem where all
                  the pools and vouchers on Sarafu.Network are published and used.
                  You can also{" "}
                  <a
                    href="https://docs.grassecon.org/cyber/staking-guide/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    stake on Grassroots Economics via Celo
                  </a>
                  .
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/get-involved/donate-new-removebg-preview.png"
                  alt="Donate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* General involvement */}
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              We are seeking support to both spread our programs through
              commitment pool stewards. There are many ways to get involved!{" "}
              <a
                href="https://sarafu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Create your own Commitment Pool and Community Asset Voucher on
                Sarafu.Network!
              </a>{" "}
              and{" "}
              <a
                href="https://docs.grassecon.org/community/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Join our online community!
              </a>
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              Read the{" "}
              <a
                href="https://willruddick.substack.com/p/grassroots-economics-the-book-is"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Grassroots Economics Book
              </a>{" "}
              to dive deeper into the theory and practice of Commitment Pooling.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Collaborate with Us */}
      <Section background="warm">
        <SectionHeading serif>Collaborate with Us!</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role, i) => (
            <ScrollReveal key={role.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Intern, Volunteer & Explore */}
      <Section>
        <SectionHeading serif>Intern, Volunteer &amp; Explore!</SectionHeading>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              Volunteering, and being an intern with Grassroots Economics is a
              rewarding experience that can change the lives of people in need.
              You will be building a bridge between cultures and sharing your
              hope, enthusiasm, skills and dreams. Through this experience you
              will be able to fully understand how Commitment Pooling works and
              be able to take back and spread this knowledge with you.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Intern
              </h3>
              <p className="text-slate-600">
                Take part in developing cooperative businesses, designing social
                and environmental services and communication strategies to
                strengthen the use of Commitment Pooling.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Volunteer
              </h3>
              <p className="text-slate-600">
                Get involved in teaching and playing with children or on the
                development of different permaculture projects.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/images/get-involved/calender-new.png"
                  alt="Calendar"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-slate-600">
                Plan to stay for at least 1 month and have a life changing
                experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-slate-700 italic leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
