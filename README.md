This debugging tool simply outputs data to logs file, so that you would not have to use console.logs.

# Installation
1. Navigate to your project directory.
2. Run `npm i --save-dev debug-util-sd`, which will install this package to your dev dependencies of your project.

# Usage
This tool depends on invironmental variable `DEBUG`. If it equals to `true`, it would run. If `false`, then will not. To set this variable run your server like this: `DEBUG=true node /path/to/index/file`.

Make sure to create directory and file `logs/debug.log` outside your source folder. 
