
module.exports = (fastify, opts, next) => {
    // let i = 0;
    fastify.get('/', async (req, rep) => {
        // 获取get请求orderId参数
        let orderId = req.query.orderId;

        // 等待进程
        const promise = new Promise(function(){
            setTimeout(function(resolve, reject){
            postData(orderId);
            //   console.log(i++);
            }, 10000);
        });
        // console.log(test);

        // http返回
        rep.code(200).send({ text: 'hello fastify' })
    })
    next()
  }
  
  // 数据请求
  function postData(orderId) {
    const request = require('../../service/requestData')
    let requestdata = new request();
    requestdata.setData('apib7.wboll.com/qibing', {orderid: orderId});
  
    let result = requestdata.postData();
  }