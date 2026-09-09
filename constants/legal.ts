/** Date de dernière mise à jour des pages légales, au format affiché. */
export const legalLastUpdated = '9 septembre 2026'

export interface Processor {
  name: string
  purpose: string
  location: string
}

/** Sous-traitants ayant accès à des données personnelles. */
export const processors: Processor[] = [
  {
    name: 'Netlify, Inc.',
    purpose: 'Hébergement du site et exécution du formulaire de contact',
    location:
      'États-Unis (clauses contractuelles types de la Commission européenne)',
  },
  {
    name: 'Mailjet (Sinch France SAS)',
    purpose: 'Acheminement des e-mails envoyés depuis le formulaire de contact',
    location: 'Union européenne',
  },
  {
    name: 'Functional Software, Inc. (Sentry)',
    purpose: 'Détection des erreurs techniques survenant sur le site',
    location:
      'États-Unis (clauses contractuelles types de la Commission européenne)',
  },
]

export interface DataRight {
  name: string
  description: string
}

export const dataRights: DataRight[] = [
  {
    name: "Droit d'accès",
    description:
      'Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.',
  },
  {
    name: 'Droit de rectification',
    description:
      'Faire corriger des données inexactes ou compléter des données incomplètes.',
  },
  {
    name: "Droit à l'effacement",
    description:
      'Demander la suppression des données vous concernant, sous réserve des obligations légales de conservation.',
  },
  {
    name: 'Droit à la limitation',
    description:
      "Demander la suspension temporaire de l'utilisation de vos données.",
  },
  {
    name: "Droit d'opposition",
    description:
      "Vous opposer, pour des raisons tenant à votre situation particulière, à un traitement fondé sur l'intérêt légitime.",
  },
  {
    name: 'Droit à la portabilité',
    description:
      'Recevoir les données que vous avez fournies dans un format structuré et lisible par machine.',
  },
]
