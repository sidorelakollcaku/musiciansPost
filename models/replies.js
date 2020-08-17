// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Replies" model that matches up with DB
const Replies = sequelize.define("replies", {
  replied_post_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  comment: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Replies.sync();

// Makes the Replies Model available for other files (will also create a table)
module.exports = Replies;