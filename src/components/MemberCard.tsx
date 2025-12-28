
'use client';
import GlassPanel from './GlassPanel';

function avatarFromName(name: string) {
  const letter = name.charAt(0).toUpperCase();
  const bg = ['#7f5af0','#ff6b6b','#00d4ff','#ffd166','#06d6a0'][letter.charCodeAt(0) % 5];
  return { letter, bg };
}

export default function MemberCard({ name, role, committee }: { name: string, role: string, committee: string }) {
  const { letter, bg } = avatarFromName(name);
  return (
    <GlassPanel>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: bg }}>
          <span className="font-bold text-black">{letter}</span>
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm opacity-80">{role} • {committee}</div>
        </div>
      </div>
    </GlassPanel>
  );
}
