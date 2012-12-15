var vows = require("vows");
var assert = require("assert");

var HiveShareObject = require("../lib/hiveshare-object");

var suite = vows.describe('hiveshare-object');

suite.addBatch({

  "Types": {

    "can be added": function () {

      var o = new HiveShareObject();
      o.addType({id: 1});
      var types = o.getTypes();
      assert.equal(types.length, 1);
      assert.equal(types[0].id, 1);

    }

  }

});

suite.export(module);
