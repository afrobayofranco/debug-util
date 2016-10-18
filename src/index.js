// File Structure, thing that helps with files behinf the scene.
const fs = require('fs');

// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');


//const logFile = fs.createWriteStream('./logs/debug.log', { flags: 'a' });
const date = new Date();


exports.debug = (d) => {

  // Run this code only if env var DEBUG is set to true
  if (process.env.DEBUG === 'true') {
    // Console Logging date and message
      console.log(colors.green(date),colors.red(d));
    }

}
