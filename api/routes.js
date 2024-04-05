"use strict";

module.exports = function (app) {
  let productCtrl = require("./controllers/ProductsController");

  app.route("/products").get(productCtrl.get).post(productCtrl.store);
  app
    .route("/products/:productId")
    .get(productCtrl.detail)
    .post(productCtrl.update)
    .delete(productCtrl.delete);
};
