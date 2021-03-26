const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/index');

router.get("/", controller.updatestats);
router.get("/", controller.statistics);

module.exports = router;