import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Sarafu Network trade exchange policy, rules, regulations, and terms of service.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Terms and Conditions
        </h1>
        <h2 className="text-lg text-slate-500 font-medium mb-12">
          Sarafu Network Trade Exchange Policy, Rules, &amp; Regulations, Terms
          of Service
        </h2>

        {/* Key Points */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-12 space-y-4">
          <div className="border-l-4 border-green-600 pl-4">
            <p className="font-semibold text-slate-900">No cash-outs</p>
            <p className="text-slate-600 text-sm">
              There is no guaranteed exchange between National Currencies and any
              Voucher or Token on the Sarafu Network.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="font-semibold text-slate-900">Gifts only</p>
            <p className="text-slate-600 text-sm">
              Accepting Sarafu or any other Voucher or token on the Sarafu Network
              is voluntary and considered a gift.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="font-semibold text-slate-900">No redemption</p>
            <p className="text-slate-600 text-sm">
              There is no guarantee of redemption for any voucher or token on the
              Sarafu Network in any form, goods, services or Kenyan Shillings.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <p className="font-semibold text-slate-900">
              Loss of account or tokens at any time
            </p>
            <p className="text-slate-600 text-sm">
              Any account or voucher token holding on Sarafu Network is subject to
              holding fees and can be closed at any time.
            </p>
          </div>
        </div>

        {/* Full Terms */}
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline">
          <p>
            The purpose of the following Trading Procedures, Policies, Rules and
            Regulations is to facilitate trading among members of Organizations by
            promoting a system of good business practice and understanding of the
            guidelines set forth by various trading networks and organizations that
            work together with Grassroots Economics Foundation (GEF) Sarafu Network
            (SC). These Trading Procedures, Policies, Rules and Regulations also
            form part of and are included in any voucher or community currency
            verified, digitally created or printed and allocated by Sarafu Network.
          </p>
          <p>
            The Sarafu Network operates under the guiding principles of the{" "}
            <a
              href="https://docs.grassecon.org/commons/path/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PATH
            </a>{" "}
            (Public Awareness &amp; Transparent Heritage) License for vouchers and
            the{" "}
            <a
              href="https://docs.grassecon.org/commons/sprout/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SPROUT
            </a>{" "}
            (Stewarded Pools for Relational Obligations and Unified Trust) License
            for commitment pools.
          </p>

          <h3>1. Nature of the Parties</h3>
          <p>
            A Client is an individual or legal entity that voluntarily uses the
            Sarafu Network to exchange commitments for goods and/or services among
            its members and to create vouchers and/or commitment pools to facilitate
            barter-based trade.
          </p>

          <h3>2. Nature of Instruments on Sarafu Network</h3>
          <p>
            A Voucher or Token as well as a Pool on the Sarafu Network is a digital
            or physical accounting unit used to record the exchange of commitments
            for goods and/or services among participants. These instruments are not
            purchased or sold but represent commitments that can be offered,
            accepted, added to, or swapped within pools. Vouchers and Tokens are not
            legal tender, securities, or commodities and have no guaranteed value in
            Kenyan Shillings.
          </p>

          <h3>3. Standards and Transparency</h3>
          <p>
            All participants in the Sarafu Network agree to maintain transparent
            records and adhere to the standards set forth by the PATH and SPROUT
            licenses. This includes honest representation of goods and services,
            fair trading practices, and community accountability.
          </p>

          <p className="mt-12 text-sm text-slate-400">
            For the full and most current version of our terms and conditions,
            please visit{" "}
            <a href="https://docs.grassecon.org" target="_blank" rel="noopener noreferrer">
              docs.grassecon.org
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
