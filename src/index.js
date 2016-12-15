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



const packageVersion = require('../package.json');

/*
// Current Version
const versionNow = packageVersion.version.split('.');

// Capturing the arrays in to const, splitted by the previous code in line 5
const prevMajor = parseInt(versionNow[0], 10);
const prevMinor = parseInt(versionNow[1], 10);
const prevPatch = parseInt(versionNow[2], 10);



exports.up = (msg, updater) => {
  // If it is major then version will add 1 on major
  if (updater === 'major') {
    const newmajor = prevMajor + 1;
    console.log(newmajor + '.' + prevMinor + '.' + prevPatch);

    // If it is minor then version will add 1 on minor
  } else if (updater === 'minor') {
    const newminor = prevMinor + 1;
    console.log(prevMajor + '.' + newminor + '.' + prevPatch);

    // If it is patch then version will add 1 on patch
  } else if (updater === 'patch') {
    const newpatch = prevMinor + 1;
    console.log(prevMajor + '.' + prevMinor + '.' + newpatch);
  } else {
    console.log('Your Current Package', packageVersion.version)
  }
};
const vupdate = require('./version_updater/vupdate');
vupdate.up('some msg', 'patch');
*/
