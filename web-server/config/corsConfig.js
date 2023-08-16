const cors = require("cors");

const origin = "http://localhost:9120";

module.exports = cors({
  origin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
});
