import React, { Component } from 'react'

class Err_Boundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Oops!!! Something went wrong..</h1>
                </>
            )
        }
        else {
            return this.props.children;
        }
    }
}

export default Err_Boundary
