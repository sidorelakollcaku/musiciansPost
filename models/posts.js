// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Posts" model that matches up with DB
const Posts = sequelize.define("posts", {
  user_id: Sequelize.INTEGER,
  instrument: Sequelize.STRING,
  song: Sequelize.STRING,
  artist: Sequelize.STRING,
  link: Sequelize.STRING,
  gengre: Sequelize.STRING,
  comment: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Posts.sync();

// Makes the Posts Model available for other files (will also create a table)
module.exports = Posts;