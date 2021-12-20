const express = require("express");
const router = express.Router();
const twilio = require('twilio');
let config = require('../../config');

const accountSid = config.twilio.twilio_MY_AUTH_ACCOUNT_SID
const authToken = config.twilio.twilio_MY_AUTH_AUTH_TOKEN
const twilioClient = new twilio(accountSid, authToken)

router.post("/sendtext", async (req, res) => {
    const {recipient, textmessage} = req.query
    await twilioClient.messages.create({
        body: textmessage,
        to: `+${recipient}`,
        from: config.twilio.twilio_phone_num
    }).then(data => {
        console.log('twilioClient Success  : ',data)
        res.status(200).send({ success : "Message sent " })
    })
    .catch(er => {
        res.status(404)
        console.log(er)
	    res.send({ Error : er})
    })
    
})

router.post("/login", async (req, res) => {
    const {recipient, channel} = req.query
    await twilioClient.verify.services(config.twilio.twilio_serviceId).verifications
    .create({
        to: `+${recipient}`,
        channel: channel
    }).then(data => {
        console.log('twilioClient Success  : ',data)
        res.status(200).send(data)
    })
    .catch(er => {
        res.status(404)
        console.log(er)
	    res.send({ Error : er})
    })

    // await twilioClient.verify.services(config.twilio.twilio_serviceId)
    //          .verifications(config.twilio.twilio_serviceId)
    //          .fetch()
    //          .then(verification => console.log(verification.status));
})

router.post("/verify", async (req, res) => {
    const {recipient, code} = req.query
    await twilioClient.verify.services(config.twilio.twilio_serviceId).verificationChecks
    .create({
        to: `+${recipient}`,
        code: code
    }).then(data => {
        console.log('twilioClient Success  : ',data)
        res.status(200).send(data)
    })
    .catch(er => {
        res.status(404)
        console.log(er)
	    res.send({ Error : er})
    })
})

module.exports = router;
