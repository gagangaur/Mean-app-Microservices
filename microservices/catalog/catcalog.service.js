const seneca = require("seneca")({ log: "silent" });
const catalog = require("./catalog.plugin");
const entities = require("seneca-entity");
seneca.use(entities);
seneca.use("mongo-store", {
  name: "FSEDB1",
  host: "127.0.0.1",
  port: 27017,
});
seneca.use(catalog);
seneca.ready(function (err) {
  console.log("Server is ready!!!");

  seneca.listen(9090);
});

// .act(
//   { component: "catalog", by: "title", title: "Unlocking Android" },
//   (err, reply) => {
//     if (err) {
//       console.log("Error Occured");
//     } else {
//       console.log(reply.arr);
//     }
//   }
// )
// .act(
//   { component: "catalog", by: "isbn", isbn: "1935182234" },
//   (err, reply) => {
//     if (err) {
//       console.log("Error Occured");
//     } else {
//       console.log(reply.arr);
//     }
//   }
// );
// .act(
//   { component: "catalog", by: "rating", title: "1935182234" },
//   (err, reply) => {
//     if (err) {
//       console.log("Error Occured");
//     } else {
//       console.log(reply.arr);
//     }
//   }
// );

//   .act(
//     { component: "catalog", by: "rating", rating: "average" },
//     (err, result) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(result.answer);
//       }
//     }
//   )
//   .act(
//     {
//       component: "catalog",
//       operation: "category",
//       category: "Web Development",
//     },
//     (err, result) => {
//       if (err) {
//         console.error(err);
//       } else {
//         for (let i = 0; i < result.answer.length; i++)
//           console.log(result.answer[i]);
//       }
//     }
//   );
