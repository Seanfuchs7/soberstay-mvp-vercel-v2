import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold">SoberStay</Link>
        <div className="flex gap-4 text-sm">
          <Link href="/facilities">Facilities</Link>
          <Link href="/admin/health">Health</Link>
        </div>
      </div>
    </nav>
  );
}
