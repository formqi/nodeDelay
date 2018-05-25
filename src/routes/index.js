const IndexController = require('../controllers/business/index')

module.exports = (fastify) => {
  // Declare a route
  fastify.get('/', (request, reply) => {
    reply.send('404 NOT FOUND.');
  });

  // 外卖订单触发信息
  fastify.all('/business', (req, res) => IndexController.index(req, res));
};
