var excelFuncs = require('../lib/excel_kata')

var assert = require('assert');
describe('Excel Map', function () {
  describe('toColNotation', function () {
    describe('basic', function () {
      it('should return the letters of the alphabet', function () {
        for (var i=1; i<=26; i++) {
          assert.equal(String.fromCharCode(64+i), excelFuncs.toColNotation(i));
        }
      });
    });


    describe('complex', function () {
      it('should return AA', function () {
        assert.equal(excelFuncs.toColNotation(27), 'AA');
      });

      it('should return AB', function () {
        assert.equal(excelFuncs.toColNotation(28), 'AB');
      });

      it('should return AC', function () {
        assert.equal(excelFuncs.toColNotation(29), 'AC');
      });

      it('should return AZ', function () {
        assert.equal(excelFuncs.toColNotation(52), 'AZ');
      });

      it('should return BA', function () {
        assert.equal(excelFuncs.toColNotation(53), 'BA');
      });

      it('should return AAA', function () {
        assert.equal(excelFuncs.toColNotation(703), 'AAA');
      });

      it('should return AAB', function () {
        assert.equal(excelFuncs.toColNotation(704), 'AAB');
      });
    });
  });

  describe('fromColNotation', function () {
    describe('basic', function () {
      it('should return 1', function () {
        assert.equal(excelFuncs.fromColNotation('A'), 1);
      });

      it('should return 26', function () {
        assert.equal(excelFuncs.fromColNotation('Z'), 26);
      });
    })

    describe('2 digits', function () {
      it('should return 27', function () {
        assert.equal(excelFuncs.fromColNotation('AA'), 27);
      });

      it('should return 28', function () {
        assert.equal(excelFuncs.fromColNotation('AB'), 28);
      });
    });
  
    describe('3 digits', function () {
      it('should return 703', function () {
        assert.equal(excelFuncs.fromColNotation('AAA'), 703);
      });

      it('should return 704', function () {
        assert.equal(excelFuncs.fromColNotation('AAB'), 704);
      });
    });
  });
});
