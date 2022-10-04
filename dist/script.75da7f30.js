// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistance = exports.getDistCirRec = void 0;

var getDistCirRec = function getDistCirRec(circle, rect) {
  var testX = circle.x;
  var testY = circle.y;

  if (circle.x < rect.x) {
    testX = rect.x;
  } else if (circle.x > rect.x + rect.width) {
    testX = rect.x + rect.width;
  }

  if (circle.y < rect.y) {
    testY = rect.y;
  } else if (circle.y > rect.y + rect.height) {
    testY = rect.y + rect.height;
  }

  var xDistance = circle.x - testX;
  var yDistance = circle.y - testY;
  var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  if (distance < circle.radius) {
    return true;
  } else {
    return false;
  }
};

exports.getDistCirRec = getDistCirRec;

var getDistance = function getDistance(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

exports.getDistance = getDistance;
},{}],"script.js":[function(require,module,exports) {
'use strict';

var _utils = require("./utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var canvas = document.getElementById('canvas');
var button = document.getElementById('button--start');
var playerOneTouch = document.querySelector('.player--one--sp__container');
var playerTwoTouch = document.querySelector('.player--two--sp__container');
var playerOneEl = document.querySelector('.player-one');
var playerTwoEl = document.querySelector('.player-two');
var containerUI = document.querySelector('.container--UI'); // setup

canvas.width = innerWidth;
canvas.height = innerHeight;
var isSmartPhone = false;
var c = canvas.getContext('2d'); //////////////////////////////////
//////////////////////////////////

var Ball = /*#__PURE__*/function () {
  function Ball(x, y, radius, color) {
    _classCallCheck(this, Ball);

    var randomX = canvas.width / 2 + radius + 5;
    var randomY = canvas.height / 2 + radius - 5; // const randomDx = (Math.random() - 0.5) * 10;
    // const randomDy = Math.random() * 10;

    var randValX = Math.random() - 0.5;
    var randValY = Math.random() - 0.5;
    this.x = randomX;
    this.y = randomY;

    if (isSmartPhone) {
      this.dx = randValX < 0 ? -1.5 : 1.5; // X's velocity

      this.dy = randValY < 0 ? -2 : 2; // Y's velocity
    } else {
      this.dx = randValX < 0 ? -3 : 3; // X's velocity

      this.dy = randValY < 0 ? -3 : 3; // Y's velocity
    }

    this.radius = radius;
    this.color = color;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      c.fillStyle = this.color;
      c.fill(); // c.stroke();

      c.closePath();
    }
  }, {
    key: "update",
    value: function update(machineObj) {
      var toggleEngine = function toggleEngine() {
        runEngine = false;
        isWrite = true;
      };

      if (isSmartPhone) {
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
          this.dy = -this.dy;

          if (this.y + this.radius >= canvas.height) {
            machineObj._score[0]++;

            machineObj._renderSmartPhoneUI();

            toggleEngine();
          }

          if (this.y - this.radius <= 0) {
            machineObj._score[1]++;

            machineObj._renderSmartPhoneUI();

            toggleEngine();
          }
        } else if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
          this.dx = -this.dx;
        }
      } else {
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
          this.dx = -this.dx;

          if (this.x + this.radius >= canvas.width) {
            machineObj._score[0]++;

            machineObj._renderScore();

            toggleEngine();
          }

          if (this.x - this.radius <= 0) {
            machineObj._score[1]++;

            machineObj._renderScore();

            toggleEngine();
          }
        } else if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
          this.dy = -this.dy;
        }
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }]);

  return Ball;
}();

