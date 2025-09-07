const express = require("express");
const router = express.Router();
const carServiceController = require("../controllers/carServiceController");

// Routes mapping
router.post("/", carServiceController.createService);
router.get("/", carServiceController.getAllServices);
router.get("/:id", carServiceController.getServiceById);
router.put("/:id", carServiceController.updateService);
router.delete("/:id", carServiceController.deleteService);

module.exports = router;
