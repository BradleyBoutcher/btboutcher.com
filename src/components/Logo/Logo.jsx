import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Logo extends Component {
    static defaultProps = {
          width: '30',
          height: '30',
          iconTitle: "logo",
          fill: '#fff',
    }

    render() {
        const { height, width, fill, iconTitle } = this.props;
        return (
            <svg className = "logo-container" width={width} height={height} viewBox="0 0 2778 2778" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                <title id={iconTitle}>bradley boutcher</title>
                <path 
                className = "logo" 
                d="M748.612 462.5c0-134.147-108.91-243.055-243.056-243.055-134.145 0-243.056 108.908-243.056 243.055v1852.78c0 134.147 108.91 243.055 243.056 243.055 134.145 0 243.056-108.908 243.056-243.055V462.5zM1337.5 1759.725c0-134.146-108.91-243.056-243.055-243.056s-243.056 108.91-243.056 243.056v555.555c0 134.146 108.91 243.056 243.056 243.056 134.145 0 243.056-108.91 243.056-243.056v-555.555zM1926.39 462.5c0-134.147-108.91-243.055-243.055-243.055-134.146 0-243.056 108.908-243.056 243.055v1852.78c0 134.147 108.91 243.055 243.056 243.055 134.145 0 243.055-108.908 243.055-243.055V462.5zM2515.28 1759.725c0-134.146-108.91-243.056-243.056-243.056-134.145 0-243.056 108.91-243.056 243.056v555.555c0 134.146 108.91 243.056 243.056 243.056 134.145 0 243.056-108.91 243.056-243.056v-555.555z" 
                fill= {fill} />
            </svg>      
        )
    }
};

Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string,
    iconTitle: PropTypes.string,
}