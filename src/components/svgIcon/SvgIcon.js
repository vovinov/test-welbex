import React, {Component} from 'react';

import './svgicon.css';

export default class SvgIcon extends Component {

    state = {
        leftArrowColor: '#eee',
        rightArrowColor: '#eee'
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.order !== this.props.order) {
            switch(this.props.order) {
                case 'asc':
                    this.setState({leftArrowColor: '#000'})
                    this.setState({rightArrowColor: '#eee'})
                    break;
                case 'desc':
                    this.setState({leftArrowColor: '#eee'})
                    this.setState({rightArrowColor: '#000'})
                    break;
                default:
                    this.setState({leftArrowColor: '#eee'})
                    this.setState({rightArrowColor: '#eee'}) 
            }
        }
    }
    
    render() {
        const {leftArrowColor, rightArrowColor} = this.state;
        const {onSvgClick} = this.props;

        return (            
            <div onClick={onSvgClick}>
                <svg 
                className='svg-icon'
                viewBox="0 0 512 512"            
                >
                    <g>	
                        <path d="M267.998,125.671L177.997,5.669c-5.654-7.559-18.34-7.559-23.994,0L64.002,125.671
                            c-7.399,9.844-0.355,23.994,11.997,23.994h45.001v285.003c0,8.291,6.709,15,15,15H196c8.291,0,14.8-6.709,14.8-15V149.665h45.2
                            C268.363,149.665,275.389,135.505,267.998,125.671z" 
                            fill={leftArrowColor} 
                            stroke="#000" />
                    </g>
                    <g>
                        <path d="M436.003,362.005h-45.201V77.001c0-8.291-6.509-15-14.8-15h-60.001c-8.291,0-15,6.709-15,15v285.003h-45.001
                            c-12.353,0-19.396,14.15-11.997,23.994L334.005,506c5.989,8.006,18.014,7.994,23.994,0L448,385.999
                            C455.391,376.165,448.365,362.005,436.003,362.005z"
                            fill={rightArrowColor} 
                            stroke="#000" />
                    </g>
                </svg>
            </div>  
        )
    }   
}
