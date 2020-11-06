function init(msg, done) {
  console.log("Inside init");
  done();
}
module.exports = function plugin() {
  this.add({ component: "cart", operation: "add" }, function (args, reply) {
    console.log(args.id);
    var books = this.make$("books");
    let id = args.id;
    console.log(id);
    var cart = this.make$("cart");
    books.list$({ id: Number(id) }, function (err, list) {
      // book = list[0];
      // console.log(book);
      cart.id = list[0].id;
      cart.title = list[0].title;
      cart.isbn = list[0].isbn;
      // console.log("The title of book is ", book.isbn);
      // cart = book;
      // console.log(cart.title);
      cart.save$(function (err, cart) {
        if (err) {
          console.log("inside save error");
          return console.log(err);
        }
        cart.list$({}, function (err, cart) {
          if (err) {
            console.log("Error inside cart List");
          } else {
            reply(null, { msg: "Book Has been added to cart" });
          }
        });
      });
    });
  });
  this.add({ init: "plugin" }, init);
};
