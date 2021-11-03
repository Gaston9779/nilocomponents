"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _NiloButton = _interopRequireDefault(require("./NiloButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H = _reactNative.Dimensions.get('window').height;

var W = _reactNative.Dimensions.get('window').width;

var ScoreBoard = function ScoreBoard() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.countScore
  }, "0"), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_NiloButton.default, {
    style: styles.buttonNav,
    buttonText: 'ScoreBoard'
  }), /*#__PURE__*/_react.default.createElement(_NiloButton.default, {
    style: styles.buttonNav,
    buttonText: 'Try Again'
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.countScore
  }, "0"));
};

var styles = _reactNative.StyleSheet.create({
  container: {
    width: W,
    height: H / 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonNav: {
    width: _reactNative.Dimensions.get('window').width / 5,
    height: _reactNative.Dimensions.get('window').height / 20,
    backgroundColor: 'tomato',
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  countScore: {
    borderWidth: 1,
    fontSize: 50,
    fontWeight: 800
  }
});

var _default = ScoreBoard;
exports.default = _default;