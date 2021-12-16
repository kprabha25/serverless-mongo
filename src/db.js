var mongoose = require("mongoose");

// Connecting to database
var query = `mongodb+srv://adminprabha:<pwd>@cluster0.c0uc9.mongodb.net/lamdemodb?retryWrites=true&w=majority`;

const db = process.env.MONGO_URL;
//mongoose.Promise = global.Promise;

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