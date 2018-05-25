class RootController {
  constructor () {

  }

  /**
   * 统一输出JSON信息
   *
   * @param {Number} code
   * @param {String} msg
   * @param {Object} body
   */
  json (code, msg = '', body = null) {
    return {
      head: {
        code,
        msg
      },
      body
    }
  }
}

module.exports = RootController
