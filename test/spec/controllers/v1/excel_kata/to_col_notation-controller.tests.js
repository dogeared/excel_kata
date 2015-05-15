
describe('ToColNotationController Tests', function() {

  var toColNotationController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = { params: { num: 27 } };
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    toColNotationController = require('../../../../../app/controllers/v1/excel_kata/to_col_notation-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(toColNotationController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      toColNotationController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        toColNotationController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
