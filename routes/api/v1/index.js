const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/index');

router.get("/update", controller.updateStats);
router.get("/dashboard", controller.statistics);

/* GET home page. */
router.get('/', function (req, res, next){
    //   router.set("view engine", "pug");
      res.render('index', { title: 'Lab 6' });
    });

module.exports = router;