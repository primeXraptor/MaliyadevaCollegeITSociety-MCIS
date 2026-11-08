import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, GitBranch } from "lucide-react";
import {
  SectionTitle,
  Icon,
  Card,
  ExternalLink,
  SponsorLogos,
} from "@/components/ui";
import { communities, content, settings, sponsors } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-topline">
          <span className="eyebrow">
            <span /> THE NEXT IDEA STARTS HERE
          </span>
          <span className="mono coordinates">KURUNEGALA / SRI LANKA</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>
              MCIS<span className="hero-cursor">_</span>
            </h1>
            <h2>
              Maliyadeva College
              <br />
              IT Society<span className="green">.</span>
            </h2>
            <p>
              A community of curious minds.
              <br />
              Learning, building, and shaping what comes next.
            </p>
            <div className="hero-actions">
              <ExternalLink href={settings.links.github} label="GitHub" />
              <ExternalLink href={settings.links.forums} label="Forums" />
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Abstract terminal illustration"
          >
            <div className="orbital orbit-one" />
            <div className="orbital orbit-two" />
            <div className="orbit-node" />
            <div className="terminal-window">
              <div className="terminal-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>mcis@community: ~</span>
                <Terminal size={13} />
              </div>
              <div className="terminal-content">
                <p>
                  <span className="green">➜</span>{" "}
                  <span className="terminal-path">~</span> whoami
                </p>
                <p className="terminal-answer">A generation of makers.</p>
                <p>
                  <span className="green">➜</span>{" "}
                  <span className="terminal-path">~</span> cat our-purpose.txt
                </p>
                <p className="terminal-answer">
                  Think beyond the ordinary.
                  <br />
                  Create something meaningful.
                  <br />
                  Grow, together.
                </p>
                <p>
                  <span className="green">➜</span>{" "}
                  <span className="terminal-path">~</span>{" "}
                  <span className="terminal-caret" />
                </p>
              </div>
              <div className="terminal-status">
                <span>
                  <span className="status-dot" /> curiosity: online
                </span>
                <span>UTF-8</span>
              </div>
            </div>
            <span className="visual-caption mono">
              {"// A SPACE TO EXPLORE. A COMMUNITY TO BUILD."}
            </span>
            <div className="visual-cross">+</div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#Sponsors">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
          <span>
            <GitBranch size={14} /> Ideas are better together.
          </span>
          <span className="mono">01 / INTRODUCTION</span>
        </div>
      </section>
      <section id="Sponsors" className="sponsor-section">
        <div className="container sponsor-layout">
          <p className="eyebrow">
            SUPPORTING
            <br />
            WHAT COMES NEXT
          </p>
          {sponsors.length ? (
            <SponsorLogos />
          ) : (
            <>
              <div className="sponsor-placeholder">
                Your support.
                <br />
                <strong>Their next big idea.</strong>
              </div>
              <p>
                Our next chapter has room for you.
                <br />
                <Link href="/contact">
                  Become a supporting partner <ArrowUpRight size={14} />
                </Link>
              </p>
              <span className="outline-label">PARTNERS TO BE ANNOUNCED</span>
            </>
          )}
        </div>
      </section>
      <section id="SubSocietiesList" className="container community-overview">
        <div>
          <p className="eyebrow">
            <span /> FIND YOUR PEOPLE
          </p>
          <p>Different interests. Shared curiosity.</p>
        </div>
        <div className="community-icons">
          {communities.map((c) => (
            <a href={`#${c.id}`} key={c.id}>
              <Icon name={c.symbol} />
              <span>{c.name}</span>
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
      </section>
      <section id="SubSocieties" className="container section">
        <SectionTitle
          label="OUR COMMUNITIES"
          title="Find your thing. Build something."
        />
        <p className="section-intro">
          From your first line of code to your next creative breakthrough.
          <br />
          There’s a place to explore what excites you.
        </p>
        <p className="sample-note">
          Community names and descriptions below are samples, pending official
          details.
        </p>
        <div className="community-grid">
          {communities.map((c, i) => (
            <article className="community-card" id={c.id} key={c.id}>
              <div className="community-card-top">
                <Icon name={c.symbol} size={30} />
                <span className="mono">0{i + 1} /</span>
              </div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <div className="tags">
                {c.focus.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="LatestBlogs" className="container section blogs-section">
        <SectionTitle
          label="THE READING ROOM"
          title="Ideas worth sharing."
          href="/blogs"
          link="View all blogs"
        />
        <div className="blog-grid">
          {content.blogs.map((b, i) => (
            <Card key={b.slug} entry={b} kind="blogs" featured={i === 0} />
          ))}
        </div>
      </section>
      <section id="Events" className="container section">
        <SectionTitle
          label="BEYOND THE SCREEN"
          title="Connect. Create. Be part of it."
          href="/events"
          link="View all events"
        />
        <Link href="/terminal" className="terminal-banner">
          <div className="terminal-banner-art" aria-hidden="true">
            &gt;_
          </div>
          <div className="terminal-banner-copy">
            <p className="eyebrow">
              <span /> OUR ANNUAL IT EVENT
            </p>
            <h3>
              TERMINAL<span>v26.0</span>
            </h3>
            <p>The next command is yours.</p>
            <span className="text-link">
              Explore TERMINAL <ArrowUpRight size={17} />
            </span>
          </div>
          <div className="banner-side mono">
            <span>[ AWAITING NEXT INPUT ]</span>
            <span>
              DATE & VENUE
              <br />
              TO BE ANNOUNCED
            </span>
          </div>
        </Link>
        <div className="event-grid">
          {content.events.map((e) => (
            <Card key={e.slug} entry={e} kind="events" />
          ))}
        </div>
      </section>
      <div className="container closing">
        <span className="eyebrow">KEEP EXPLORING. KEEP BUILDING.</span>
        <p>
          The future doesn’t write itself<span className="green">.</span>
        </p>
        <Link href="/about" className="text-link">
          Meet MCIS <ArrowUpRight size={20} />
        </Link>
      </div>
    </>
  );
}