var Player = /*#__PURE__*/function () {
  function Player(width, height, whichPlayer, color) {
    _classCallCheck(this, Player);

    this.width = width;
    this.height = height;
    this.color = color;
    this.whichPlayer = whichPlayer;

    if (isSmartPhone) {
      if (whichPlayer === 1) {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 50;
      } else if (whichPlayer === 2) {
        this.x = canvas.width / 2 - this.width / 2;
        this.y = 25;
      } // velocity


      this.dx = 2;
    } else {
      if (whichPlayer === 1) {
        this.x = canvas.width - 50;
        this.y = canvas.height / 2 - this.height / 2;
      } else if (whichPlayer === 2) {
        this.x = 50;
        this.y = canvas.height / 2 - this.height / 2;
      } // velocity


      this.dy = 5;
    }
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.fillStyle = this.color;
      c.fillRect(this.x, this.y, this.width, this.height);
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      if (isSmartPhone) {
        // player 1
        if (keyPad.i && this.x > 0 && this.whichPlayer === 1) {
          this.x -= this.dx; // ///////
        }

        if (keyPad.k && this.x + this.width <= canvas.width && this.whichPlayer === 1) {
          this.x += this.dx;
        }

        if (keyPad.w && this.x >= 0 && this.whichPlayer === 2) {
          this.x -= this.dx;
        } // player 2


        if (keyPad.s && this.x + this.width <= canvas.width && this.whichPlayer === 2) {
          this.x += this.dx;
        } ////////////////////////////////////////////////////////

      } else {
        // player 1
        if (keyPad.i && this.y >= 0 && this.whichPlayer === 1) {
          this.y -= this.dy;
        }

        if (keyPad.k && this.y + this.height <= canvas.height && this.whichPlayer === 1) {
          this.y += this.dy;
        }

        if (keyPad.w && this.y >= 0 && this.whichPlayer === 2) {
          this.y -= this.dy;
        } // player 2


        if (keyPad.s && this.y + this.height <= canvas.height && this.whichPlayer === 2) {
          this.y += this.dy;
        }
      }

      this.draw();
    }
  }]);

  return Player;
}();

var _scoreDisplay = /*#__PURE__*/new WeakMap();

var _nameDisplay = /*#__PURE__*/new WeakMap();

var _touchScreenUI = /*#__PURE__*/new WeakMap();

var _spUI = /*#__PURE__*/new WeakMap();

var _playerOne = /*#__PURE__*/new WeakMap();

var _playerTwo = /*#__PURE__*/new WeakMap();

var _playerOneDefColor = /*#__PURE__*/new WeakMap();

var _playerTwoDefColor = /*#__PURE__*/new WeakMap();

var _playerOneDefName = /*#__PURE__*/new WeakMap();

var _playerTwoDefName = /*#__PURE__*/new WeakMap();

