import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import type { DetailRecord } from "../data/details";

type Props = {
  record: DetailRecord;
  backHref: string;
  backLabel: string;
};

export default function DetailPage({
  record,
  backHref,
  backLabel,
}: Props) {
  return (
    <div className="min-h-screen bg-surface-light text-surface-dark">
      <Header />

      <main>
        <section className="border-b border-border-light">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="max-w-4xl">
              <Link
                href={backHref}
                className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-surface-dark/60 transition-colors hover:text-technical-green"
              >
                ← {backLabel}
              </Link>

              <div className="mt-10">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-technical-green">
                  {record.eyebrow} / {record.category}
                </span>

                <h1 className="mt-5 max-w-4xl font-cabinet-grotesk text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                  {record.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-surface-dark/70 md:text-xl">
                  {record.summary}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border-light">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-technical-green">
                Scope
              </p>
              <h2 className="mt-4 font-cabinet-grotesk text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Survey work shaped around the project requirement.
              </h2>
            </div>

            <div className="divide-y divide-border-light border-y border-border-light">
              {record.points.map((point, index) => (
                <div
                  key={point}
                  className="grid gap-4 py-6 md:grid-cols-[72px_1fr]"
                >
                  <span className="font-mono text-xs font-medium text-surface-dark/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-7 text-surface-dark/80 md:text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-10 md:py-24">
            <div className="max-w-xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-technical-green">
                Next step
              </p>
              <h2 className="mt-4 font-cabinet-grotesk text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Need survey support for a similar requirement?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center bg-technical-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Request a quote
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-border-light px-6 py-3 text-sm font-semibold transition-colors hover:border-technical-green hover:text-technical-green"
              >
                Contact Bokamoso
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
