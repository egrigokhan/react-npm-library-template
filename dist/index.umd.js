(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/regenerator'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/regenerator', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["shil-me-mint-button"] = factory(global._toConsumableArray, global._asyncToGenerator, global._defineProperty, global._slicedToArray, global._regeneratorRuntime, global.React));
})(this, (function (_toConsumableArray, _asyncToGenerator, _defineProperty, _slicedToArray, _regeneratorRuntime, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
  var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = ".mint-button-container {\n\twidth: 200px;\n}\n\n.mint-button-top-bar-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tfont-size: 10px;\n\tfont-family: 'Inter';\n}\n\n.mint-button-middle-bar-container {\n\tdisplay: flex;\nbackground: #FDC830;  /* fallback for old browsers */\nbackground: -webkit-linear-gradient(to right, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */\nbackground: linear-gradient(to right, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n\n\tpadding: 12px 16px;\n\tfont-family: 'Inter';\n\tfont-weight: bold;\n\tborder-radius: 16px;\n\tmargin: 2px 0px;\n\ttransition-duration: 0.1s;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n.jitter-container {\n\tanimation-name: jitter;\n  animation-duration: 0.15s;\n  animation-timing-function: linear;\n  animation-delay: 0s;\n  animation-fill-mode: none;\n  animation-iteration-count: infinite;\n  animation-play-state: paused;\n\n  animation-direction: forward;\n  animation-play-state: running;\n}\n\n.mint-button-middle-bar-container:hover {\n\tbackground-color: rgba(41, 41, 42);\n\tcolor: white;\n\ttransition-duration: 0.1s;\n\ttransform: scale(1.05);\n\tanimation: none;\n}\n\n.mint-button-middle-bar-container > span {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n\n.mint-button-bottom-bar-container {\n\tdisplay: flex;\n\tfont-size: 10px;\n\tfont-family: 'Inter';\n}\n\n@keyframes shake-animation {\n   0% { transform:translate(0,0) }\n  1.78571% { transform:translate(5px,0) }\n  3.57143% { transform:translate(0,0) }\n  5.35714% { transform:translate(5px,0) }\n  7.14286% { transform:translate(0,0) }\n  8.92857% { transform:translate(5px,0) }\n  10.71429% { transform:translate(0,0) }\n  100% { transform:translate(0,0) }\n}\n\n@keyframes jitter {\n  0% {\n    transform: skew(0deg) translate(0px, 0px);\n  }\n  17% {\n    transform: skew(0.5deg) translate(-1px, 0px);\n  }\n  32% {\n    transform: skew(0.5deg) translate(0px, 0px);\n  }\n  48% {\n    transform: skew(0deg) translate(0px, 0px);\n  }\n  63% {\n    transform: skew(-0.5deg) translate(1px, 0px);\n  }\n  79% {\n    transform: skew(-0.5deg) translate(0px, 0px);\n  }\n  100% {\n    transform: skew(0deg) translate(0px, 0px);\n  }\n}";
  n(css,{});

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  var Web3 = require('web3');
  function MintButton(props_) {
    var _useState = React.useState(1),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        count = _useState2[0],
        setCount = _useState2[1];

    var _useState3 = React.useState(-1),
        _useState4 = _slicedToArray__default["default"](_useState3, 2),
        state = _useState4[0],
        setState = _useState4[1];

    var _useState5 = React.useState(_objectSpread({
      showMintPrice: true,
      showMintSoFar: false,
      shil: true,
      tokenUnit: "Ξ",
      mintMethodName: "mint",
      mintMethodInput: "(count)",
      mintText: "Mint",
      maxMintAmount: 1,
      jitter: true
    }, props_)),
        _useState6 = _slicedToArray__default["default"](_useState5, 2),
        props = _useState6[0];
        _useState6[1];

    var mintNFT = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(count) {
        var accounts, account;
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window.ethereum) {
                  _context.next = 16;
                  break;
                }

                setState(0);
                _context.next = 4;
                return window.ethereum.send("eth_requestAccounts");

              case 4:
                window.web3 = new Web3(window.ethereum);
                _context.next = 7;
                return web3.eth.getAccounts();

              case 7:
                accounts = _context.sent;

                if (!(!accounts || accounts.length == 0)) {
                  _context.next = 11;
                  break;
                }

                window.alert("No accounts.");
                return _context.abrupt("return");

              case 11:
                account = accounts[0];
                new web3.eth.Contract(props.ABI, props.ADDRESS);
                eval("contract.methods.".concat(props.mintMethodName).concat(props.mintMethodInput)).send({
                  from: account,
                  value: "".concat(parseInt(props.singleMintPriceInWei) * count)
                }).then(function () {
                  setState(1);
                })["catch"](function () {
                  setState(2);
                });
                _context.next = 17;
                break;

              case 16:
                setState(2);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function mintNFT(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/React__default["default"].createElement("div", {
      "class": "mint-button-container"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      "class": "mint-button-top-bar-container"
    }, props.showMintPrice && /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        "float": "left",
        fontWeight: 'bold'
      }
    }, parseFloat(props.singleMintPriceInWei) / parseFloat(1000000000000000000), " ", props.tokenUnit), props.showMintSoFar && /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        marginLeft: 'auto',
        "float": "right"
      }
    }, "76/1245")), /*#__PURE__*/React__default["default"].createElement("div", {
      "class": "".concat(props.jitter ? "jitter-container" : "", " mint-button-middle-bar-container"),
      onClick: function onClick(e) {
        if (e.target.tagName !== 'SELECT') {
          mintNFT(count);
        }
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", null, state == -1 && props.mintText, state == 0 && "Minting...", state == 1 && "🎉🎉🎉", state == 2 && "😢😢😢"), /*#__PURE__*/React__default["default"].createElement("select", {
      onChange: function onChange(e) {
        setCount(e.target.value);
      },
      onClick: function onClick() {},
      style: {
        backgroundColor: 'white',
        border: 'none',
        padding: '1px',
        borderRadius: '4px'
      },
      value: count,
      name: "mint-count",
      id: "mint-count"
    }, _toConsumableArray__default["default"](Array(props.maxMintAmount)).map(function (e, i) {
      return /*#__PURE__*/React__default["default"].createElement("option", {
        value: i + 1
      }, i + 1);
    }))), /*#__PURE__*/React__default["default"].createElement("div", {
      "class": "mint-button-bottom-bar-container"
    }, props.shil && /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        "float": "right",
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      style: {
        marginRight: "3px"
      }
    }, "powered by"), /*#__PURE__*/React__default["default"].createElement("a", {
      href: "https://shil.me",
      style: {
        fontFamily: 'DM Serif Display',
        color: 'black',
        textDecoration: 'none'
      }
    }, "Shil.me"))));
  }

  var returnLibrary = function returnLibrary() {
    return {
      MintButton: MintButton // you can add here other components that you want to export

    };
  };

  var index = returnLibrary();

  return index;

}));
