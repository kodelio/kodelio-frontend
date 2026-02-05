import type { Handler } from '@netlify/functions'
import type { SendEmailV3_1 as sendMailjet } from 'node-mailjet'

import Mailjet from 'node-mailjet'
import { z } from 'zod'

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
})

// Validation schema for contact form
const contactSchema = z.object({
  firstname: z.string().min(1).max(100),
  lastname: z.string().min(1).max(100),
  email: z.string().email().max(254),
  message: z.string().min(1).max(5000),
  phone: z.string().max(50).optional().default(''),
})

// Escape HTML to prevent XSS in email clients
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing request body' }),
    }
  }

  // Parse JSON with error handling
  let rawBody: unknown
  try {
    rawBody = JSON.parse(event.body)
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    }
  }

  // Validate input
  const parsed = contactSchema.safeParse(rawBody)
  if (!parsed.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid input' }),
    }
  }

  const { firstname, lastname, email, message, phone } = parsed.data

  // Honeypot check - if phone field is filled, silently reject (likely spam)
  if (phone && phone.length > 0) {
    return {
      statusCode: 200,
      body: JSON.stringify('success'),
    }
  }

  // Escape all user inputs for HTML email
  const safeFirstname = escapeHtml(firstname)
  const safeLastname = escapeHtml(lastname)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message)

  const data: sendMailjet.Body = {
    Messages: [
      {
        From: {
          Email: 'laurent@kodelio.fr',
        },
        To: [
          {
            Email: 'laurent@kodelio.fr',
          },
        ],
        Headers: { 'Reply-To': email },
        Subject: 'Nouveau message sur kodelio.com',
        HTMLPart: `Nom : <b>${safeFirstname} ${safeLastname}</b><br />Adresse e-mail : ${safeEmail}<br />Message :<br /> ${safeMessage}`,
        TextPart: `Nom : ${firstname} ${lastname}\nAdresse e-mail : ${email}\nMessage :\n ${message}`,
      },
    ],
  }

  try {
    const result = await mailjet
      .post('send', { version: 'v3.1' })
      .request({ ...data })

    const response = result.body as unknown as sendMailjet.Response
    const status = response.Messages[0]?.Status ?? 'success'
    return {
      statusCode: 200,
      body: JSON.stringify(status),
    }
  } catch (error) {
    console.error('Mailjet error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}

export { handler }
