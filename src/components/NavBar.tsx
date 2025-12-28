
'use client';
import Link from 'next/link';

export default function NavBar() {
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/committees', label: 'Committees' },
    { href: '/events', label: 'Events' },
    { href: '/members', label: 'Members' },
    { href: '/profile', label: 'Profile' },
    { href: '/departments', label: 'Departments' }
  ];
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/cat-logo.svg" alt="CAT" className="h-8 w-8" />
          <span className="font-semibold">CAT</span>
        </Link>
        <div className="ml-auto flex gap-4">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="btn-glass">{n.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
