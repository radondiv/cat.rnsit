
import React from 'react';
export default function GlassPanel({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`glass p-6 rounded-2xl ${className}`}>{children}</div>;
}
