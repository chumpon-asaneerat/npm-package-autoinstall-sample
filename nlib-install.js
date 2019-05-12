console.log('nlib install process...start.');

let useNPMI = false;

if (useNPMI) {
    // Note: to use npmi required to uninstall npm package..
    
    // use npmi
    console.log('use npmi.............');

    const npmi = require('npmi');
    const path = require('path');

    let opts = {
        // your module name
        name: 'express',
        // expected version [default: 'latest']
        version: 'latest',
        // installation path [default: '.']
        path: '.',
        // force install if set to true (even if already installed, it will do a reinstall) [default: false]
        forceInstall: false /*,
        // npm.load(options, callback): this is the "options" given to npm.load()
        npmLoad: {
            // [default: {loglevel: 'silent'}]
            loglevel: 'silent'
        }
        */
    }
    let showErr = (err) => {
        if (err.code === npmi.LOAD_ERR) console.log('npm load error');
        else if (err.code === npmi.INSTALL_ERR) console.log('npm install error');
        return console.log(err.message);
    }

    npmi(opts, function (err, result) {
        if (!err) {
            // installed
            console.log(opts.name + '@' + opts.version + ' installed successfully in ' + path.resolve(opts.path));
        }
        else showErr(err);
    });
}
else {
    // use npm
    console.log('use npm.............');

    const npm = require('npm');
    let opts = {
        loaded: false
    }

    npm.on("log", function (message) {
        // log the progress of the installation
        console.log(message);
    });

    npm.load(opts, function (err) {
        if (!err) {
            let pkgList = ["express"];
            try {
                npm.commands.install(pkgList, function (er, data) {
                    console.log(er);
                    console.log(data);
                })
            }
            catch (ex) {
                console.log(ex);
            }
        }
    });
}

console.log('nlib install process...finished.');