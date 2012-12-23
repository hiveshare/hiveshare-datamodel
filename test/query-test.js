var buster = require("buster");

var Query = require("../lib/query");


buster.testCase("HiveShare Query", {

  "Constructor": {

    "parses JSON string": function () {

      var q = new Query("{\"object_id\": 1}").q;
      assert.equals(q.object_id, 1);

    }

  }

});
