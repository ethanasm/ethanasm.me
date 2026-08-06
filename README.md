# ethanasm.me

Personal portfolio site. Built with Next.js, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages via GitHub Actions.

**Live:** [ethanasm.me](https://ethanasm.me)

## Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, custom particle network canvas
- **Hosting:** GitHub Pages (static export)
- **CI/CD:** GitHub Actions

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

Static output goes to `out/`. The GitHub Actions workflow builds and deploys on push to `main`.

## Traffic analytics

Traffic analytics are collected at the Cloudflare edge and sent to Axiom. The
events contain the page path, response status and duration, and approximate
country/region/city. They do not contain IP addresses, cookies, fingerprints,
referrers, query strings, user agents, or visitor identifiers.

See [docs/traffic-analytics.md](docs/traffic-analytics.md) for setup, deployment,
privacy controls, and Axiom queries.

## Structure

```
src/
  app/           # Next.js app router (layout, page, globals.css)
  components/    # Navbar, Hero, About, Experience, Projects, Contact, Footer, etc.
public/
  images/        # Hero photo, profile photo
  CNAME          # Custom domain config
resume/
  resume.typ     # Typst source for resume
cloudflare-worker/
  src/index.ts   # Privacy-minimized Axiom ingestion Worker
docs/
  traffic-analytics.md
```
