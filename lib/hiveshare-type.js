var HiveShareType = function (id) {

  this.id = id;
  this.tags = {};

};

HiveShareType.prototype.addTag = function (tag) {

  this.tags[tag.id] = tag;

  return this;

};

module.exports = HiveShareType;
