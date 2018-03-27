const express =require('express')

const bodyParser=require('body-parser')
//加载路由
const router =require('./router')

const app =express()
//配置模板引擎
//开放静态资源
//渲染页面
//下载第三方包   bootstrop  jquery
app.use('/public',express.static('./public/'))
app.use('/node_modules',express.static('./node_modules/'))

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


//配置使用模板引擎
app.engine('html',require('express-art-template'))

//使用路由模块
app.use(router)

app.listen(3000,()=> console.log('running...'))