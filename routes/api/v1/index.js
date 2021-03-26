const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/index');

router.get("/update", controller.updateStats);
router.get("/live", controller.statistics);

module.exports = router;