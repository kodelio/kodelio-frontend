import type { TechCategory } from '~/types/TechCategory'

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Front-end',
    items: ['TypeScript', 'Vue.js', 'Nuxt', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    id: 'backend',
    label: 'Back-end',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'Supabase', 'API REST'],
  },
  {
    id: 'infra',
    label: 'Infrastructure',
    items: ['Netlify', 'Docker', 'CI/CD', 'Supervision et alerting'],
  },
]
