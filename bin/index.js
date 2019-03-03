#!/usr/bin/env node

const program = require('commander');
const readline = require('readline');
const colors = require('colors');
const path = require('path');
const fs = require('fs-extra');
const minimist = require('minimist');
const pkg = require('../package.json');
const orders = require('../lib/core/order')



var argv = process.argv.slice(2),
    cmd = minimist(argv)._[0];

/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@aliyun.com
 * @Description:版本控制和通用命令参数
 * @params <String> paramName 
 * @paramsDescription  paramName :
 */
program
    .version(`${pkg.version}`)
    .usage('<command> [options]')
    .option('-f,--force', 'throw all warning to action any orders')

/**
 * @Author: zhangjinglin
 * @Email: zhangjinglin@aliyun.com
 * @Description:命令解析
 * @params <String> paramName 
 * @paramsDescription  paramName :
 */
for (let element in orders) {
    let _ = orders[element];
    program
        .command(_.c)
        .description(_.d)
        .option(_.o[0], _.o[1])
        .action((env, options) => {
            let _config = require(`../config/${_.a}.config.js`)
            let _cli = require(`../lib/cli/${_.a}.cli.js`)(_config);
            // console.log(_cli);
            // _cli.init(_config);
            // console.log(env);
            // console.log(options.options[0].short)
            // console.log(options.options[0].long)
            // console.log(options.options[0].description)
        })
}





const logo = `
______   ______   ______  _    __ 
/ |      / |  | \ | |     | |  / / 
'------. | |  | | | |     | |-< <  
 ____|_/ \_|__|_/ |_|____ |_|  \_\ 
 
 ----------${pkg.version}
`;


program.on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('  $ sock --help');
    console.log('  $ sock -h');
});


program.parse(process.argv);
if (cmd) {

} else {
    console.log(colors.green(logo));
    console.log('')
    console.log('sock -h or sock --help')
    console.log('')
}