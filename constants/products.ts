import type { Product } from '~/types/Product'

/**
 * Produits édités par Kodelio.
 *
 * Cette liste est comparée par les stores et les organismes de vérification
 * avec les applications publiées sous le compte développeur : ne décrire ici
 * que des produits réels, et mettre `status` à jour au fil des publications.
 */
export const products: Product[] = [
  {
    id: 'quand-app',
    name: 'quand.app',
    description:
      'Application éditée par Kodelio, dont la publication sur l’App Store et Google Play est en préparation.',
    platforms: ['iOS', 'Android', 'Web'],
    url: 'https://quand.app',
    status: 'En cours de développement',
  },
]

/**
 * Projets réalisés pour des clients. Renseigner uniquement des références pour
 * lesquelles vous disposez d'un accord de communication.
 */
export const clientWork = {
  title: 'Projets clients',
  description:
    "Kodelio conçoit et développe également des applications web et mobiles pour le compte de ses clients, du cadrage jusqu'à la publication sur les stores et la maintenance en production.",
  sectors: [
    'Santé',
    'Technologies de l’information',
    'Services aux entreprises',
  ],
}
