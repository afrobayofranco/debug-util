// File Structure, thing that helps with files behinf the scene.
const fs = require('fs');

// Color Modules to Get Colors in Terminal for Console Data
const colors = require('colors');


//const logFile = fs.createWriteStream('./logs/debug.log', { flags: 'a' });
const date = new Date();


exports.debug = (d,b) => {

  // Run this code only if env var DEBUG is set to true
  if (process.env.DEBUG === 'true') {
    // console log all the error
    if (b === 'error') {
    // Console Logging date and message
      console.log(colors.black(date),colors.red(d));
    } else if (b === 'warn') {
      // console log all the warnings
      console.log(colors.black(date),colors.yellow(d));
      } else {
      // console log all the successes
      console.log(colors.black(date),colors.green(d));
    }
  }
};
