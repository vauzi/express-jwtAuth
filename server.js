const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 5000;

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/customer.routes")(app);

app.listen(port, () => {
  console.log(
    `Example app listening on port ${port}  jangan lupa ceck middleware`
  );
});

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Database");
  // initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
  Role.create({
    id: 3,
    name: "moderator",
  });
}
