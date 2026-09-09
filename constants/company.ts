/**
 * Identité de l'entreprise.
 *
 * Ces informations sont affichées publiquement (mentions légales, pied de page,
 * données structurées) et doivent correspondre exactement à l'immatriculation
 * officielle : les organismes de vérification (Apple Developer Program, D-U-N-S)
 * comparent le contenu du site avec les registres légaux.
 *
 * Source : RCS Paris — SIREN 930 626 841.
 */
export const company = {
  brand: 'Kodelio',
  legalName: 'Kodelio',
  legalForm: 'Société par actions simplifiée (SAS)',
  shareCapital: '1 000 €',
  siren: '930 626 841',
  rcsCity: 'Paris',
  vatNumber: 'FR54930626841',
  foundingYear: '2024',
  legalRepresentative: 'Laurent Toson',
  legalRepresentativeRole: 'Président',
} as const

export const address = {
  street: '58 rue de Monceau, CS 48756',
  postalCode: '75380',
  city: 'Paris Cedex 08',
  /** Ville sous une forme lisible, pour les mentions non administratives. */
  displayCity: 'Paris',
  region: 'Île-de-France',
  country: 'France',
  countryCode: 'FR',
} as const

export const contact = {
  /** Laisser vide tant qu'aucun numéro n'est publié : l'affichage est alors masqué. */
  phone: '',
  websiteUrl: 'https://kodelio.com',
  bookingUrl: 'https://calendly.com/laurent-kodelio/reunion-1-heure',
  linkedinUrl: 'https://www.linkedin.com/in/laurenttoson/',
  maltUrl: 'https://www.malt.fr/profile/laurenttoson',
  twitterHandle: '@_kodelio',
} as const

export const businessHours = {
  responseTime: 'Réponse sous 2 jours ouvrés',
} as const

export const hosting = {
  name: 'Netlify, Inc.',
  address: '512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis',
  websiteUrl: 'https://www.netlify.com',
} as const

/** Adresse postale sur une seule ligne. */
export const formattedAddress = [
  address.street,
  `${address.postalCode} ${address.city}`,
  address.country,
].join(', ')

/** Numéro de téléphone au format lien `tel:`, sans espaces. */
export const phoneHref = contact.phone.replace(/\s/g, '')
