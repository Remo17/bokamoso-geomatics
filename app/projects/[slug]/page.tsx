import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "../../components/DetailPage";
import { projects } from "../../data/details";

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = projects[slug];

  return record
    ? {
        title: `${record.title} | Bokamoso Geomatics`,
        description: record.summary,
      }
    : {};
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = projects[slug];

  if (!record) notFound();

  return (
    <DetailPage
      record={record}
      backHref="/projects"
      backLabel="Back to projects"
    />
  );
}
