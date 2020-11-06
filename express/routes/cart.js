var express = require("express");
var router = express.Router();
var seneca = require("seneca")({ log: "silent" });
seneca.listen(9092);
/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("Inside the cart router");
  console.log(req.query.id);
  seneca.act(
    { component: "cart", operation: "add", id: req.query.id },
    (err, reply) => {
      console.log("Inside act cart");
      if (err) {
        console.log("Inside return error");
        return console.log(err);
      } else {
        // res.send(reply.msg);
        console.log("hello");
      }
    }
  );
});

module.exports = router;
