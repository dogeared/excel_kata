
describe('FromColNotationController Tests', function() {

  var fromColNotationController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = { params: { str: 'AA' } };
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    fromColNotationController = require('../../../../../app/controllers/v1/excel_kata/from_col_notation-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(fromColNotationController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      fromColNotationController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        fromColNotationController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
