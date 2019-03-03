var nunjucks = require("nunjucks");
var path = require('path');


module.exports = (config) => {
    let cwd = process.cwd();
    // dirname = __dirname, //cli的路径
    // filename = __filename, //cli的执行文件路径
    // execPath = process.execPath; //当前执行的命令路径

    var _env = nunjucks.configure( { 
        autoescape: true
    });
    _env.addFilter('shorten',function(str,count){
        return str.slice(0,count || 5)
    })

    _env.render(cwd + '/set.html', { username: 'James' }, (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);

        }
    });




}