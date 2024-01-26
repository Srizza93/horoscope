const getSignFromMonthAndDayService = require('../services/getSignFromMonthAndDayService.js')

module.exports = {
  getSignFromMonthAndDay: async (req, res, next) => {
    return getSignFromMonthAndDayService.getSign(req, res)
  }
}
