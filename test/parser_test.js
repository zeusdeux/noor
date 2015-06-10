var expect = require('chai').expect;
var tokenize = require('../lib/lexer').tokenize;
var parser = require('../lib/parser');


describe('parser', function() {
  var parse = parser.parse;

  describe('#parse()', function() {
    it('should parse a variable assigned to a string', function() {
      var input = 'ب = "مرحبا الي الريكرس سنتر"';
      var expectedString = '{"type":"Program","val":[{"type":"AssignmentExpression","val":{"type":"AtomAssignment","val":[{"type":"IDENTIFIER","val":"ب"},{"type":"STRING","val":"\\"مرحبا الي الريكرس سنتر\\""}]}}]}';
      var result = parse(tokenize(input));
      expect(JSON.stringify(result)).to.equal(expectedString);
    });
  });

  describe('#processTernaryOperator()', function() {
    it('It should parse a list of tokens into a proper ternary operator', function() {
      var input = 'ب = "مرحبا الي الريكرس سنتر"';
      var expectedString = '{"type":"Program","val":[{"type":"AssignmentExpression","val":{"type":"AtomAssignment","val":[{"type":"IDENTIFIER","val":"ب"},{"type":"STRING","val":"\\"مرحبا الي الريكرس سنتر\\""}]}}]}';
      var result = parse(tokenize(input));
      expect(JSON.stringify(result)).to.equal(expectedString);
    });
  });
});
