# sock build 是啥？

是一款专门构建电商首页的脚手架工具，区别于其他脚手架工具：webpack/gulp/rollup/grunt等，职责单一，命令简要，更主要是可以进行二次开发

## sock build快速使用
> $ npm install sock.build -g

安装完毕后，检验是否成功
> $ sock

## 常用命令
```
Usage: sock [command] <options>

command
install [name] <-a,--auto>     -  install your project by name(default 'myFirstSockProject') 
                                  if enter word -a or --auto ,project will be help you 
                                  auto run 'npm install' and other orders
build   <-dev,-prod>           -  build project to view, default run build -dev
publish <-z,--zip>             - publish your project to server by ftp, when transport on server, I suggest user run 'publish -z or publish -zip' on terminal to zip the project '.war'
clean <-a,--all>               - clean the cache DEV enviroment and others cache
```


## Blob
[Blog](http://www.zhangjinglin.cn)







