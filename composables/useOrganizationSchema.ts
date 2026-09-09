import { address, company, contact, phoneHref } from '~/constants/company'

/**
 * Données structurées Schema.org décrivant l'entreprise.
 *
 * Elles permettent aux moteurs de recherche et aux outils de vérification
 * d'identité de rattacher le site à l'entité légale déclarée.
 */
export function useOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${contact.websiteUrl}/#organization`,
    name: company.brand,
    legalName: company.legalName,
    description:
      'Kodelio conçoit et développe des applications web, des applications mobiles iOS et Android et des plateformes SaaS sur mesure pour les entreprises et les porteurs de projets.',
    url: contact.websiteUrl,
    ...(contact.phone ? { telephone: phoneHref } : {}),
    foundingDate: company.foundingYear,
    founder: {
      '@type': 'Person',
      name: company.legalRepresentative,
    },
    vatID: company.vatNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.countryCode,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    sameAs: [contact.linkedinUrl, contact.maltUrl],
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })

  return { schema }
}
