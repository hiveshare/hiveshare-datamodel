var Query = function (queryString) {

  this.q = {};

  if (queryString) {
    this.parseQueryString(queryString);
  }

};

Query.prototype.parseQueryString = function (queryString) {

  var q = JSON.parse(queryString);

  if (q.object_id) {
    this.q.object_id = q.object_id;
  }
};

Query.prototype.findObjectById = function (id) {

  this.q.object_id = id;

  return this;
};

Query.prototype.findTypeById = function (id) {

  this.q.type_id = id;

  return this;
};

module.exports = Query;
