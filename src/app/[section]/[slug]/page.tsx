import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { content, Kind, dateLabel } from "@/lib/content";
import { Art, Card, ExternalLink } from "@/components/ui";
export function generateStaticParams() {
  return Object.entries(content).flatMap(([section, entries]) =>
    entries.map((e) => ({ section, slug: e.slug })),
  );
}
async function getEntry(params: Promise<{ section: string; slug: string }>) {
  const { section, slug } = await params;
  const entries = content[section as Kind];
  const entry = entries?.find((e) => e.slug === slug);
  if (!entry) notFound();
  return { entry, section: section as Kind, entries };
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { entry } = await getEntry(params);
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: "article",
    },
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { entry, section, entries } = await getEntry(params);
  return (
    <article className="container inner-page">
      <Link href={`/${section}`} className="text-link back-link">
        <ArrowLeft size={16} /> All {section}
      </Link>
      <header className="article-header">
        <p className="eyebrow">
          <span /> {entry.category} / SAMPLE CONTENT
        </p>
        <h1>{entry.title}</h1>
        <p>{entry.excerpt}</p>
        <div className="mono small muted">
          {entry.author} · {dateLabel(entry.date)} · Demonstration date
        </div>
      </header>
      <Art name={entry.image} className="article-cover" />
      <div className="article-body">
        <aside className="sample-callout">
          This is a sample{" "}
          {section === "blogs" ? "article" : section.slice(0, -1)}. It does not
          announce an official activity, date, rule, or society achievement.
        </aside>
        {entry.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {(section === "events" || section === "competitions") && (
          <>
            <h2>Important details</h2>
            <dl>
              <dt>Status</dt>
              <dd>{entry.status} (sample)</dd>
              <dt>Date</dt>
              <dd>Official date to be confirmed</dd>
              <dt>Venue / format</dt>
              <dd>{entry.venue}</dd>
            </dl>
            {entry.eligibility && (
              <>
                <h2>Eligibility</h2>
                <p>{entry.eligibility}</p>
              </>
            )}
            {entry.rules && (
              <>
                <h2>Rules</h2>
                <p>{entry.rules}</p>
              </>
            )}
            {entry.schedule && (
              <>
                <h2>Schedule</h2>
                <ul>
                  {entry.schedule.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}
            {entry.registration ? (
              <ExternalLink href={entry.registration} label="Register" />
            ) : (
              <p className="sample-note">
                Registration is not available for this demonstration entry.
              </p>
            )}
          </>
        )}
      </div>
      {entries.length > 1 && (
        <section className="related">
          <h2>Keep exploring.</h2>
          <div className="event-grid">
            {entries
              .filter((e) => e.slug !== entry.slug)
              .slice(0, 2)
              .map((e) => (
                <Card key={e.slug} entry={e} kind={section} />
              ))}
          </div>
        </section>
      )}
    </article>
  );
}
