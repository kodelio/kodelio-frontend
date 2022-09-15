import Mailjet, { SendEmailV3_1 as sendMailjet } from 'node-mailjet'
import { Handler } from '@netlify/functions'
import axios from 'axios'

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
})

const handler: Handler = (event) => {
  if (event.httpMethod === 'POST' && event.body) {
    const { firstname, lastname, email, message, token } = JSON.parse(
      event.body
    )
    if (token) {
      axios
        .post(
          `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.RECAPTCHA_PROJECT_ID}/assessments?key=${process.env.RECAPTCHA_API_KEY}`,
          {
            event: {
              token,
              siteKey: process.env.RECAPTCHA_KEY,
              expectedAction: 'FORM_EMAIL_SUBMIT',
            },
          }
        )
        .then((response) => {
          if (response.data.tokenProperties.valid) {
            const data: sendMailjet.IBody = {
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
                  HTMLPart: `Nom : <b>${firstname} ${lastname}</b><br />Adresse e-mail : ${email}<br />Message :<br /> ${message}`,
                  TextPart: `Nom : ${firstname} ${lastname}\nAdresse e-mail : ${email}\nMessage :\n ${message}`,
                },
              ],
            }

            mailjet
              .post('send', { version: 'v3.1' })
              .request({ ...data })
              .then((result) => {
                const { Status } = (
                  result.body as unknown as sendMailjet.IResponse
                ).Messages[0]
                return {
                  statusCode: 200,
                  body: JSON.stringify(Status),
                }
              })
              .catch((err) => {
                return {
                  statusCode: 500,
                  body: JSON.stringify(err),
                }
              })
          }
        })
    }
  }
}

export { handler }
