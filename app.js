const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const path = require('path');
const users = require("./routes/api/users_routes");
const bodyParser = require('body-parser');
const passport = require('passport');
const budget = require('./routes/api/budget_routes')

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", users);
app.use("/api/budget", budget);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }

app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());
require('./config/passport')(passport);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));