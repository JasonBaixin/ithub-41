const express =require('express')

//加载路由
const router =require('./router')

const app =express()

//开放静态资源
app.use('/public',express.static('./public/'))
app.use('/node_modules',express.static('./node_modules/'))

//配置使用模板引擎
app.engine('html',require('express-art-template'))

//使用路由模块
app.use(router)

app.listen(3000,()=> console.log('running...'))