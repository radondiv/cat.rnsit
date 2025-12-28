
# CAT • RNSIT — Next.js + Firebase

Vibrant, cultural-themed site with liquid glass effect, 3D elements (Three.js), Anime.js animations, Google Sign-In and Firestore-backed data across devices.

## Quick start

1. Copy `.env.example` to `.env.local` and fill with your Firebase web app config.
2. Install & run:

```bash
npm install
npm run dev
```

3. Deploy to Cloudflare Pages (connect this repo). Use build command `npm run build`.

## Tech
- Next.js App Router (client-side only)
- Firebase Auth (Google) + Firestore (real-time)
- Three.js (floating glass spheres)
- Anime.js (heading/hover transitions)

## Collections
- `users` — profile
- `committees`, `departments`, `announcements`, `events` — public data
- `committeeApplications` — per-user
- `registrations` — per-user

## Security rules
See `firestore.rules` and deploy via Firebase Console.

## Seeding sample content
Open the website and sign in. Then use the Firestore console to add:

### Committees
Events, DMC, PR, Sponsorship, Hospitality, Deco, Disciplinary, Accounts

Example doc (committees/Events):
```json
{ "name":"Events", "description":"Plan & run cultural events" }
```

### Departments
Add official RNSIT BE departments as simple docs: CSE, ISE, ECE, EEE, ME, Civil, AI&DS, etc.

### Events
Add a couple with fields: `title`, `datetime` (timestamp), `venue`, `description`.

### Announcements
Add a few items with fields: `title`, `description`, `date` (timestamp).

## Notes
- No localStorage is used for app data; Firebase Auth stores session securely.
- All dynamic content is fetched from Firestore so it's visible across devices.

