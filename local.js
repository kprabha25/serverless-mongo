let app = require("./src/server");
let port = process.env.PORT || 3000;

// Server
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
