var assert=require("assert")
var app = require('../app')

describe('Calculator',function(){
  describe('#add', function (){
    it('adds 2 numbers together', function(){
      assert.equal(app.add(2,3), 5)
    })
    it('adds negative numbers together', function(){
      assert.equal(app.add(-2,-3), -5)
    })
    it('work with a single value', function(){
      assert.equal(app.add(0), 0)
    })
    it('adds n numbers together', function(){
      assert.equal(app.add(-1,-0, 1), 0)
    })
  })
})
