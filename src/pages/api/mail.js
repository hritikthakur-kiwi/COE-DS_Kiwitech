require("dotenv").config();
const nodemailer = require("nodemailer");
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */


const sendEmail = (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { from, to, subject, html } = data;
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: process.env.EMAIL_PORT,
          secure: false,
          auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPASSWPORD,
          },
        });
        // const dsn = {
        //   id: data.subject,
        //   return: 'headers',
        //   notify: ['failure', 'delay'],
        //   recipient: to,
        // };
        // const mailOptions = { from, to, subject, html, dsn };
        const mailOptions = { from, to, subject, html };
        await transporter.sendMail(mailOptions);
        resolve('mail sent successfully');
      } catch (err) {
        console.log('error', err);
        reject(err);
      }
    });
};
  
export default async function mail(req, res) {
  try {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
    const { lookingFor, name, email, phone, description } = req.body;
    if (!name || name === '' || name.trim() === '') {
      return res.status(400).json({ message: 'name is required.' });
    }
    if (!email || email === '' || email.trim() === '') {
      return res.status(400).json({ message: 'email is required.' });
    }
    const from = process.env.EMAILFROMANDTO;
    const to = process.env.EMAILFROMANDTO;
    const subject = "New web3 Lead";
    const html = `
    <body>
    <table>
    <tr>
    <th>Looking For</th>
    <td>${lookingFor}</td>
    </tr>
    <tr>
    <th>Full name</th>
    <td>${name}</td>
    </tr>
    <tr>
    <th>Email</th>
    <td>${email}</td>
    </tr>
    <tr>
    <th>Phone Number</th>
    <td>${phone}</td>
    </tr>
    <tr>
    <th>Description</th>
    <td>${description}</td>
    </tr>
    </table>
    </body>
    `
    await sendEmail({from,to,subject, html});
    return res.status(200).json({ message: 'Your response is recorded, we will get back to you shortly.' });
  } catch (error) {
    return res.status(500).json({ message: error.message ? error.message : 'Internal Server Error' });
  }
};