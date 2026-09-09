import type { Service } from '~/types/Service'

export const services: Service[] = [
  {
    id: 'web',
    title: 'Applications web sur mesure',
    description:
      "Conception et développement d'applications web métier, de portails clients et d'espaces d'administration adaptés à vos processus internes.",
    deliverables: [
      'Interfaces web responsives',
      'API et back-end',
      'Intégration à vos outils existants',
    ],
  },
  {
    id: 'mobile',
    title: 'Applications mobiles iOS et Android',
    description:
      "Développement d'applications mobiles multiplateformes, de la première maquette jusqu'à la publication sur l'App Store et Google Play.",
    deliverables: [
      'Applications React Native et Expo',
      'Publication et suivi des mises à jour',
      'Notifications et fonctionnalités natives',
    ],
  },
  {
    id: 'saas',
    title: 'Plateformes SaaS',
    description:
      'Construction de produits SaaS complets : authentification, gestion des abonnements, tableaux de bord et infrastructure prête à monter en charge.',
    deliverables: [
      'Architecture multi-utilisateurs',
      'Paiements et abonnements',
      'Hébergement et supervision',
    ],
  },
  {
    id: 'support',
    title: 'Maintenance et accompagnement technique',
    description:
      'Suivi de vos applications après la mise en production : corrections, évolutions, mises à jour de sécurité et conseil sur vos choix techniques.',
    deliverables: [
      'Maintenance corrective et évolutive',
      'Mises à jour de sécurité',
      'Audit et conseil technique',
    ],
  },
]
