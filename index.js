"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("../css/index.css");

var _StepTracker = _interopRequireDefault(require("./StepTracker"));

var _StepContent = _interopRequireDefault(require("./StepContent"));

var _lodash = _interopRequireDefault(require("lodash"));

var Container =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Container, _Component);

  function Container(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Container);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).call(this, props));
    _this.state = {
      contents: [],
      milestones: [],
      currentStep: -1,
      position: _this.props.position === 'top' || 'bottom' ? _this.props.position : 'top'
    };

    _this.attachOnScrollEventListener();

    _this.milestoneHandler();

    return _this;
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        contents: this.props.contents
      });
    }
  }, {
    key: "attachOnScrollEventListener",
    value: function () {
      var _attachOnScrollEventListener = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this2 = this;

        var component;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return document.querySelector('.contentContainer');

              case 2:
                component = document.querySelector('.contentContainer');
                component.addEventListener('scroll', function (e) {
                  var scrollY = component.scrollTop;
                  console.log(scrollY);

                  var currentStep = _this2.checkCurrentStep(scrollY);

                  _this2.setState({
                    currentStep: currentStep
                  });
                });

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
        var val = _lodash.default.inRange(pos, this.state.milestones[index], this.state.milestones[index + 1] + 1);

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
      var _milestoneHandler = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var stepperHeight, milestones, index, stepsHeight, decrementPerStep;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return document.querySelector('.contentContainer');

              case 2:
                stepperHeight = document.getElementsByClassName('stepper')[0].clientHeight;
                milestones = [];

                for (index = 1; index < this.state.contents.length + 1; index++) {
                  stepsHeight = document.querySelector('#section' + index + ' h3').offsetTop;
                  decrementPerStep = 20;

                  if (index === this.state.contents.length) {
                    decrementPerStep = 70;
                  }

                  milestones.push(stepsHeight - stepperHeight - decrementPerStep);
                }

                milestones.push(document.querySelector('.contentContainer').scrollHeight);
                console.log(milestones);
                this.setState({
                  milestones: milestones
                });

              case 8:
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
        className: this.state.position + ' stepper'
      }, _react.default.createElement(_StepTracker.default, {
        milestones: this.state.milestones,
        currentStep: this.state.currentStep,
        contents: this.state.contents
      })), _react.default.createElement("div", {
        className: "contentContainer"
      }, this.state.contents.map(function (value, index) {
        return _react.default.createElement(_StepContent.default, {
          id: index + 1,
          content: value.content
        });
      })));
    }
  }]);
  return Container;
}(_react.Component);

exports.default = Container;