var Machine = /*#__PURE__*/function () {
  function Machine() {
    _classCallCheck(this, Machine);

    _classPrivateFieldInitSpec(this, _scoreDisplay, {
      writable: true,
      value: document.querySelector('.player--container')
    });

    _classPrivateFieldInitSpec(this, _nameDisplay, {
      writable: true,
      value: document.querySelector('.player--container__name')
    });

    _classPrivateFieldInitSpec(this, _touchScreenUI, {
      writable: true,
      value: document.querySelector('.button--rendering')
    });

    _classPrivateFieldInitSpec(this, _spUI, {
      writable: true,
      value: document.querySelector('.smartphone--info__screen')
    });

    _defineProperty(this, "_score", [0, 0]);

    _classPrivateFieldInitSpec(this, _playerOne, {
      writable: true,
      value: playerOneEl
    });

    _classPrivateFieldInitSpec(this, _playerTwo, {
      writable: true,
      value: playerTwoEl
    });

    _classPrivateFieldInitSpec(this, _playerOneDefColor, {
      writable: true,
      value: 'blue'
    });

    _classPrivateFieldInitSpec(this, _playerTwoDefColor, {
      writable: true,
      value: 'red'
    });

    _classPrivateFieldInitSpec(this, _playerOneDefName, {
      writable: true,
      value: '-'
    });

    _classPrivateFieldInitSpec(this, _playerTwoDefName, {
      writable: true,
      value: '-'
    });

    button.addEventListener('click', this.getDataPlayer.bind(this));
    playerOneTouch.addEventListener('touchstart', function (e) {
      e.preventDefault();
      var p1Left = e.target.closest('.p1--left__btn');
      var p2Right = e.target.closest('.p1--right__btn');

      if (p1Left) {
        keyPad.i = true;
      }

      if (p2Right) {
        keyPad.k = true;
      }
    });
    playerOneTouch.addEventListener('touchend', function (e) {
      e.preventDefault();
      var p1Left = e.target.closest('.p1--left__btn');
      var p1Right = e.target.closest('.p1--right__btn');

      if (p1Left) {
        keyPad.i = false;
      }

      if (p1Right) {
        keyPad.k = false;
      }
    });
    playerTwoTouch.addEventListener('touchstart', function (e) {
      e.preventDefault();
      var p2Left = e.target.closest('.p2--left__btn');
      var p2Right = e.target.closest('.p2--right__btn');

      if (p2Left) {
        keyPad.w = true;
      }

      if (p2Right) {
        keyPad.s = true;
      }
    });
    playerTwoTouch.addEventListener('touchend', function (e) {
      e.preventDefault();
      var p2Left = e.target.closest('.p2--left__btn');
      var p2Right = e.target.closest('.p2--right__btn');

      if (p2Left) {
        keyPad.w = false;
      }

      if (p2Right) {
        keyPad.s = false;
      }
    });
  }

  _createClass(Machine, [{
    key: "_touchScreenButton",
    value: function _touchScreenButton() {// playerOneTouch.addEventListener('touchstart', );
    }
  }, {
    key: "getDataPlayer",
    value: function getDataPlayer(e) {
      e.preventDefault();
      var regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi; // 01

      this.playerOneName = _classPrivateFieldGet(this, _playerOne).querySelector('.form--player-1 input').value || _classPrivateFieldGet(this, _playerOneDefName);
      if (this.playerOneName.length > 6 || regexExp.test(this.playerOneName)) this.playerOneName = _classPrivateFieldGet(this, _playerOneDefName);
      this.playerOneColor = _classPrivateFieldGet(this, _playerOne).querySelector('.option-dropdown').value || _classPrivateFieldGet(this, _playerOneDefColor); // 02

      this.playerTwoName = _classPrivateFieldGet(this, _playerTwo).querySelector('.form--player-2 input').value || _classPrivateFieldGet(this, _playerTwoDefName);
      if (this.playerTwoName.length > 6 || regexExp.test(this.playerTwoName)) this.playerTwoName = _classPrivateFieldGet(this, _playerOneDefName);
      this.playerTwoColor = _classPrivateFieldGet(this, _playerTwo).querySelector('.option-dropdown').value || _classPrivateFieldGet(this, _playerTwoDefColor); // game load

      this.loadingGame();
    }
  }, {
    key: "loadingGame",
    value: function loadingGame() {
      containerUI.classList.add('active__game');

      if (canvas.width <= 640) {
        isSmartPhone = true;

        _classPrivateFieldGet(this, _touchScreenUI).classList.toggle('active__game');

        _classPrivateFieldGet(this, _spUI).classList.toggle('active__game');

        spInit();
      } else {
        this._renderName();

        init();
      }

      animate();
    }
  }, {
    key: "_renderName",
    value: function _renderName() {
      _classPrivateFieldGet(this, _nameDisplay).innerHTML = '';

      _classPrivateFieldGet(this, _nameDisplay).insertAdjacentHTML('afterbegin', this.nameUI());
    }
  }, {
    key: "_renderScore",
    value: function _renderScore() {
      _classPrivateFieldGet(this, _scoreDisplay).innerHTML = '';

      _classPrivateFieldGet(this, _scoreDisplay).insertAdjacentHTML('afterbegin', this.scoreUI());
    }
  }, {
    key: "_renderTouchScreenUI",
    value: function _renderTouchScreenUI() {
      _classPrivateFieldGet(this, _touchScreenUI).innerHTML = '';

      _classPrivateFieldGet(this, _touchScreenUI).insertAdjacentHTML('afterbegin', this.touchScreenUI());
    }
  }, {
    key: "_renderSmartPhoneUI",
    value: function _renderSmartPhoneUI() {
      _classPrivateFieldGet(this, _spUI).innerHTML = '';

      _classPrivateFieldGet(this, _spUI).insertAdjacentHTML('afterbegin', this.smartPhoneUI());
    }
  }, {
    key: "touchScreenUI",
    value: function touchScreenUI() {
      return "<div class=\"player--one--sp__container\">\n              <div class=\"left--btn\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  fill=\"none\"\n                  viewBox=\"0 0 24 24\"\n                  stroke-width=\"1.5\"\n                  stroke=\"currentColor\"\n                  class=\"p1--left__btn\"\n                  width=\"30\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                  />\n                </svg>\n              </div>\n\n              <div class=\"right--btn\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  fill=\"none\"\n                  viewBox=\"0 0 24 24\"\n                  stroke-width=\"1.5\"\n                  stroke=\"currentColor\"\n                  width=\"30\"\n                  class=\"p1--right__btn\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                  />\n                </svg>\n              </div>\n            </div>\n\n            <div class=\"player--two--sp__container\">\n              <div class=\"left--btn\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  fill=\"none\"\n                  viewBox=\"0 0 24 24\"\n                  stroke-width=\"1.5\"\n                  stroke=\"currentColor\"\n                  class=\"p2--left__btn\"\n                  width=\"30\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                  />\n                </svg>\n              </div>\n\n              <div class=\"right--btn\">\n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  fill=\"none\"\n                  viewBox=\"0 0 24 24\"\n                  stroke-width=\"1.5\"\n                  stroke=\"currentColor\"\n                  width=\"30\"\n                  class=\"p2--right__btn\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z\"\n                  />\n                </svg>\n              </div>\n            </div>";
    }
  }, {
    key: "scoreUI",
    value: function scoreUI() {
      return "\n    <div>\n      <p>Player 2</p>\n      <h6 class=\"player__two\">".concat(this._score[0], "</h6>\n    </div>\n    <div>\n      <p>Player 1</p>\n      <h6 class=\"player__one\">").concat(this._score[1], "</h6>\n    </div>\n    ");
    }
  }, {
    key: "nameUI",
    value: function nameUI() {
      return "<div class=\"player--2__name\">\n              <p>".concat(this.playerOneName, "</p>\n            </div>\n            <small>Vs</small>\n            <div class=\"player--2__name\">\n              <p>").concat(this.playerTwoName, "</p>\n            </div>");
    }
  }, {
    key: "smartPhoneUI",
    value: function smartPhoneUI() {
      return "<div class=\"player--1__screen\">\n              <h4 class=\"player--1__name\">P2</h4>\n              <small class=\"player__nickname\">".concat(this.playerTwoName, "</small>\n              <span>-").concat(this._score[1], "-</span>\n            </div>\n            <div class=\"player--2__screen\">\n              <h4 class=\"player--1__name\">P1</h4>\n              <small class=\"player__nickname\">").concat(this.playerOneName, "</small>\n              <span>-").concat(this._score[0], "-</span>\n            </div>");
    }
  }, {
    key: "machineCount",
    value: function machineCount(count) {
      if (isSmartPhone) {
        c.beginPath();
        c.font = '32px serif';
        c.strokeStyle = 'white';

        if (count === 'Ready') {
          c.strokeText(String(count), canvas.width / 2 - 35, canvas.height - 50);
        } else {
          c.strokeText(String(count), canvas.width / 2, canvas.height - 50);
        }

        c.closePath();
      } else {
        c.beginPath();
        c.font = '48px serif';
        c.strokeStyle = 'white';

        if (count === 'Ready') {
          c.strokeText(String(count), canvas.width / 2 - 40, canvas.height / 2);
        } else {
          c.strokeText(String(count), canvas.width / 2, canvas.height / 2);
        }

        c.closePath();
      }
    }
  }]);

  return Machine;
}(); // function


