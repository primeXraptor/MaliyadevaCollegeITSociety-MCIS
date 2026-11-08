import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container inner-page empty-state">
      <p className="eyebrow">ERROR 404 / PATH NOT FOUND</p>
      <h1>A little off the map.</h1>
      <p>We couldn’t find that page. Let’s get you back to familiar ground.</p>
      <Link href="/" className="button">
        Back to MCIS →
      </Link>
    </div>
  );
}
