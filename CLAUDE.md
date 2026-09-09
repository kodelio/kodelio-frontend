# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kodelio is the corporate website of the company of the same name (web, mobile
and SaaS application development). It is built with **Nuxt 4** and **Vue 3**,
pre-rendered as a static site and deployed on Netlify with a serverless contact
form function.

The site doubles as the company's public identity for business verifications
(Apple Developer Program organization enrollment, D-U-N-S, app store listings).
Legal identity, contact details and support information must therefore stay
accurate and match the official company registration.

## Commands

```bash
# Development
yarn dev                    # Start dev server at localhost:3000

# Build & Deploy
yarn build                  # Production build
yarn generate               # Generate static site into .output/public
yarn preview                # Preview the built site

# Linting
yarn lint                   # ESLint + Prettier check
yarn lint:fix               # Auto-fix lint and formatting issues
```

## Tech Stack

- **Framework**: Nuxt 4 with Vue 3 `<script setup>`
- **Styling**: Tailwind CSS 3 with custom colors (primary: `#1A1E39`, secondary: `#22b573`, main-blue: `#0085ff`)
- **Icons**: FontAwesome via `@fortawesome/vue-fontawesome`
- **Deployment**: Netlify (static, pre-rendered)
- **Email**: Mailjet via `node-mailjet` in a Netlify function
- **Error Tracking**: Sentry via `@sentry/nuxt`
- **Package manager**: yarn 4 (see `packageManager` in `package.json`)
- **Node Version**: see `.nvmrc`

## Architecture

### Key Directories

- `pages/` - `index.vue` (one-page site) plus the standalone legal pages
  (`mentions-legales`, `confidentialite`, `support`)
- `layouts/legal.vue` - Sober layout used by the legal and support pages
- `components/` - Section components assembled by `pages/index.vue`
  (`HeroSection`, `ServicesSection`, `ExpertiseSection`, `ProductsSection`,
  `ProcessSection`, `AboutSection`, `ContactSection`) and shared UI pieces
- `constants/` - Editorial and legal content, kept out of the templates
- `composables/` - `useOrganizationSchema` injects the Schema.org data
- `netlify/functions/` - Serverless functions (contact form handler at `contact.ts`)
- `types/` - TypeScript type definitions

### Company information

`constants/company.ts` is the single source of truth for the legal identity
(company name, legal form, SIREN/SIRET, registered address, phone, e-mail).
It feeds the footer, the contact section, the legal pages and the Schema.org
structured data. Never hardcode these values in a template. Any field still set
to `TO_COMPLETE` is displayed as « À COMPLÉTER » on the live site and must be
filled in before deployment.

### Rendering

`ssr: true` combined with `nuxt generate` pre-renders every route to static
HTML. Content must remain readable without JavaScript: search engines and
business-verification reviewers read the served HTML directly. Routes are listed
in `nitro.prerender.routes` in `nuxt.config.ts`; add new pages there and to
`public/sitemap.xml`.

### Contact Form Flow

1. User submits the form in `components/ContactForm.vue`
2. Form validates inputs and includes honeypot spam protection (hidden phone field + 7-second minimum time)
3. POST request sent to `/.netlify/functions/contact`
4. `netlify/functions/contact.ts` validates with zod, escapes HTML and sends the email via Mailjet
5. `netlify.toml` rate-limits the function to 5 requests per minute per IP

## Environment Variables

Required for production (set in Netlify):

- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`
- `SENTRY_DSN`

## Code Style

- ESLint config via `@nuxt/eslint` with Prettier
- Imports must be sorted (`sort-imports` rule): multiple-member imports before single-member ones, then alphabetically
- Path aliases: `~/` and `@/` both resolve to project root
