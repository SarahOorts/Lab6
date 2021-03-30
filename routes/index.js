const express = require('express');
const router = express.Router();
// const routerstats = require("./routes/api/v1/index");
// const port = 3000;

// /* GET home page. */
// router.get('/', function (req, res, next){
// //   router.set("view engine", "pug");
//   res.render('index', { title: 'Lab 6' });
// });

// router.use("/api/v1", routerstats);

router.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = router;