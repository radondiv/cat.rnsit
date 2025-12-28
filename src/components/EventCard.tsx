
'use client';
import GlassPanel from './GlassPanel';
import Link from 'next/link';

export default function EventCard({ id, title, date, brief }: { id: string, title: string, date: string, brief: string }) {
  return (
    <GlassPanel>
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="opacity-80">{brief}</div>
      <div className="mt-2 text-sm opacity-70">Date: {date}</div>
      <Link href={`/events/${id}`} className="btn-glass mt-4 inline-block">View Details</Link>
    </GlassPanel>
  );
}
