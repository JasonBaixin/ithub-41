const express =require('express')

//加载路由
const router =require('./router')

const app =express()

//使用路由模块
app.use(router)

app.listen(3000,()=> console.log('running...'))