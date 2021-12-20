let app = require("./src/server");
let config = require('./config');

// Server
app.listen(config.app.port, () => {
    console.log(`Listening on: http://localhost:${config.app.port}`);
});
