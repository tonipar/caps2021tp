import jwt from "jsonwebtoken";

const VERY_SECRET_KEY = "akjngfwoeinoi2n3n2rlk3nlknslf";

const users = [
  { username: "user", password: "salasana", role: "USER" },
  { username: "admin", password: "salasana", role: "ADMIN" },
];

export default (app) => {
  app.post("/login", (req, res, next) => {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);

    if (password === user.password) {
      const token = jwt.sign({ role: user.role }, VERY_SECRET_KEY);
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
    const { query } = req;

    const accessToken = jwt.verify(query.accessToken, VERY_SECRET_KEY);
    console.log(accessToken);

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
