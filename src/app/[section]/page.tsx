import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import {
  content,
  Kind,
  communities,
  settings,
  terminal,
  sponsors,
} from "@/lib/content";
import { Listing } from "@/components/listing";
import { Icon, ExternalLink, SponsorLogos } from "@/components/ui";
const pages: Record<
  string,
  { title: string; label: string; description: string }
> = {
  blogs: {
    title: "Ideas worth sharing.",
    label: "THE READING ROOM",
    description:
      "Notes, discoveries, and fresh perspectives from the world of technology.",
  },
  events: {
    title: "Beyond the screen.",
    label: "COME TOGETHER",
    description:
      "Explore workshops, creative sessions, and opportunities to connect.",
  },
  competitions: {
    title: "Challenge your thinking.",
    label: "PUT YOUR IDEAS TO WORK",
    description:
      "Explore a new problem. Find your approach. Make something unexpected.",
  },
  news: {
    title: "The latest from MCIS.",
    label: "ON OUR RADAR",
    description: "Announcements, updates, and stories from our community.",
  },
  about: {
    title: "Curiosity connects us.",
    label: "HELLO, WE’RE MCIS",
    description: "Maliyadeva College IT Society · Kurunegala, Sri Lanka",
  },
  contact: {
    title: "Let’s start a conversation.",
    label: "GET IN TOUCH",
    description:
      "Have an idea, a question, or a way to collaborate? This is where we connect.",
  },
  terminal: {
    title: "TERMINAL",
    label: "THE ANNUAL MCIS IT EVENT",
    description: "The next command is yours.",
  },
};
export function generateStaticParams() {
  return Object.keys(pages).map((section) => ({ section }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const p = pages[section];
  return p
    ? {
        title:
          section === "terminal"
            ? "TERMINAL v26.0"
            : section[0].toUpperCase() + section.slice(1),
        description: p.description,
        openGraph: { title: p.title, description: p.description },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const p = pages[section];
  if (!p) notFound();
  const kind = section as Kind;
  return (
    <div
      className={`container inner-page ${section === "terminal" ? "terminal-page" : ""}`}
    >
      <div className="page-intro">
        <p className="eyebrow">
          <span /> {p.label}
        </p>
        <h1>
          {p.title}
          {section === "terminal" && <sup>v26.0</sup>}
        </h1>
        <p>{p.description}</p>
      </div>
      {section in content ? (
        <>
          <Listing entries={content[kind]} kind={kind} />
        </>
      ) : section === "about" ? (
        <>
          <div className="about-statement">
            <span className="mono green">~/about-us</span>
            <h2>
              A place to learn.
              <br />A reason to build.
              <br />A community to grow with.
            </h2>
            <p>
              MCIS is the IT society of Maliyadeva College, Kurunegala. It
              brings together interests in technology, programming, innovation,
              and student collaboration.
            </p>
          </div>
          <div className="two-columns">
            <article className="info-panel">
              <h2>Mission & vision</h2>
              <p>
                Official mission and vision statements will be added when
                supplied. This website’s focus is to make learning, creative
                work, and society activities easier to discover.
              </p>
            </article>
            <article className="info-panel">
              <h2>The people behind MCIS</h2>
              <p>
                Committee and team information is awaiting confirmation. No
                names or roles are listed until approved.
              </p>
            </article>
          </div>
          <h2 className="subheading">Room for every kind of curiosity.</h2>
          <div className="community-grid">
            {communities.map((c) => (
              <article key={c.id} className="community-card">
                <Icon name={c.symbol} />
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <span className="sample-note">Sample community</span>
              </article>
            ))}
          </div>
        </>
      ) : section === "contact" ? (
        <>
          <div className="two-columns">
            <article className="info-panel">
              <p className="eyebrow">CONTACT CHANNELS</p>
              <h2>Find the right connection.</h2>
              {settings.email ? (
                <a className="text-link" href={`mailto:${settings.email}`}>
                  {settings.email}
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <p>
                  Official contact details haven’t been supplied yet. Direct
                  contact channels will appear here once confirmed.
                </p>
              )}
              <div className="hero-actions">
                <ExternalLink label="GitHub" href={settings.links.github} />
                <ExternalLink label="Forums" href={settings.links.forums} />
              </div>
            </article>
            <article className="info-panel">
              <p className="eyebrow">OUR COMMUNITY</p>
              <h2>Maliyadeva College</h2>
              <p>Kurunegala, Sri Lanka</p>
              <p>
                Interested in supporting the society or collaborating on an
                activity? Partnership and community enquiries will be available
                through the official channels once configured.
              </p>
            </article>
          </div>
        </>
      ) : (
        <>
          <div className="terminal-console">
            <span className="green">mcis@terminal:~$</span> ./launch --edition
            26.0
            <br />
            <br />
            <span>Learning. Competition. Connection.</span>
            <br />
            <span className="muted">
              An annual meeting point for technology and student creativity.
            </span>
            <br />
            <br />
            <span className="green">[ AWAITING OFFICIAL EVENT DETAILS ]</span>
          </div>
          <div className="terminal-facts">
            <div>
              <span className="eyebrow">DATE</span>
              <h3>{terminal.date || "To be announced"}</h3>
            </div>
            <div>
              <span className="eyebrow">VENUE</span>
              <h3>{terminal.venue || "To be announced"}</h3>
            </div>
            <div>
              <span className="eyebrow">REGISTRATION</span>
              {terminal.registration ? (
                <ExternalLink href={terminal.registration} label="Register" />
              ) : (
                <h3>Not yet announced</h3>
              )}
            </div>
          </div>
          <div className="two-columns">
            <article className="info-panel">
              <h2>The challenge awaits.</h2>
              <p>
                Official TERMINAL competitions, eligibility, and rules will be
                published here once confirmed.
              </p>
              <Link href="/competitions" className="text-link">
                Explore sample competitions <ArrowUpRight size={17} />
              </Link>
            </article>
            <article className="info-panel">
              <h2>The programme</h2>
              {terminal.schedule.length ? (
                <ul>
                  {terminal.schedule.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  The event schedule is awaiting confirmation. Check back for
                  sessions, timings, and activities.
                </p>
              )}
            </article>
            <article className="info-panel">
              <h2>Supporting TERMINAL</h2>
              {sponsors.length ? (
                <SponsorLogos />
              ) : (
                <p>
                  Event sponsors will be announced when partnerships are
                  confirmed.
                </p>
              )}
              <Link className="text-link" href="/contact">
                Partnership enquiries <ArrowUpRight size={17} />
              </Link>
            </article>
            <article className="info-panel">
              <h2>Stay in the loop</h2>
              <p>
                Official event contact details and community links will appear
                once supplied.
              </p>
              <Link className="text-link" href="/contact">
                Contact MCIS <ArrowUpRight size={17} />
              </Link>
            </article>
          </div>
        </>
      )}
    </div>
  );
}
