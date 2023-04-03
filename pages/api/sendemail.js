const nodemailer = require('nodemailer')
import { log } from 'next-axiom'
export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    if (req.method === 'POST') {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'blog.malange.contact@gmail.com',
                pass: 'mlgcufrfmqrwazfd',
            },

        })
        // console.log(res)
        const { email:to, subject, text, recipe } = req.body
        const mailData = {
            from: 'Melange <blog.malange.contact@gmail.com>',
            to: to,
            subject: subject,
            text: text,
            html: `
                <p> ${text} <p/>
            `,
        }

        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                res.status(500).send({ message: 'Mail not Sent' })
                return log.error("Error in send mail",error)
            }
            res.status(200).send({ message: 'Mail send', message_id: info.messageId })
        })
    }
}
