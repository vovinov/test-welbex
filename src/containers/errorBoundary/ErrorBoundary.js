import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })

    }


    render() {

        const {hasError, errorMessage} = this.state;

        if (hasError) {
            return  <p>{errorMessage}</p> 
        } else {
            return this.props.children
        }
        
    }
}
