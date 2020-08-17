// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Users" model that matches up with DB
const Users = sequelize.define("users", {
  username: Sequelize.STRING,
  instrument: Sequelize.STRING,
  zipcode: Sequelize.INTEGER
});

// Syncs with DB
Users.sync();

// Makes the Users Model available for other files (will also create a table)
module.exports = Users;