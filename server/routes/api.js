var express = require("express");
var router = express.Router();
const apiController = require("../controllers/apiItem");
const apiTransaction = require("../controllers/apiTransaction");
// var multer =  require('multer');
// const upload = multer({ dest: '../../client/src/components/add/DataAdd' })

// API DATA
router.post("/item/search", apiController.itemBrowse);
router.get("/item", apiController.itemRead);
router.post("/item", apiController.itemCreate);
router.put("/item/:id", apiController.itemUpdate);
router.delete("/item/:id", apiController.itemDelete);
router.get("/item/:id", apiController.itemFind);

// API Transaction
router.get("/transaction",  apiTransaction.transactionRead);
router.post("/transaction", apiTransaction.transactionCreate);
router.put("/transaction/:id", apiTransaction.transactionUpdate);
router.delete("/transaction/:id", apiTransaction.transactionDelete);

module.exports = router;
