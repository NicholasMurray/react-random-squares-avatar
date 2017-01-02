import React, { Component } from 'react'

export default class RandomSquaresAvatar extends Component {
    render() {
        let rows, columns, width, height, r, g, b, x, y, fill,
            translateX, translateY, rotate, rotateAdditionalSize,
            transform, viewBox;
        const rects = [];

        let maxBlockSize = (parseInt(this.props.height) - 10);

        if (parseInt(this.props.width) < parseInt(this.props.height)) {
            maxBlockSize = parseInt(this.props.width)
        }

        const blockSize = getRandomRangeInIncrementsOf10(50, maxBlockSize);

        if (this.props.rotate === undefined) {
            rotate = getRandomRangeInIncrementsOf10(10, 90);
        } else {
            rotate = parseInt(this.props.rotate);
        }

        // add extra squares to allow for smaller squares than viewBox and also rotation
        if (this.props.height === this.props.width) {
            rotateAdditionalSize = 1;
        } else {
            rotateAdditionalSize = 3;
        }

        if (this.props.height > this.props.width) {
            columns = ((Math.ceil(parseInt(this.props.height) / blockSize)) + rotateAdditionalSize);
            rows = columns
        } else if (this.props.width > this.props.height) {
            columns = ((Math.ceil(parseInt(this.props.width) / blockSize)) + rotateAdditionalSize);
            rows = columns
        } else {
            columns = ((Math.ceil(parseInt(this.props.height) / blockSize)) + rotateAdditionalSize);
            rows = ((Math.ceil(parseInt(this.props.width) / blockSize)) + rotateAdditionalSize);
        }

        // not 0 or 90 degrees rotation offset and rotate around center
        if ((rotate == 0) || (rotate == 90)) {
            translateX = 0;
            translateY = 0;
            transform = `translate(${0} ${0})`;
        } else {
            translateX = -25;
            translateY = -25;
            transform = `translate(${translateX} ${translateY}) rotate(${rotate} ${this.props.width} ${this.props.height})`;
        }

        viewBox = `0 0 ${this.props.width} ${this.props.height}`;

        function getRandomRange(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function getRandomRangeInIncrementsOf10(min, max) {
            return Math.round((Math.random()*(max-min)+min)/10)*10;
        }

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
            <svg xmlnsXlink="http://www.w3.org/1999/xlink"
                height={this.props.height}
                width={this.props.width}
                viewBox={viewBox} >
                        <g transform={transform}>
                        {rects}
                        </g>
            </svg>
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
