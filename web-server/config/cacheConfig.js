const cache = require("memory-cache");

module.exports = (duration) => {
  return (req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedBody = cache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        cache.put(key, body, duration * 1000);
        res.sendResponse(body);
      }
    }
    next();
  }
}