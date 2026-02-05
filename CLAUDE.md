# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kodelio is a freelance portfolio website built with **Nuxt 2** and **Vue 2 Composition API**. It's a static site deployed on Netlify with a serverless contact form function.

## Commands

```bash
# Development
yarn dev                    # Start dev server at localhost:3000

# Build & Deploy
yarn build                  # Production build
yarn generate               # Generate static site

# Linting
yarn lint                   # Run all linters (ESLint, Stylelint, Prettier)
yarn lintfix                # Auto-fix all lint issues
yarn lint:js                # ESLint only
yarn lint:style             # Stylelint only
yarn lint:prettier          # Prettier check only
```

## Tech Stack

- **Framework**: Nuxt 2.15 with `@nuxtjs/composition-api`
- **Styling**: Tailwind CSS 3 with custom colors (primary: `#1A1E39`, secondary: `#22b573`, main-blue: `#0085ff`)
- **Icons**: FontAwesome via `@fortawesome/vue-fontawesome`
- **Deployment**: Netlify (static target, SSR disabled)
- **Email**: Mailjet via `node-mailjet` in Netlify function
- **Error Tracking**: Sentry via `@nuxtjs/sentry`
- **Node Version**: 16.14.2 (see `.nvmrc`)

## Architecture

### Key Directories

- `pages/` - Single page app with `index.vue` as the main landing page
- `components/` - Vue components (ContactForm, HeaderMenu, PageFooter, etc.)
- `netlify/functions/` - Serverless functions (contact form handler at `contact.ts`)
- `types/` - TypeScript type definitions
- `plugins/` - Vue plugins (FontAwesome setup)

### Contact Form Flow

1. User submits form in `components/ContactForm.vue`
2. Form validates inputs and includes honeypot spam protection (hidden phone field + 7-second minimum time)
3. POST request sent to `/.netlify/functions/contact`
4. `netlify/functions/contact.ts` sends email via Mailjet API

## Environment Variables

Required for production (set in Netlify):

- `MAILJET_API_KEY`
- `MAILJET_API_SECRET`
- `SENTRY_DSN`

## Code Style

- ESLint config extends `@nuxtjs/eslint-config-typescript` with Prettier
- Imports must be sorted (`sort-imports` rule)
- Path aliases: `~/` and `@/` both resolve to project root
