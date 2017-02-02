var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

app.get('/', function(req, res) {
  res.render('demo', {
    name: 'zhangyunlu'
  });
});

app.listen(3000);