
'use client';
import EventCard from '@/components/EventCard';

const events = [
  { id: 'open-mic', title: 'Open Mic Night', date: '2026-01-20', brief: 'Music, poetry & stand-up.' },
  { id: 'folk-dance', title: 'Folk Dance Evening', date: '2026-02-02', brief: 'Celebrate regional styles.' }
];

export default function EventsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 h1-liquid">Events</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map(e => <EventCard key={e.id} {...e} />)}
      </div>
    </div>
  );
}
``
