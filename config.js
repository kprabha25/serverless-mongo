require('dotenv').config();

// Connecting to database
let db_pwd = process.env.MONGO_PWD || 'Atlas1234'
let twilio_accountId= process.env.TWILIO_ACCOUNT_SID;
let twilio_auth_token = process.env.TWILIO_AUTH_TOKEN;
let twilio_phone_num = process.env.TWILIO_PHONE_NUM

let mongo_url = `mongodb+srv://adminprabha:${db_pwd}@cluster0.c0uc9.mongodb.net/lamdemodb?retryWrites=true&w=majority`;
let _port = process.env.PORT || 3000
const config = {
    app: {
        port : _port
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'lamdemodb',
      MONGO_URL: mongo_url
    },
    twilio: {
         twilio_accountId: process.env.TWILIO_ACCOUNT_SID,
         twilio_auth_token : process.env.TWILIO_AUTH_TOKEN,
         twilio_phone_num :process.env.TWILIO_PHONE_NUM,
         twilio_serviceId :process.env.MY_AUTH_SERVICE,

         twilio_MY_AUTH_ACCOUNT_SID: process.env.MY_AUTH_ACCOUNT_SID,
         twilio_MY_AUTH_AUTH_TOKEN : process.env.MY_AUTH_AUTH_TOKEN,
         twilio_phone_num :process.env.MY_AUTH_SERVICE
    }
   };
   
   module.exports = config;