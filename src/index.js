require('dotenv').config();
// File Structure, thing that helps with files behinf the scene.
const fs = require('fs');

// Declaring file ("flag: a" means append)
const logFile = fs.createWriteStream('./logs/debug.log', { flags: 'a' });
const date = new Date();
// Run this code only if env var DEBUG is set to true
if (process.env.DEBUG === 'true') {
  // Suppressing console.logs
  console.log = () => {};
  module.exports = {
    // Sending object with a function
    debug: function debug(d) {
      logFile.write(`[${date}] ${d} \n`);
    },
  };
}
