'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var init = function () {
     var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var data;
          return _regenerator2.default.wrap(function _callee$(_context) {
               while (1) {
                    switch (_context.prev = _context.next) {
                         case 0:
                              _context.next = 2;
                              return (0, _util.promisify)(_fs.readFile)('./package.json');

                         case 2:
                              data = _context.sent;

                              data = JSON.parse(data);
                              console.log(data.scripts);

                         case 5:
                         case 'end':
                              return _context.stop();
                    }
               }
          }, _callee, this);
     }));

     return function init() {
          return _ref.apply(this, arguments);
     };
}();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _path = require('path');

var _querystring = require('querystring');

var qs = _interopRequireWildcard(_querystring);

var _a = require('./a');

var _a2 = _interopRequireDefault(_a);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("hello");

console.log(_a2.default);

init();
//# sourceMappingURL=index.js.map