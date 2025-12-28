
'use client';
import MemberCard from '@/components/MemberCard';

const members = Array.from({ length: 24 }).map((_, i) => ({
  name: `Member ${i + 1}`,
  role: 'Volunteer',
  committee: ['Events','DMC','PR','Sponsorship','Hospitality','Deco','Disciplinary','Accounts'][i % 8]
}));

export default function MembersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 h1-liquid">Members</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((m, idx) => (
          <MemberCard key={idx} {...m} />
        ))}
      </div>
    </div>
  );
}
