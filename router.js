const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController.js");
const productController = require("./controllers/productController.js");
const restaurantController = require("./controllers/restaurantController.js");
const orderController = require("./controllers/orderController.js");

/**************************************
 *             REST API               *
 **************************************/

// memberga dahildor routerlar
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
  "/member/:id",
  memberController.retrieveAuthMember,
  memberController.getChosenMember
);

// Product related routers
router.post(
  "/products",
  memberController.retrieveAuthMember,
  productController.getAllProducts
);

router.get(
  "/products/:id",
  memberController.retrieveAuthMember,
  productController.getChosenProduct
);


//  Restaurant related routers

router.get(
  "/restaurants",
  memberController.retrieveAuthMember,
  restaurantController.getRestaurants
);

router.get(
  "/restaurants/:id",
  memberController.retrieveAuthMember,
  restaurantController.getChosenRestaurant
);


// ORDER RELATED ROUTERS

router.post(
  "/orders/create",
  memberController.retrieveAuthMember,
  orderController.createOrder
);

module.exports = router;
