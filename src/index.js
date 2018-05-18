// 启动文件
const fastify = require('fastify')()

// fastify.register(require('./routers'))
// 路由
fastify.register(require('./routers/waimai/orderMonitor'), {prefix: '/waimai/ordermonitor'})

// 服务启动 端口8000!
fastify.listen(8000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})