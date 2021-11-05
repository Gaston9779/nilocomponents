"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NiloClassification;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _LocalStorage = _interopRequireDefault(require("./LocalStorage"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NiloClassification() {
  var localStorage = new _LocalStorage.default();
  var classificationList = localStorage.getData("users");

  var orederedClassification = _lodash.default.orderBy(classificationList, ['points', 'name'], ['desc', 'desc']);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, orederedClassification.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, user.user, " ", user.points);
  })));
}