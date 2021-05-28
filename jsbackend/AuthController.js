const users = [
  { username: "user", password: "salasana", role: "USER" },
  { username: "admin", password: "salasana", role: "ADMIN" },
];

export default (app) => {
  app.post("/login", (req, res, next) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);

    if (password === user.password) {
      const token = { role: user.role };

      res.cookie("accessToken", token, { signed: true, httpOnly: true });

      res.send(token);
    } else {
      const error = new Error("Unauthorized");
      error.statusCode = 401;
      next(error);
    }
  });
};

export const secure = (...allowedRoles) => {
  return (req, res, next) => {
    const { signedCookies } = req;

    const accessToken = signedCookies.accessToken;

    if (accessToken && allowedRoles.includes(accessToken.role)) {
      req.accessToken = accessToken;
      next();
    } else {
      const error = new Error("Unauthorized");
      error.statusCode = 401;
      next(error);
    }
  };
};
