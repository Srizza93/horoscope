const { CustomError } = require('./customError.js')

module.exports = {
  errorHandler: (error, req, res, next) => {
    if (error.name === 'ValidationError') {
      return res.status(400).send({
        type: 'ValidationError',
        error_message: 'Validation Error',
        details: error.details
      })
    }

    if (error instanceof CustomError) {
      return res.status(error.status_code).json({
        error_code: error.status_code,
        error_message: error.message
      })
    }

    return res.status(400).send({
      error_code: 400,
      error_message: error.message
    })
  }
}
