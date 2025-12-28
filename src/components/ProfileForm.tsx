
'use client';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import GlassPanel from './GlassPanel';
import { useEffect, useState } from 'react';

export default function ProfileForm() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return () => unsub();
  }, []);

  const login = async () => { await signInWithPopup(auth, provider); };
  const logout = async () => { await signOut(auth); };

  return (
    <GlassPanel>
      {user ? (
        <div className="space-y-3">
          <div className="font-semibold">Logged in as: {user.displayName}</div>
          <button className="btn-glass" onClick={logout}>Logout</button>
        </div>
      ) : (
        <button className="btn-glass" onClick={login}>Sign in with Google</button>
      )}
      <p className="mt-4 opacity-80">After login, we’ll show/manage your registrations & committee applications here (Firestore-backed).</p>
    </GlassPanel>
  );
}
