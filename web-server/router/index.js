const express = require("express");
const router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");

router.use(
  "/user",
  createProxyMiddleware({
    target: "http://localhost:8990/user",
    changeOrigin: true,
  }),
);

router.use(
  "/board",
  createProxyMiddleware({
    target: "http://localhost:8991/board",
    changeOrigin: true,
  }),
);

router.route("/abcd").get(undefined).post(undefined).post(undefined);

module.exports = router;
