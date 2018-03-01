const Koa=require('koa')
const app= new Koa()

//引入日志中间件
const logger = require('koa-logger')


//define middleware，await next()是中间件流通的桥梁,碰到await直接跳到下一个中间件，没有await将不会继续执行
const mid1= async (ctx,next)=>{
	ctx.type='text-html;charset=utf-8'
	await next()   //把控制权交出去
	ctx.body=ctx.body+' there '
}

const mid2= async (ctx,next)=>{
	ctx.body='Hi'
	await next()
}

const mid3= async (ctx,next)=>{
	ctx.body=ctx.body+' Scott '
	await next()
}

//use middleware，先执行await前的语句，等所有await前的语句执行完了，再执行await之后的语句
app.use(logger())
app.use(mid1)
app.use(mid2)
app.use(mid3)

//listen port
app.listen('8888')