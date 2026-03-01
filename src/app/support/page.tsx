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
      "Our Grassroots Economists \u2014 Sylvia, Amina, Janet, Joyce, Emmanuel, Fransisca \u2014 live in the communities they serve. They\u2019re not field workers parachuted in. They\u2019re neighbors.",
  },
  {
    title: "Researchers",
    description:
      "We\u2019ve published in Nature, partnered with Copenhagen Business School, Vienna University of Economics, and Central European University. Our data is open and our methods are peer-reviewed.",
  },
  {
    title: "Network Growth",
    description:
      "From 75 businesses in 2010 to over 60,000 people across 100+ communities. Growth comes from communities choosing to adopt the tools, not from top-down expansion.",
  },
  {
    title: "Developers",
    description:
      "The platform, the protocols, the USSD interface \u2014 all open source on GitHub. We welcome contributions in smart contracts, mobile development, and data analysis.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Section>
        <SectionHeading
          serif
          subtitle="Communities can develop their own prospering economies. Our job is to provide the training, tools, and support to make that possible."
        >
          Get Involved
        </SectionHeading>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 md:p-12 text-center mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Support Our Work
            </h3>
            <p className="text-lg text-slate-600 mb-4">
              Your donation directly supports Grassroots Economists &mdash;
              community members trained to facilitate Commitment Pools in their
              own neighborhoods. $50 per month covers training materials for one
              community group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="https://www.paypal.com/donate/?hosted_button_id=QXNKSGLUXY8EW"
                external
              >
                Donate via PayPal
              </Button>
              <Button href="/contact" variant="outline">
                Contact for Crypto Donations
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/get-involved/ge-team-dec-2023_sm.jpeg"
                alt="The Grassroots Economics team, December 2023"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section background="warm">
        <SectionHeading
          eyebrow="JOIN THE MOVEMENT"
          serif
          subtitle="There are many ways to contribute to the grassroots economics movement."
        >
          Ways to Collaborate
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role, i) => (
            <ScrollReveal key={role.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
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

      <Section>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading subtitle="We welcome interns and volunteers who can commit 1+ months to our programs in Kenya.">
              Internships &amp; Volunteering
            </SectionHeading>
            <p className="text-lg text-slate-600 mb-8">
              Work alongside our team in Mombasa and Nairobi to support
              community currency programs, conduct field research, and help
              develop open-source tools. Previous volunteers have come from
              universities across Europe, North America, and Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact">Apply Now</Button>
              <Button href="/mooc" variant="outline">
                Training Resources
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
