const seneca = require("seneca")({ log: "silent" });
const entities = require("seneca-entity");
const cartPlugin = require("./cart.plugin");
seneca.use(entities);
seneca.use("mongo-store", {
  name: "FSEDB1",
  host: "127.0.0.1",
  port: 27017,
});
seneca.use(cartPlugin);
seneca.ready(function (err) {
  console.log("Inside Cart Plugin");
  seneca.listen({ host: "127.0.0.1", port: 9092 });
});
