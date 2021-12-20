var mongoose = require("mongoose");
let config = require('../config');

const db = config.db.MONGO_URL;
//mongoose.Promise = global.Promise;

// Connecting to database
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('DB Connected')
}).catch((e)=>{
  console.log('DB Connection Failed : ', e)
});

/*
function (error) {
    if (error) {
      console.log("Error!" + error);
    }
  }
*/