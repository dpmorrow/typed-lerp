import test = require('blue-tape');
import lerp = require('lerp');

test('module can load properly', null, function(t) {
  t.equal(lerp(0,1,0), 0);
  t.end();
});
