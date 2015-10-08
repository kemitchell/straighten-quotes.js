var assert = require('assert')
var straighten = require('.')
var tests = require('straight-to-curly-quotes')

tests.forEach(function(test) {
  assert.equal(straighten(test.curly), test.straight) })

process.stdout.write('Passed ' + tests.length + ' tests.\n')
process.exit(0)
