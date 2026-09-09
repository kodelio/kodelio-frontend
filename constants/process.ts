import type { ProcessStep } from '~/types/ProcessStep'

export const processSteps: ProcessStep[] = [
  {
    id: 'framing',
    step: 1,
    title: 'Cadrage',
    description:
      'Nous définissons ensemble vos besoins, vos utilisateurs et le périmètre du projet. Cette étape aboutit à un cahier des charges et à un devis détaillé.',
  },
  {
    id: 'design',
    step: 2,
    title: 'Conception',
    description:
      'Parcours utilisateurs, maquettes et architecture technique sont validés avant la première ligne de code, pour éviter les mauvaises surprises.',
  },
  {
    id: 'build',
    step: 3,
    title: 'Développement',
    description:
      "Le développement avance par itérations courtes. Vous suivez l'avancement sur un environnement de recette accessible à tout moment.",
  },
  {
    id: 'run',
    step: 4,
    title: 'Mise en production et suivi',
    description:
      'Déploiement, publication sur les stores si nécessaire, puis maintenance et évolutions selon les retours de vos utilisateurs.',
  },
]
