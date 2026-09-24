import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import type { DetailRecord } from "../data/details";

type Props = {
  record: DetailRecord;
  backHref: string;
  backLabel: string;
};

function MetaItem({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  if (!value) return null;

  return (
    <div className="border-t border-white/15 pt-4">
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-white/90">{value}</p>
    </div>
  );
}

export default function DetailPage({
  record,
  backHref,
  backLabel,
}: Props) {
  const isProject = record.kind === "project";

  return (
    <div className="min-h-screen bg-surface-light text-surface-dark">
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-surface-dark text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:py-28">
            <Link
              href={backHref}
              className="inline-flex items-center font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-technical-green"
            >
              ← {backLabel}
            </Link>

            <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-technical-green">
                  {record.eyebrow} · {record.category}
                </p>

                <h1 className="mt-6 max-w-5xl font-cabinet-grotesk text-4xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-[76px]">
                  {record.title}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                  {record.summary}
                </p>
              </div>

              <div className="self-end lg:col-span-4">
                <div className="grid gap-7">
                  <MetaItem label="Type" value={isProject ? "Past project" : "Practice area"} />
                  <MetaItem label="Discipline" value={record.category} />
                  {isProject && <MetaItem label="Client" value={record.client} />}
                  {isProject && <MetaItem label="Period" value={record.period} />}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECORD */}
        <section className="border-b border-border-light bg-surface-light">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-technical-green">
                  {isProject ? "Project record" : "Service overview"}
                </p>

                <h2 className="mt-4 max-w-sm font-cabinet-grotesk text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl">
                  {isProject
                    ? "A verified record from the Bokamoso project portfolio."
                    : "A focused surveying and geomatics capability."}
                </h2>
              </div>

              <div className="lg:col-span-8">
                <p className="max-w-3xl text-base leading-8 text-surface-dark/70 md:text-lg">
                  {record.overview}
                </p>

                {isProject && (
                  <div className="mt-12 border-t border-border-light pt-8">
                    <div className="grid gap-7 sm:grid-cols-2">
                      <MetaItem label="Client" value={record.client} />
                      <MetaItem label="Period" value={record.period} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SCOPE */}
        <section className="border-b border-border-light bg-background-stone">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-technical-green">
                  {isProject ? "Relevant service scope" : "Scope of service"}
                </p>

                <h2 className="mt-4 font-cabinet-grotesk text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {isProject
                    ? "The related Bokamoso capability."
                    : "What the service covers."}
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="border-y border-border-light">
                  {record.scope.map((item, index) => (
                    <div
                      key={item}
                      className="grid gap-4 border-b border-border-light py-6 last:border-b-0 md:grid-cols-[64px_1fr]"
                    >
                      <span className="font-mono text-[11px] font-medium text-surface-dark/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="max-w-2xl text-base leading-7 text-surface-dark/85 md:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FIELD IMAGE / CONTEXT */}
        <section className="border-b border-border-light bg-surface-light">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="overflow-hidden border border-border-light bg-background-stone lg:col-span-8">
                <img
                  src="/assets/team/team-total-station.jpg"
                  alt="Survey professional carrying out field measurement with a total station"
                  className="h-[320px] w-full object-cover sm:h-[430px] md:h-[520px]"
                />
              </div>

              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-surface-dark/45">
                  Field practice
                </p>

                <p className="mt-4 text-sm leading-7 text-surface-dark/70">
                  Bokamoso Geomatics combines surveying practice with field
                  measurement, mapping and spatial information workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICE / CTA */}
        <section className="bg-surface-dark text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-technical-green">
                  Next step
                </p>

                <h2 className="mt-5 max-w-3xl font-cabinet-grotesk text-4xl font-semibold leading-tight tracking-[-0.035em] md:text-5xl">
                  Discuss a surveying or geomatics requirement with Bokamoso.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                {record.serviceHref && (
                  <Link
                    href={record.serviceHref}
                    className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-sm font-medium transition-colors hover:border-technical-green hover:text-technical-green"
                  >
                    {record.serviceLabel} ↗
                  </Link>
                )}

                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center justify-center bg-technical-green px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Request a Quote ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
