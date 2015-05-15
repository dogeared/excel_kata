var excelFuncs = require('../../../models/excel_kata');

function FromColNotationController() {
}

function get(req, res, next) {
  res.status(200).json({ result: excelFuncs.fromColNotation(req.params.str) });
}

FromColNotationController.prototype = {
  get: get
};

var fromColNotationController = new FromColNotationController();

module.exports = fromColNotationController;
