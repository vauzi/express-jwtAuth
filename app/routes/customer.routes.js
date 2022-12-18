const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller.js");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, accept"
    );
    next();
  });

  app.get("/api/customer/list", [authJwt.verifyToken], controller.getCustomer);
  app.post(
    "/api/customer/create",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.createCustomer
  );
  app.get(
    "/api/customer/show/:id",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.findCustomerById
  );
  app.put(
    "/api/customer/update/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.updateCustomer
  );
  app.delete(
    "/api/customer/delete/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteCustomer
  );
};
