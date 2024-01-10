const express = require("express");
const router = express.Router();
const locationController = require("../controllers/location_controller");

router.get("/location_details", locationController.location);

module.exports = router;
