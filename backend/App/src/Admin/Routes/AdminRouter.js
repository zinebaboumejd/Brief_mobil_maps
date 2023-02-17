const express = require("express");
const router = express.Router();
const {getUser
}=require("../controller/Repascontroller")
const {protect,role}=require('../../../middlewares/authMiddlewre')

router.route("/getUser").get(protect,role("admin"),getUser);

module.exports = router;