"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MorraLogic = function MorraLogic() {
  var _this = this;

  var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    paper: {
      lose: 'scissors',
      win: 'rock'
    },
    rock: {
      lose: 'paper',
      win: 'scissors'
    },
    scissors: {
      lose: 'rock',
      win: 'paper'
    }
  };
  var points = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    win: 10,
    lose: -10
  };
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    win: "You win!",
    lose: "You lose!",
    tie: "Tie"
  };

  _classCallCheck(this, MorraLogic);

  _defineProperty(this, "game", function (userChoice) {
    var cpuChoice = Object.keys(_this.choices)[Math.floor(Math.random() * 3)];
    if (_this.choices[userChoice].win === cpuChoice) return {
      message: _this.message.win,
      user: userChoice,
      cpu: cpuChoice,
      points: _this.win
    };
    if (_this.choices[userChoice].lose === cpuChoice) return {
      message: _this.message.lose,
      user: userChoice,
      cpu: cpuChoice,
      points: _this.lose
    };
    return {
      message: _this.message.tie,
      user: userChoice,
      cpu: cpuChoice,
      points: 0
    };
  });

  this.choices = choices;
  this.win = points.win;
  this.lose = points.lose;
  this.message = message;
}; // covid       novax   vaccino
// novax       vaccino covid
// vaccino     covid   novax
// carta       sasso   forbice
// forbice     carta   sasso
// sasso       forbice carta


exports.default = MorraLogic;