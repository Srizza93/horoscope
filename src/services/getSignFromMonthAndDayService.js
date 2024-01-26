const { getSign } = require('horoscope')
const CustomError = require('../errors/customError')
const { INCORRECT_MONTH, INCORRECT_DAY } = require('../errors/errorCodes')

module.exports = {
  getSign: async (req, res) => {
    try {
      const monthRegex = /^(0[1-9]|1[0-2])$/
      const dayRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-2])$/

      if (!monthRegex.test(req.params.month)) {
        throw new CustomError(INCORRECT_MONTH)
      }

      if (!dayRegex.test(req.params.day)) {
        throw new CustomError(INCORRECT_DAY)
      }

      const sign = getSign({ month: Number(req.params.month), day: Number(req.params.day) })

      return res.json({ sign })
    } catch (error) {
      console.log('Error: ' + error.message)
      return res.status(error.status_code).json({ error: error.message })
    }
  }
}
