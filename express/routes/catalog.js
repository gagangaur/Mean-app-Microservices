var express = require("express");
var router = express.Router();
var seneca = require("seneca")({ log: "silent" });
seneca.client(9090);
/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("Inside catalog route");
  seneca.act({ component: "catalog", operation: "fetchAll" }, (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      res.send(result.arr);
    }
  });
});
router.get("/title/:title", function (req, res, next) {
  title = req.params.title;
  console.log(title);
  seneca.act(
    { component: "catalog", by: "title", title: title },
    (err, result) => {
      if (err) {
        console.log("Error");
      } else {
        res.send(result.arr);
      }
    }
  );
});

module.exports = router;
