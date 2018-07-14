const { resolve } = require('path')
var express = require('express');
var app = express()
app.use(express.static(__dirname + '/dist'));
// var proxy = require('http-proxy-middleware');
// var exampleProxy = proxy(options);  //开启代理功能，并加载配置
// app.use('/ns-index', exampleProxy);//对地址为’/‘的请求全部转发
app.listen(3099)
