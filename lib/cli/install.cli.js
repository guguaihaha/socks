const clone = require('git-clone');
class install {
    constructor(config) {
        this.config = config;
        this.it = this.init;

    }
    init() {
        console.log(process.execPath)
        console.log(__dirname)
        console.log(process.cwd())
    }
    setConfig(config) {
        this.config = config;
    }

    getConfig() {
        return this.config;
    }




}

module.exports = install