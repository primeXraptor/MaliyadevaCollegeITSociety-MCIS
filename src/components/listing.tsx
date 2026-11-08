"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Entry, Kind } from "@/lib/content";
import { Card } from "./ui";
export function Listing({ entries, kind }: { entries: Entry[]; kind: Kind }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const categories = ["All", ...new Set(entries.map((e) => e.category))];
  const hasStatus = kind === "events" || kind === "competitions";
  const filtered = entries.filter(
    (e) =>
      (category === "All" || e.category === category) &&
      (status === "All" || e.status === status) &&
      `${e.title} ${e.excerpt} ${e.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="filter-bar">
        <label className="search">
          <Search size={18} />
          <span className="sr-only">Search {kind}</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${kind}…`}
          />
        </label>
        <label className="select-label">
          Category
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        {hasStatus && (
          <label className="select-label">
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>All</option>
              <option>Upcoming</option>
              <option>Completed</option>
            </select>
          </label>
        )}
      </div>
      <p className="sample-note" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "result" : "results"} · All
        entries are demonstration content.
      </p>
      <div className="listing-grid">
        {filtered.map((e) => (
          <Card key={e.slug} entry={e} kind={kind} />
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No matches this time.</h2>
          <p>Try another search or reset your filters.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setStatus("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </>
  );
}
