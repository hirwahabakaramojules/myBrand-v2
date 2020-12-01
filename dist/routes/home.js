"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.get("/", function (req, res) {
  res.status(200).send({
    msg: "welcome to hirwa personal blog"
  });
});
var _default = router;
exports["default"] = _default;