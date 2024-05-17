const express = require('express')
const addressesController = require('../controller/address-controller')
const router = express.Router();

router.get("/", addressesController.getAddress);
router.get("/:addressId", addressesController.getAddressById);
router.post("/", addressesController.createAddress);
router.delete("/:addressId", addressesController.deleteAddress);
router.patch("/:addressId", addressesController.editAddress);

module.exports = router;

