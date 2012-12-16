var _ = require("underscore");

var HiveShareObject = function (id) {

  this.id = id;
  this.types = {};

};

HiveShareObject.prototype.addType = function (type) {

  this.types[type.id] = type;

};

HiveShareObject.prototype.getTypes = function () {

  return _.values(this.types);

};

module.exports = HiveShareObject;
