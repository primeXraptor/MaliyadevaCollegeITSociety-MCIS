import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  PenTool,
  Shield,
  Terminal,
  CalendarDays,
} from "lucide-react";
import {
  Entry,
  Kind,
  dateLabel,
  settings,
  navigation,
  sponsors,
} from "@/lib/content";
export function Icon({ name, size = 24 }: { name: string; size?: number }) {
  const I =
    ({ code: Code2, cpu: Cpu, pen: PenTool, shield: Shield } as const)[
      name as "code"
    ] || Terminal;
  return <I size={size} strokeWidth={1.5} />;
}
export function SectionTitle({
  label,
  title,
  href,
  link,
}: {
  label: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span /> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link href={href} className="text-link">
          {link} <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}
export function Art({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div className={`art ${className}`}>
      <Image
        src={`/art/${name}.svg`}
        alt=""
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
      />
    </div>
  );
}
export function Card({
  entry,
  kind,
  featured = false,
}: {
  entry: Entry;
  kind: Kind;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/${kind}/${entry.slug}`}
      className={`content-card ${featured ? "featured" : ""}`}
    >
      <Art name={entry.image} />
      <div className="card-body">
        <div className="card-meta">
          <span>{entry.category}</span>
          <span>Sample {kind === "blogs" ? "article" : "content"}</span>
        </div>
        <h3>
          {entry.title}
          <ArrowUpRight size={20} />
        </h3>
        <p>{entry.excerpt}</p>
        <div className="card-bottom">
          {kind === "blogs" ? (
            <span>
              {entry.author} <span className="dot-separator">·</span>{" "}
              {dateLabel(entry.date)}
            </span>
          ) : (
            <>
              <span>
                <CalendarDays size={13} />{" "}
                {entry.status === "Upcoming"
                  ? "Date to be confirmed"
                  : "Sample past event"}
              </span>
              <span className="status">{entry.status || "Announcement"}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
export function ExternalLink({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  return href ? (
    <a className="button" href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowUpRight size={16} />
    </a>
  ) : (
    <span className="button unavailable" aria-disabled="true">
      {label}
      <span className="soon">Coming soon</span>
    </span>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Link href="/" className="wordmark">
            MCIS<span className="logo-dot">.</span>
          </Link>
          <p>
            Curiosity connects us.
            <br />
            Technology moves us forward.
          </p>
          <span className="mono small">
            Maliyadeva College · Kurunegala, Sri Lanka
          </span>
        </div>
        <div>
          <span className="eyebrow">Explore</span>
          <div className="footer-links">
            {navigation.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow">Stay connected</span>
          <p>
            Built around a shared curiosity.
            <br />
            Open to what comes next.
          </p>
          <Link href="/contact" className="text-link">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {settings.fullName}
        </span>
        <span className="mono">
          Made of curiosity. Built with purpose.{" "}
          <span className="green">↗</span>
        </span>
      </div>
    </footer>
  );
}

export function SponsorLogos() {
  return (
    <div className="sponsor-logos">
      {sponsors.map((s) => (
        <div className="sponsor-logo" key={s.id}>
          {s.logo ? (
            <Image
              src={s.logo}
              alt={s.name}
              width={160}
              height={64}
              style={{ objectFit: "contain", width: 160, height: 64 }}
            />
          ) : (
            <span>{s.name}</span>
          )}
          {s.tier && <span className="eyebrow">{s.tier}</span>}
        </div>
      ))}
    </div>
  );
}
