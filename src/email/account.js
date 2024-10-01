const sendGridApiKey = process.env.SENDGRID_API_KEY
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(sendGridApiKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ricky.linkshadow@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ricky.linkshadow@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

// sendWelcomeEmail('rickychris6@gmail.com', 'Chris')

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}