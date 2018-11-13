#!/usr/bin/env node

const program = require('commander');
const readline = require('readline');
const colors = require('colors');
const path = require('path');
const fs = require('fs-extra');





program
    .version('0.1.0')
    .usage('<command> [options]')
    .option('-d,--debug', 'build with uncompress')
    .option('-f,--force', 'throw all warning to action any orders')


program
    .command('install [name]')
    .description(`install your project by name(default 'myFirstSockProject')`)
    .option('-a,--auto', 'Which install help you ')
    .action((env, options) => {
        console.log(env)
        console.log(options)
    })


program.on('--help', function() {
    console.log('')
    console.log('Examples:');
    console.log('  $ sock --help');
    console.log('  $ sock -h');
});

var logo = '_oo0oo_';
program.parse(process.argv);


// if (program.init) {
//     //获取当前默认路径
//     let dirPath = path.resolve(program.init);
//     //获取项目名称
//     let name = path.basename(dirPath);
//     //根据问题进行配置
//     const rl = readline.createInterface(process.stdin, process.stdout);







//     console.log(`项目路径为：` + colors.green(dirPath))

//     //根据项目名称构建文件夹
//     fs.ensureDirSync(name);

//     console.log(__dirname)



// }















// program
//     .version(colors.green('0.1.0'))
//     .command('getstream [url]', 'get stream URL')
//     .parse(process.argv);

// if (!process.argv.slice(2).length) {
//     program.outputHelp(make_red);
// }

// function make_red(txt) {
//     return colors.red(txt); //display the help text in red on the console
// }



















// program
//     .version('0.1.0')
//     .option('-f, --foo', 'enable some foo')
//     .option('-b, --bar', 'enable some bar')
//     .option('-B, --baz', 'enable some baz');

// // must be before .parse() since
// // node's emit() is immediate

// program.on('--help', function() {
//     console.log('')
//     console.log('Examples:');
//     console.log('  $ custom-help --help');
//     console.log('  $ custom-help -h');
// });

// program.parse(process.argv);
















// function range(val) {
//     return val.split('..').map(Number);
// }

// function list(val) {
//     return val.split(',');
// }

// function collect(val, memo) {
//     memo.push(val);
//     return memo;
// }

// function increaseVerbosity(v, total) {
//     return total + 1;
// }

// program
//     .version('0.1.0')
//     .usage('[options] <file ...>')
//     .option('-i, --integer <n>', 'An integer argument', parseInt)
//     .option('-f, --float <n>', 'A float argument', parseFloat)
//     .option('-r, --range <a>..<b>', 'A range', range)
//     .option('-l, --list <items>', 'A list', list)
//     .option('-o, --optional [value]', 'An optional value')
//     .option('-c, --collect [value]', 'A repeatable value', collect, [])
//     .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//     .parse(process.argv);

// console.log(' int: %j', program.integer);
// console.log(' float: %j', program.float);
// console.log(' optional: %j', program.optional);
// program.range = program.range || [];
// console.log(' range: %j..%j', program.range[0], program.range[1]);
// console.log(' list: %j', program.list);
// console.log(' collect: %j', program.collect);
// console.log(' verbosity: %j', program.verbose);
// console.log(' args: %j', program.args);



























// program
//     .version('0.0.1')
//     .option('-C, --chdir <path>', 'change the working directory')
//     .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
//     .option('-T, --no-tests', 'ignore test hook')

// program
//     .command('setup')
//     .description('run remote setup commands')
//     .action(function() {
//         console.log('setup');
//     });

// program
//     .command('exec <cmd>')
//     .description('run the given remote command')
//     .action(function(cmd) {
//         console.log('exec "%s"', cmd);
//     });

// program
//     .command('teardown <dir> [otherDirs...]')
//     .description('run teardown commands')
//     .action(function(dir, otherDirs) {
//         console.log('dir "%s"', dir);
//         if (otherDirs) {
//             otherDirs.forEach(function(oDir) {
//                 console.log('dir "%s"', oDir);
//             });
//         }
//     });

// program
//     .command('*')
//     .description('deploy the given env')
//     .action(function(env) {
//         console.log('deploying "%s"', env);
//     });

// program.parse(process.argv);



















// program
//     .version('0.0.1', '-v,--version'); //声明hi的版本号



// program
//     .command('list') //声明hi下有一个命令叫list
//     .description('list files in current working directory') //给出list这个命令的描述
//     .option('-a, --all', 'Whether to display hidden files') //设置list这个命令的参数
//     .action(function(options) { //list命令的实现体
//         var fs = require('fs');
//         //获取当前运行目录下的文件信息
//         fs.readdir(process.cwd(), function(err, files) {
//             var list = files;
//             if (!options.all) { //检查用户是否给了--all或者-a的参数，如果没有，则过滤掉那些以.开头的文件
//                 list = files.filter(function(file) {
//                     return file.indexOf('.') !== 0;
//                 });
//             }
//             console.log(list.join(' ')); //控制台将所有文件名打印出来
//         });
//     });

// program.parse(process.argv); //开始解析用户输入的命令





//根据问题进行配置
// const rl = readline.createInterface(process.stdin, process.stdout);
// rl.question('what is your name? ', function(answer) {
//     console.log(`name is ${answer}`);
//     rl.close();
// })