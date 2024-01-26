const request = require('supertest')
const app = require('../index.js')

describe('Index app', () => {
  it('should return a sign with a birthdate in request', async () => {
    return request(app)
      .get('/api/birthday/date/12/11')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toStrictEqual({ sign: 'Sagittarius' })
      })
  })

  it('should return an error as invalid month', async () => {
    return request(app)
      .get('/api/birthday/date/abc/11')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(res.statusCode).toBe(500)
        expect(res.body).toStrictEqual({ error: 'Internal Server Error' })
      })
  })

  it('should return an error as invalid day', async () => {
    return request(app)
      .get('/api/birthday/date/11/abc')
      .expect('Content-Type', /json/)
      .expect(500)
      .then((res) => {
        expect(res.statusCode).toBe(500)
        expect(res.body).toStrictEqual({ error: 'Internal Server Error' })
      })
  })
})
