common = require("../common");
assert = common.assert

var path = require('path'),
    fs = require('fs');
    
var file = path.join(common.fixturesDir, "write.txt");

(function() {
  var stream = fs.createWriteStream(file),
      _fs_close = fs.close;
      
  fs.close = function(fd) {
    assert.ok(fd, "fs.close must not be called without an undefined fd.")
    fs.close = _fs_close;
  }
  stream.destroy();
})();
