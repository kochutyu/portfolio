const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});
admin.initializeApp();

/**
 * Here we're using Gmail to send 
 */
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kochutyura@gmail.com',
    pass: 'xgmxpwnamfbizmoq'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const dest = req.query.dest;



    const mailOptions = {
      from: 'janedoe@gmail.com', // Something like: Jane Doe <janedoe@gmail.com>
      to: 'kochutyurawork@gmail.com',
      subject: 'PORTFOLIO', // email subject
      html: `
                <div style="margin:0 auto; padding:25px; display: block !important; background-color:#47cecc; outline: 5px dashed #1ab5b3; margin: 5px;">
                    <div style="background-color: #1ab5b3;margin-bottom: 20px;color: rgb(57, 53, 53);padding: 5px;display: flex; align-items: center;">
                        <div style="font-size: 25px; font-weight: bold; margin-right: 25px;">
                            Name:
                        </div>
                        <div style="font-size: 25px;color: snow; word-wrap: break-word;">
                            ${req.query.name}
                        </div> 
                    </div>
                    <div style="background-color: #1ab5b3;margin-bottom: 20px;color: rgb(57, 53, 53);padding: 5px;display: flex; align-items: center;">
                        <div style="font-size: 25px; font-weight: bold; margin-right: 25px;">
                            Email:
                        </div>
                        <div style="font-size: 25px;color: snow; word-wrap: break-word;">
                            ${req.query.email}
                        </div> 
                    </div>
                    <div style="background-color: #1ab5b3;color: rgb(57, 53, 53);padding: 5px;display: flex; align-items: center;">
                        <div style="font-size: 25px; font-weight: bold; margin-right: 43px;">
                            Text:
                        </div>
                        <div style="font-size: 25px;color: snow; word-wrap: break-word;">
                            ${req.query.text}
                        </div>
                    </div> 
                </div>
        ` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('sented')
    });
  });

});
