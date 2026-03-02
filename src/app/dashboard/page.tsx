import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Data dashboards and visualizations from Community Inclusion Currency transaction data.",
};

export default function DashboardPage() {
  return (
    <>
      <Section>
        <SectionHeading
          subtitle="These dashboards are derived from transactional data of individual Community Inclusion Currency Users."
        >
          Dashboard
        </SectionHeading>

        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-12">
            <Image
              src="/images/dashboard/dash1.webp"
              alt="Dashboard visualization"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-12">
            <Image
              src="/images/dashboard/dash2.webp"
              alt="Dashboard visualization"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Help us with Data Analysis and Visualization
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              For raw data access visit our{" "}
              <a href="/research" className="text-green-600 hover:underline">
                research page
              </a>
              .{" "}
              <a href="/contact" className="text-green-600 hover:underline">
                Contact us
              </a>{" "}
              so we can start working together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/research">Research Data</Button>
              <Button href="/contact" variant="outline">
                Collaborate With Us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
