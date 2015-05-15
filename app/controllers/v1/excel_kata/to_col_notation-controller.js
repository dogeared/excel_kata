var excelFuncs = require('../../../models/excel_kata');

function ToColNotationController() {
}

function get(req, res, next) {
  res.status(200).json({ result: excelFuncs.toColNotation(req.params.num) });
}

ToColNotationController.prototype = {
  get: get
};

var toColNotationController = new ToColNotationController();

module.exports = toColNotationController;
