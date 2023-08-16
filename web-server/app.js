const express = require("express")
// const fs = require("fs");
const cors = require("./config/corsConfig")
const cacheServer = require("./config/cacheConfig");
const router = require("./router");
const app = express();
const serverPort = 9121;

app.use(cors);
app.get("/", cacheServer(60), router);

app.listen(serverPort, () => {
  console.log(`Server running at ${serverPort} port`);
})