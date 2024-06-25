/** Database setup for BizTime. */

const { Client } = require("pg");

// Determine the correct database URI based on the environment
let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///biztime_test";
} else {
  DB_URI = "postgresql:///biztime";
}

// Create a new client instance
const db = new Client({
  connectionString: DB_URI
});

// Connect to the database and log connection status
db.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => {
    console.error("Connection error", err.stack);
    process.exit(1); // Exit the process with failure
  });

module.exports = db;
