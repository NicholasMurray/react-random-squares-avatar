import React, { Component } from 'react'

export default class RandomSquaresAvatar extends Component {
    render() {
        let rows, columns, avatarWidth, avatarHeight, r, g, b, x, y, fill,
            translateX, translateY, rotate, transform, viewBox, blockSize, maxBlockSize;
        const rects = [];

        function getRandomRange(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function getRandomRangeInIncrementsOf10(min, max) {
            return Math.round((Math.random()*(max-min)+min)/10)*10;
        }

        avatarWidth = parseInt(this.props.width, 10);
        avatarHeight = parseInt(this.props.height, 10);

        maxBlockSize = (avatarHeight - 10);

        if (avatarWidth < avatarHeight) {
            maxBlockSize = avatarWidth
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
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil(avatarHeight / blockSize)));
                columns = ((Math.ceil(avatarWidth / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            } else {
                translateX = -Math.abs(avatarHeight / 2);
                translateY = -Math.abs(avatarWidth / 2);
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil((avatarHeight * 2) / blockSize)));
                columns = ((Math.ceil((avatarWidth * 2) / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            }
        } else if (avatarHeight > avatarWidth) {
            if (rotate === 0) {
                translateX = 0;
                translateY = 0;
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil(avatarHeight / blockSize)));
                columns = ((Math.ceil(avatarWidth / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            } else {
                translateX = -Math.abs(avatarHeight / 2);
                translateY = -Math.abs(avatarWidth);
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil((avatarHeight * 2) / blockSize)));
                columns = ((Math.ceil((avatarWidth * 3) / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            }
        } else if (avatarHeight < avatarWidth) {
            if (rotate === 0) {
                translateX = 0;
                translateY = 0;
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil(avatarHeight / blockSize)));
                columns = ((Math.ceil(avatarWidth / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            } else {
                translateX = -Math.abs(avatarHeight / 2);
                translateY = -Math.abs(avatarWidth / 4);
                transform = `translate(${0} ${0})`;
                rows = ((Math.ceil((avatarHeight * 4) / blockSize)));
                columns = ((Math.ceil((avatarWidth * 2) / blockSize)));
                transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${avatarWidth} ${avatarHeight})`;
            }
        }

        viewBox = `0 0 ${avatarWidth} ${avatarHeight}`;

        let key = 1;
        for (let i = 0; i < columns; i++) {
            for (let j = 0; j < rows; j++) {
                key += 1;
                r = getRandomRange(0, 255);
                g = getRandomRange(0, 255);
                b = getRandomRange(0, 255);
                x = i * blockSize;
                y = j * blockSize;
                fill = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                rects.push(<rect key={key} height={blockSize} width={blockSize} fill={fill} x={x} y={y} />);
            }
        }

        return (
            <div>
              <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                  height={avatarHeight}
                  width={avatarWidth}
                  viewBox={viewBox} >
                          <g transform={transform}>
                          {rects}
                          </g>
              </svg>
            </div>
        )
    }
}

RandomSquaresAvatar.defaultProps = {
    height: 100,
    width: 100
};

RandomSquaresAvatar.propTypes = {
    height: React.PropTypes.number.isRequired,
    width:  React.PropTypes.number.isRequired,
    rotate: React.PropTypes.number
};
