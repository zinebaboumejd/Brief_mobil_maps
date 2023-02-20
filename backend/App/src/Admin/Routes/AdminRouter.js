const express = require("express");
const router = express.Router();
const { getScoter, createScoter
} = require("../controller/Datacontroller")
const { protect, role } = require('../../../middlewares/authMiddlewre')

router.route("/getScoter").get( getScoter);
router.route("/createScoter").post(protect, role("admin"), createScoter);

module.exports = router;