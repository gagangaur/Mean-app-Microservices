function init(msg, done) {
  console.log("Init Method called");
  // data = require("./books.json");
  book = this.make$("books");

  done();
}
const plugin = function () {
  this.add({ component: "catalog", operation: "fetchAll" }, function (
    args,
    reply
  ) {
    allBooks = [];
    book.list$({}, function (err, list) {
      allBooks = list;
      // console.log(allBooks);
      reply(null, { arr: allBooks });
    });
  });
  this.add({ component: "catalog", by: "title" }, (args, reply) => {
    console.log("Title Value : ", args.title);
    const title = args.title;
    let matchedTitleArray = data.filter((item) => item.title == title);
    reply(null, { arr: matchedTitleArray });
  });
  this.add({ component: "catalog", by: "isbn" }, (args, reply) => {
    let isbn = args.isbn;
    let matchedISBNArray = data.filter((item) => item.isbn == isbn);
    reply({ arr: matchedISBNArray });
  });
  this.add({ component: "catalog", by: "rating" }, (args, reply) => {
    console.log("Inside the rating catalog");
    let max_rating = [];
    console.log(args.rating);
    if (args.rating == "excellent") {
      data.forEach((element) => {
        if (element.rating == 5) {
          max_rating.push(element);
        }
      });
    } else if (args.rating == "good") {
      data.forEach((element) => {
        if (element.rating >= 4.5) {
          max_rating.push(element);
        }
      });
    } else {
      data.forEach((element) => {
        if (element.rating < 4.5) {
          max_rating.push(element);
        }
      });
    }
    reply(null, { answer: max_rating });
  });
  this.add({ component: "catalog", by: "category" }, (args, reply) => {
    let id = [];
    console.log(args.category);
    data.find((element) => {
      if (element.category == args.category) {
        id.push(element._id);
      }
    });
    console.log(id);
    reply(null, { answer: id });
  });
  this.add({ init: "plugin" }, init);
};
module.exports = plugin;
