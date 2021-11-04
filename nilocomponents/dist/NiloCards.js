"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H = _reactNative.Dimensions.get('window').height;

var W = _reactNative.Dimensions.get('window').width;

var NiloCards = function NiloCards(props) {
  var handleClick = function handleClick(e) {
    props.callback(e);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    style: styles.cardNilo,
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: props.styleImage,
    source: props.image
  }));
};

var styles = _reactNative.StyleSheet.create({
  cardNilo: {
    width: W / 10,
    height: H / 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: H / 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

var _default = NiloCards;
exports.default = _default;