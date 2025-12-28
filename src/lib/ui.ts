
// Utility helpers for UI (e.g., classNames) – optional
export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
