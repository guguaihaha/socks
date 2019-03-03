const orders = {
    command: {
        c: `install [name]`,
        a: `install`,
        d: `install your project by name(default 'myFirstSockProject')`,
        o: ['-a,--auto', `Which orders help you install 'node_modules'`]
    },
    build: {
        c: `build`,
        a: `build`,
        d: `build project to view`,
        o: ['-dev,-prod', 'DEV unpress enviroment,but PROD is press all file']
    },
    publish: {
        c: `publish`,
        a: `publish`,
        d: `publish your project to server by ftp`,
        o: ['-z,--zip', 'upload your project to server by war zip']
    },
    clean: {
        c: `clean`,
        a: `clean`,
        d: `clean the cache DEV enviroment`,
        o: ['-a,--all', 'clean all package']
    }
}


module.exports = orders;