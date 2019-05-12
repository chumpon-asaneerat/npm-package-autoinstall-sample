console.log('nlib install process...start.');

const npmi = require('npmi');
const path = require('path');

console.log(npmi.NPM_VERSION); // prints the installed npm version used by npmi

var options = {
  name: 'your-module',	// your module name
  version: '0.0.1',		// expected version [default: 'latest']
  path: '.',				// installation path [default: '.']
  forceInstall: false,	// force install if set to true (even if already installed, it will do a reinstall) [default: false]
  npmLoad: {				// npm.load(options, callback): this is the "options" given to npm.load()
    loglevel: 'silent'	// [default: {loglevel: 'silent'}]
  }
};

let opts = {
  name: 'express',
  version: 'latest',
  path: '.',
  forceInstall: false
}

npmi(opts, function (err, result) {
  if (err) {
    if (err.code === npmi.LOAD_ERR) console.log('npm load error');
    else if (err.code === npmi.INSTALL_ERR) console.log('npm install error');
    return console.log(err.message);
  }

  // installed
  console.log(opts.name + '@' + opts.version + ' installed successfully in ' + path.resolve(opts.path));
});


/*
// required to install npm package locally.
//var npm = require("npm");
const npm = require('npm');

let opts = {
    loaded: false
}

npm.load(opts, function (err) {
  console.log('npm load..');
  npm.on("log", function (message) {
    // log the progress of the installation
    console.log(message);
  });
  if (!err) {
    //let pkgName = "hello-world@0.0.1";
    let pkgList = ["express"];
    try {
      npm.commands.install(pkgList, function(er, data) {
        console.log(er);
        console.log(data);
      })
    }
    catch (ex) {
      console.log(ex);
    }
  }
});

*/

/*
npm.load(opts, function (err) {
  // catch errors
  //npm.commands.install(["hello-world@0.0.1"], function (er, data) {
    // log the error or data
  //});
  npm.on("log", function (message) {
    // log the progress of the installation
    console.log(message);
  });
});

*/

console.log('nlib install process...finished.');