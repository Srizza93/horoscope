const express = require('express')
const { getSignFromMonthAndDay } = require('../controller/signController.js')

const router = express.Router()

router.get('/date/:month/:day', async (req, res) => {
  try {
    const result = await getSignFromMonthAndDay(req, res)
    return result
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
