var buster = require("buster");

var HiveShareObject = require("../lib/hiveshare-object");


buster.testCase("HiveShare Object", {

  "Types": {

    "can be added": function () {

      var o = new HiveShareObject();
      o.addType({id: 1});
      var types = o.getTypes();
      assert.equals(types.length, 1);
      assert.equals(types[0].id, 1);

    }

  }

});
