// Call in installed dependencies
const express = require('express');
// set up express app
const app = express();
// set up port number
const port = 5035;
// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});

app.post("/register", function (req, res) {
console.log('req, res', req, res)
  var username = req.body.username
  var password = req.body.password
  User.register(new User({ username: username }),
          password, function (err, user) {
      if (err) {
          console.log(err);
          return res.render("register");
      }

      passport.authenticate("local")(
          req, res, function () {
          res.render("secret");
      });
  });
});
