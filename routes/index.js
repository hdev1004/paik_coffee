// routes/index.js
const router = require("express").Router();
const controller = require("./controller");
// Node 에서는 require 이 뒤에 .js 를 붙이지 않아도 된다.

router.get("/coffee/all", controller.getAllCoffee);
router.get("/coffee/all/:id", controller.getGroupAllCoffee);
router.get("/coffee/bill/:id", controller.getBillList);
router.post("/coffee/bill", controller.insertBillList)

router.get("/", function (req, res) {
     res.end("Hello World");
})

module.exports = router;