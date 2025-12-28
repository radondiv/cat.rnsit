
'use client';
import CommitteeCard from '@/components/CommitteeCard';

const committees = [
  { id: 'events', name: 'Events', desc: 'Plan & execute cultural programs.' },
  { id: 'dmc', name: 'DMC', desc: 'Design, Media & Content.' },
  { id: 'pr', name: 'PR', desc: 'Outreach & public relations.' },
  { id: 'sponsorship', name: 'Sponsorship', desc: 'Partners & funding.' },
  { id: 'hospitality', name: 'Hospitality', desc: 'Guest handling & logistics.' },
  { id: 'deco', name: 'Deco', desc: 'Stage & venue decoration.' },
  { id: 'disciplinary', name: 'Disciplinary', desc: 'Code of conduct & crowd mgmt.' },
  { id: 'accounts', name: 'Accounts', desc: 'Budgeting & expense tracking.' }
];

export default function CommitteesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 h1-liquid">Committees</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {committees.map(c => (
          <CommitteeCard key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}
``
