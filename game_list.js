'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameProduct = function (_React$Component) {
  _inherits(GameProduct, _React$Component);

  function GameProduct() {
    _classCallCheck(this, GameProduct);

    return _possibleConstructorReturn(this, (GameProduct.__proto__ || Object.getPrototypeOf(GameProduct)).apply(this, arguments));
  }

  _createClass(GameProduct, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "game-card" },
        React.createElement(
          "div",
          { className: "game-image" },
          React.createElement("img", { src: this.props.picture, alt: "", draggable: "false" })
        ),
        React.createElement(
          "div",
          { className: "game-details" },
          React.createElement(
            "div",
            { className: "game-price" },
            React.createElement(
              "div",
              { className: "game-discount" },
              "-",
              Math.round(this.props.discountPrice / this.props.fullPrice * 100),
              "%"
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "div",
                { className: "game-price--full" },
                "R$ ",
                this.props.fullPrice
              ),
              React.createElement(
                "div",
                { className: "game-price--discount" },
                "R$ ",
                this.props.discountPrice
              )
            )
          ),
          React.createElement(
            "div",
            { className: "game-retailer" },
            React.createElement("img", { src: "/assets/steam.png", alt: "", draggable: "false" })
          )
        ),
        React.createElement(
          "button",
          { className: "game-button" },
          "Comprar"
        )
      );
    }
  }]);

  return GameProduct;
}(React.Component);

var rockstarDOM = document.querySelector('#rockstar-game-list');
ReactDOM.render([].concat(_toConsumableArray(Array(4))).map(function (x, i) {
  return React.createElement(GameProduct, {
    key: i,
    picture: "./assets/games/rockstar/game_" + (i + 1) + ".jpg",
    fullPrice: Math.floor(Math.random() * (300 - 100 + 1)) + 100 + 0.99,
    discountPrice: Math.floor(Math.random() * (100 - 50 + 1)) + 50 + 0.07
  });
}), rockstarDOM);

var devolverDOM = document.querySelector('#devolver-game-list');
ReactDOM.render([].concat(_toConsumableArray(Array(4))).map(function (x, i) {
  return React.createElement(GameProduct, {
    key: i,
    picture: "./assets/games/devolver/game_" + (i + 1) + ".jpg",
    fullPrice: Math.floor(Math.random() * (100 - 70 + 1)) + 100 + 0.99,
    discountPrice: Math.floor(Math.random() * (70 - 25 + 1)) + 25 + 0.07
  });
}), devolverDOM);