const { getSign } = require('horoscope')

module.exports = {
  getSign: async (req, res) => {
    try {
      const sign = getSign({ month: Number(req.params.month), day: Number(req.params.day) })

      return res.json({ sign })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
