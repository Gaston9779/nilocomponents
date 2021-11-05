"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LocalStorage = function LocalStorage() {
  var _this = this;

  _classCallCheck(this, LocalStorage);

  _defineProperty(this, "getData", function (key) {
    return JSON.parse(localStorage.getItem(key)) || false;
  });

  _defineProperty(this, "addData", function (key, data) {
    try {
      var savedData = _this.getData(key) || [];
      savedData.push(data);
      localStorage.setItem(key, JSON.stringify(savedData));
      console.log("local storage updated");
    } catch (error) {
      console.log(error);
    }
  });
};

exports.default = LocalStorage;