"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../css/index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StepTracker = require('./StepTracker');

var StepContent = require('./StepContent');

var _ = require('lodash');

var Container =
/*#__PURE__*/
function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    var _this;

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, props));
    _this.state = {
      contents: [],
      milestones: [],
      currentStep: -1
    };

    _this.attachOnScrollEventListener();

    _this.milestoneHandler();

    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        contents: [{
          title: 'Gee',
          titleSummary: 'Is always your sidekick on the adventures',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }, {
          title: 'Foo',
          titleSummary: 'Is the battlecry for the fight',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }, {
          title: 'Bar',
          titleSummary: 'Is the place where you find the inner self',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }, {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }, {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }, {
          title: 'Boo',
          titleSummary: 'Is the word to scare you',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus.'
        }]
      });
    }
  }, {
    key: "attachOnScrollEventListener",
    value: function () {
      var _attachOnScrollEventListener = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return document.querySelector('div.pusher');

              case 2:
                component = document.querySelector('div.pusher');
                component.addEventListener('scroll', function (e) {
                  var scrollY = component.scrollTop;

                  var currentStep = _this2.checkCurrentStep(scrollY);

                  console.log(currentStep);

                  _this2.setState({
                    currentStep: currentStep
                  });
                });
                /* let ttt = document.querySelector('.stepAlign')
                for (let index = 0; index < ttt.length; index++) {
                  console.log(ttt[index].scrollTop)
                } */

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function attachOnScrollEventListener() {
        return _attachOnScrollEventListener.apply(this, arguments);
      }

      return attachOnScrollEventListener;
    }()
  }, {
    key: "checkCurrentStep",
    value: function checkCurrentStep(pos) {
      var step = -1;

      for (var index = 0; index < this.state.milestones.length - 1; index++) {
        var val = _.inRange(pos, this.state.milestones[index], this.state.milestones[index + 1] + 1);

        if (val) {
          step = index;
          break;
        }
      }

      return step;
    }
  }, {
    key: "milestoneHandler",
    value: function () {
      var _milestoneHandler = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var component, maxHeight, cornerStones, milestones, index;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return document.querySelector('div.pusher');

              case 2:
                component = document.querySelector('div.pusher');
                maxHeight = component.scrollHeight - component.clientHeight;
                cornerStones = maxHeight / this.state.contents.length;
                milestones = [0, cornerStones];

                for (index = 2; index < this.state.contents.length + 1; index++) {
                  milestones.push(cornerStones * index);
                }

                this.setState({
                  milestones: milestones
                });
                console.log(milestones);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function milestoneHandler() {
        return _milestoneHandler.apply(this, arguments);
      }

      return milestoneHandler;
    }()
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "displayContents"
      }, _react.default.createElement("div", {
        className: "fixedToTop"
      }, _react.default.createElement(StepTracker, {
        currentStep: this.state.currentStep,
        contents: this.state.contents
      })), _react.default.createElement("div", {
        className: "contentContainer"
      }, this.state.contents.map(function (value, index) {
        return _react.default.createElement(StepContent, {
          id: index + 1,
          content: value.content
        });
      })));
    }
  }]);

  return Container;
}(_react.Component);

exports.default = Container;