var mouse = {
  x: canvas.width / 2,
  y: 870
};
var keyPad = {
  w: false,
  s: false,
  i: false,
  k: false
}; // main engine

var ball = [];
var player;
var playerTwo;
var machine = new Machine();

function init() {
  ball = new Ball(100, 100, 10, 'white');
  player = new Player(15, 175, 1, machine.playerOneColor);
  playerTwo = new Player(15, 175, 2, machine.playerTwoColor);
}

function spInit() {
  ball = new Ball(100, 100, 10, 'white');
  player = new Player(80, 10, 1, machine.playerOneColor);
  playerTwo = new Player(80, 10, 2, machine.playerTwoColor);
}

var runEngine = false;
var isWrite = true;
var frame = 1;
var countDown = 0;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  if (runEngine) {
    if (isSmartPhone) {
      if ((0, _utils.getDistCirRec)(ball, player) || player.height + ball.radius < ball.radius) {
        ball.dy = -ball.dy;
      }

      if ((0, _utils.getDistCirRec)(ball, playerTwo) || player.height + ball.radius < ball.radius) {
        ball.dy = -ball.dy;
      }
    } else {
      if ((0, _utils.getDistCirRec)(ball, player)) {
        ball.dx = -ball.dx;
      }

      if ((0, _utils.getDistCirRec)(ball, playerTwo)) {
        ball.dx = -ball.dx;
      }
    }

    player.update();
    playerTwo.update();
    ball.update(machine);
  }

  if (frame % 150 === 0 && !runEngine) {
    countDown++;

    if (countDown === 4) {
      runEngine = true;
      isWrite = false;
      countDown = 0;
    }
  }

  if (isWrite) {
    if (isSmartPhone) {
      if (countDown === 0) {
        machine.machineCount('Ready');
        frame++;
      } else {
        machine.machineCount(countDown);
        frame++;
      }
    } else {
      if (countDown === 0) {
        machine.machineCount('Ready');
        frame++;
      } else {
        machine.machineCount(countDown);
        frame++;
      }
    }
  }
} // controller


