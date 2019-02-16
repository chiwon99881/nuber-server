import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_KEY || "",
    domain: process.env.MAILGUN_DOMAIN || ""
});

const sendEmail = (subject:string, html:string) => {
    const emailData : Mailgun.messages.SendData = {
        from: "chiwon99881@gmail.com",
        to: "chiwon99881@gmail.com",
        subject,
        html
    }
    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
    const emailSubject = `Hello! ${fullName} , please verify your email`;
    const emailBody = `Verify your email by Clicking <a href="http://chiwoningJJANG.com/verification/${key}/">here</a>`;
    return sendEmail(emailSubject, emailBody);
};

