This debugging tool simply outputs data to logs file, so that you would not have to use console.logs.

# Getting Start

## Installation
To install package, Run;
```
npm i --save debug-util-sd
```
 which will install this package to your dependencies of your project.

## Usage

This tool depends on invironmental variable `DEBUG`. If it equals to `true`, it would run. If `false`, then will not. To set this variable run your server like this:

```
DEBUG=true node src/server.js
```

## Debugging

Parameter to use:

To get `Console.log();`
```
log.debug(`Here Goes Your Message`,`log`);
```
NOTE: This will out put a text with GREEN color in the console


To get `Console.error();`
```
log.debug(`Here Goes Your Message`,`error`);
```
NOTE: This will out put a text with RED color in the console

To get `Console.warn();`
```
log.debug(`Here Goes Your Message`,`warn`);
```
NOTE: This will out put a text with YELLOW color in the console