window.addEventListener('keydown', function (_ref) {
  var key = _ref.key;

  switch (key) {
    case 'i':
      keyPad.i = true;
      break;

    case 'k':
      keyPad.k = true;
      break;

    case 'w':
      keyPad.w = true;
      break;

    case 's':
      keyPad.s = true;
      break;
  }
});
window.addEventListener('keyup', function (_ref2) {
  var key = _ref2.key;

  switch (key) {
    case 'i':
      keyPad.i = false;
      break;

    case 'k':
      keyPad.k = false;
      break;

    case 'w':
      keyPad.w = false;
      break;

    case 's':
      keyPad.s = false;
      break;
  }
}); // window.addEventListener('mousemove', ({ x, y }) => {
//   mouse.x = x;
//   mouse.y = y;
// });
///////////////////////////////
//////////// garbage collection
///////////////////////////////
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, canvas.width, canvas.height);
//   if (
//     getDistance(ball.x, ball.y, ball2.x, ball2.y) <=
//     ball.radius + ball2.radius
//   ) {
//     if (ball2.color !== 'blue') {
//       ball2.color = 'blue';
//     } else {
//       ball2.color = 'black';
//     }
//   }
//   ball2.draw();
//   ball.update();
// }
},{"./utils":"utils.js"}],"C:/Users/AARON FABIAN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62021" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/AARON FABIAN/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map