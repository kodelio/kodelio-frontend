import Mailjet, { SendEmailV3_1 as sendMailjet } from 'node-mailjet'
import { Handler } from '@netlify/functions'

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
})

const handler: Handler = (event) => {
  if (event.httpMethod === 'POST' && event.body) {
    const { firstname, lastname, email, message } = JSON.parse(event.body)
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
          Subject: 'Nouveau message sur kodelio.com',
          HTMLPart: `Nom : <b>${firstname} ${lastname}</b><br />Adresse email : ${email}<br />Message :\n ${message}<br />"`,
          TextPart:
            'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
        },
      ],
    }

    mailjet
      .post('send', { version: 'v3.1' })
      .request({ ...data })
      .then((result) => {
        const { Status } = (result.body as unknown as sendMailjet.IResponse)
          .Messages[0]
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
}

export { handler }
