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

var NiloInput = function NiloInput(props) {
  var handleChange = function handleChange(e) {
    props.callback(e);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: props.style,
    value: props.value,
    placeholder: props.placeholder,
    onChangeText: handleChange
  });
};

var styles = _reactNative.StyleSheet.create({
  inputText: {
    backgroundColor: 'white',
    height: H / 20,
    width: W / 10,
    textAlign: 'center',
    shadowColor: "#000",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

var _default = NiloInput;
exports.default = _default;