// File Structure, thing that helps with files behinf the scene.
const fs = require('fs');

// Declaring file ("flag: a" means append)
const logFile = fs.createWriteStream('./logs/debug.log', { flags: 'a' });
const date = new Date();


exports.debug = (d) => {

  // Run this code only if env var DEBUG is set to true
  if (process.env.DEBUG === 'true') {
    // Sending object with a function
      logFile.write(`[${date}] ${d} \n`);
    }

}
