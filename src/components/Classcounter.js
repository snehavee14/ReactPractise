import React, { Component } from 'react'

class Classcounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Increment = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.Increment}>Click {this.state.count}</button>
            </div>
        )
    }
}

export default Classcounter
