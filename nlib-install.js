console.log('nlib install process...start.');

// use npm
console.log('use npm.............');

const npm = require('npm');

let globalOpts = {
    loaded: false,
    global: true,
    save: true,
    'save-dev': false
}

let localOpts = {
    loaded: false,
    global: false,
    save: true,
    'save-dev': false
}

let localDevOpts = {
    loaded: false,
    global: false,
    save: false, // if true will save to dependencies not devDependencies
    'save-dev': true // required to be true.
}


npm.on("log", function (message) {
    // log the progress of the installation
    console.log(message);
});

//let pkgList = ["express"];
let pkgList = ["mssql"];

let currpkg = require('./package.json');

console.log(currpkg.dependencies);

npm.load(localOpts, function (err) {
    if (!err) {        
        try {
            npm.commands.install(pkgList, function (er, data) {
                console.log(er);
                //console.log(data);
            });
        }
        catch (ex) {
            console.log(ex);
        }
    }
});

console.log('nlib install process...finished.');