
# SoberStay MVP (Vercel-ready: Next.js + Prisma + Postgres)

A full‑stack MVP you can deploy to Vercel *without installing anything locally* (uses hosted Postgres).

## One-time setup (GitHub → Vercel → Postgres)
1) **Create a GitHub repo**
   - New repo (public or private) → call it `soberstay-mvp-vercel`
   - Click **Add file → Upload files** and upload the project files (unzip first). Commit to `main`.

2) **Create a hosted Postgres DB** (Neon, Supabase, or Vercel Postgres)
   - Get a connection string like:
     `postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require`

3) **Vercel → New Project**
   - Import your GitHub repo.
   - In **Environment Variables**, add:
     - `DATABASE_URL` = your Postgres connection string
   - Deploy.

> The build runs `prisma migrate deploy` and `prisma db seed` automatically so you have demo data on first deploy.

## What’s inside
- **Next.js (App Router)** + React 18
- **Prisma + Postgres** (hosted DB)
- **API routes**: facilities list/detail, application submit, mock checkout
- **Tailwind** + reference CSS for fast visual parity
- **Seed script** with 3 demo facilities

## Local dev (optional)
If you DO want to run locally later:
```bash
npm install
cp .env.example .env    # put your Postgres DATABASE_URL here
npm run db:push         # or: npx prisma migrate dev
npm run db:seed
npm run dev
```
