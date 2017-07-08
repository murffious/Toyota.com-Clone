// const nodemailer = require('nodemailer');
// const moment = require('moment');
// const config = require('../config');




// module.exports = {
//     sendEmail: (req, res) => {
//         const {first, last, phone, email, date, time} = req.body
//         let newdate = moment(date).format('LL')
//         const message = `${first} ${last} has requested an apppointment on ${newdate} at ${time}. Contact at ${phone} or ${email}`

//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             secure: true,
//             auth: {
//                 user: config.emailuser,
//                 pass: config.emailpass
//             }
//         });

//         // setup email data with unicode symbols
//         let mailOptions = {
//             from: `"Appointment Request" <${config.fromemail}>`, // sender address
//             to: config.toemail, // list of receivers
//             subject: 'Requested Appointment', // Subject line
//             text: message, // plain text body
//             // html: `<b>${ req.body.body }</b>` // html body
//         };


//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.log(error)
//                 res.send(error)
//             }
//             // console.log('Message %s send: %s', info.messageId, info.response);
//             res.status(200).send(info);
//         });

//     },