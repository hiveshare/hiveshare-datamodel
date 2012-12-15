var _ = require("underscore");

var HiveShareObject = function () {

  this.types = {};

};

HiveShareObject.prototype.addType = function (type) {

  this.types[type.id] = type;

};

HiveShareObject.prototype.getTypes = function () {

  return _.values(this.types);

};

module.exports = HiveShareObject;
