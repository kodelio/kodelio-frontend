export interface FaqEntry {
  question: string
  answer: string
}

export const faqEntries: FaqEntry[] = [
  {
    question: 'Sous quel délai obtiendrai-je une réponse ?',
    answer:
      'Les demandes envoyées via le formulaire de contact reçoivent une réponse sous deux jours ouvrés.',
  },
  {
    question: 'Comment supprimer mon compte et mes données ?',
    answer:
      "La suppression est possible depuis les réglages de l'application lorsqu'elle propose un compte utilisateur, ou sur demande via le formulaire de contact. Le compte et les données associées sont alors effacés.",
  },
  {
    question: 'Dans quelles langues le support est-il assuré ?',
    answer: 'Le support est assuré en français et en anglais.',
  },
]
