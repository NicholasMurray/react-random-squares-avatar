(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var RandomSquaresAvatar = function (_Component) {
        _inherits(RandomSquaresAvatar, _Component);

        function RandomSquaresAvatar() {
            _classCallCheck(this, RandomSquaresAvatar);

            return _possibleConstructorReturn(this, (RandomSquaresAvatar.__proto__ || Object.getPrototypeOf(RandomSquaresAvatar)).apply(this, arguments));
        }

        _createClass(RandomSquaresAvatar, [{
            key: 'render',
            value: function render() {
                var rows = void 0,
                    columns = void 0,
                    avatarWidth = void 0,
                    avatarHeight = void 0,
                    r = void 0,
                    g = void 0,
                    b = void 0,
                    x = void 0,
                    y = void 0,
                    fill = void 0,
                    translateX = void 0,
                    translateY = void 0,
                    rotate = void 0,
                    transform = void 0,
                    viewBox = void 0,
                    blockSize = void 0,
                    maxBlockSize = void 0;
                var rects = [];

                function getRandomRange(min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                }

                function getRandomRangeInIncrementsOf10(min, max) {
                    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
                }

                avatarWidth = parseInt(this.props.width, 10);
                avatarHeight = parseInt(this.props.height, 10);

                maxBlockSize = avatarHeight - 10;

                if (avatarWidth < avatarHeight) {
                    maxBlockSize = avatarWidth;
                }

                blockSize = getRandomRangeInIncrementsOf10(50, maxBlockSize);

                if (this.props.rotate === undefined) {
                    rotate = getRandomRangeInIncrementsOf10(10, 80);
                } else {
                    rotate = parseInt(this.props.rotate, 10);
                }

                // add extra squares to allow for smaller squares than viewBox and also rotation
                if (avatarHeight === avatarWidth) {
                    if (rotate === 0) {
                        translateX = 0;
                        translateY = 0;
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight / blockSize);
                        columns = Math.ceil(avatarWidth / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    } else {
                        translateX = -Math.abs(avatarHeight / 2);
                        translateY = -Math.abs(avatarWidth / 2);
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight * 2 / blockSize);
                        columns = Math.ceil(avatarWidth * 2 / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    }
                } else if (avatarHeight > avatarWidth) {
                    if (rotate === 0) {
                        translateX = 0;
                        translateY = 0;
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight / blockSize);
                        columns = Math.ceil(avatarWidth / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    } else {
                        translateX = -Math.abs(avatarHeight / 2);
                        translateY = -Math.abs(avatarWidth);
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight * 2 / blockSize);
                        columns = Math.ceil(avatarWidth * 3 / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    }
                } else if (avatarHeight < avatarWidth) {
                    if (rotate === 0) {
                        translateX = 0;
                        translateY = 0;
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight / blockSize);
                        columns = Math.ceil(avatarWidth / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    } else {
                        translateX = -Math.abs(avatarHeight / 2);
                        translateY = -Math.abs(avatarWidth / 4);
                        transform = 'translate(' + 0 + ' ' + 0 + ')';
                        rows = Math.ceil(avatarHeight * 4 / blockSize);
                        columns = Math.ceil(avatarWidth * 2 / blockSize);
                        transform = 'translate(' + translateX + ' ' + translateY + ') rotate(' + rotate + ' ' + avatarWidth + ' ' + avatarHeight + ')';
                    }
                }

                viewBox = '0 0 ' + avatarWidth + ' ' + avatarHeight;

                var key = 1;
                for (var i = 0; i < columns; i++) {
                    for (var j = 0; j < rows; j++) {
                        key += 1;
                        r = getRandomRange(0, 255);
                        g = getRandomRange(0, 255);
                        b = getRandomRange(0, 255);
                        x = i * blockSize;
                        y = j * blockSize;
                        fill = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                        rects.push(_react2.default.createElement('rect', { key: key, height: blockSize, width: blockSize, fill: fill, x: x, y: y }));
                    }
                }

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'svg',
                        { xmlnsXlink: 'http://www.w3.org/1999/xlink',
                            height: avatarHeight,
                            width: avatarWidth,
                            viewBox: viewBox },
                        _react2.default.createElement(
                            'g',
                            { transform: transform },
                            rects
                        )
                    )
                );
            }
        }]);

        return RandomSquaresAvatar;
    }(_react.Component);

    exports.default = RandomSquaresAvatar;


    RandomSquaresAvatar.defaultProps = {
        height: 100,
        width: 100
    };

    RandomSquaresAvatar.propTypes = {
        height: _react2.default.PropTypes.number.isRequired,
        width: _react2.default.PropTypes.number.isRequired,
        rotate: _react2.default.PropTypes.number
    };
});