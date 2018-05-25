// const debug = require('debug')('apib9b:controllers:waimai-order');
const request = require('request-promise');

// 引入父控制器
const RootController = require("./root");

/**
 * 订单处理 控制器
 */
class IndexController extends RootController {
  /**
   * 延时处理
   */
  async index (req, res)  {
    // 获取http请求param参数
    let param = req.query.param;


    // // 等待进程
    // const promise = new Promise(function(){
    //     setTimeout(function(resolve, reject){
    //     postData(orderId);
    //     //   console.log(i++);
    //     }, 10000);
    // });
    // return { head: { code: 200, msg: '' }, body: null };
    setTimeout(async () => {
      let result = await request.post('https://www.baidu.com').form({ param: param });
      console.log("延时处理 `延时两分半http请求` 处理结果=", result);
    }, 150e3);
    return this.json(200);
  }
}

module.exports = new IndexController;
