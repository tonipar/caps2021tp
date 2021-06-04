const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/cars",
    createProxyMiddleware({
      target: "http://localhost:8080",
      pathRewrite: {
        "^/api/cars": "/Cars",
      },
    })
  );
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      pathRewrite: {
        "^/api/": "/",
      },
    })
  );
};
