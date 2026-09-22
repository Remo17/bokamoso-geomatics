import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "../../components/DetailPage";
import { services } from "../../data/details";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = services[slug];

  return record
    ? {
        title: `${record.title} | Bokamoso Geomatics`,
        description: record.summary,
      }
    : {};
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = services[slug];

  if (!record) notFound();

  return (
    <DetailPage
      record={record}
      backHref="/services"
      backLabel="Back to services"
    />
  );
}
