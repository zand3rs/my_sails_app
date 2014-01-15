/*
   A simple test to demonstrate request checks
   with mocha and supertest
*/

var supertest = require("supertest")

describe('HTTP Sails Test:', function () {
  describe('HTTP SuperTests:', function () {

    it ('should request "/" on server', function (done) {
      supertest(sails.express.app)
        .get('/')
        .expect(200, done);
    }),

    it ('should request "/foo" on server', function (done) {
      supertest(sails.express.app)
        .get('/foo')
        .expect(200, done)
    })

  })
})
