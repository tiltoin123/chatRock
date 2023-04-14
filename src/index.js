require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.FROM_NUMBER;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require("body-parser");


const express = require("express");
const app = express();
const port = 3000;

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
  );

  app.get("/", (req, res) => {
    res.send("Hello World!");
    client.messages
    .create({
        body: 'manda alguma coisa so pra testar',
        from: `whatsapp:${twilioNumber}`,
        to: 'whatsapp:+5516992150105'
    })
    .then(message => console.log(message))
    //console.log(client)
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});