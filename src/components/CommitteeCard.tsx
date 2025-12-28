
'use client';
import GlassPanel from './GlassPanel';
import anime from 'animejs';

export default function CommitteeCard({ id, name, desc }: { id: string, name: string, desc: string }) {
  const onHover = (e: React.MouseEvent) => {
    anime({ targets: e.currentTarget, scale: 1.03, duration: 250, easing: 'easeOutQuad' });
  };
  const onLeave = (e: React.MouseEvent) => {
    anime({ targets: e.currentTarget, scale: 1.0, duration: 250, easing: 'easeOutQuad' });
  };

  return (
    <GlassPanel>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="opacity-80">{desc}</p>
      <button
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="btn-glass mt-4"
        onClick={() => alert(`Join request for ${name} will be saved to Firestore in next step.`)}
      >
        Join
      </button>
    </GlassPanel>
  );
}
