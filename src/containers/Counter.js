import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCount } from '../actions/oils';

class Counter extends Component {
    
    handleOnClick = () => {
        const currentCount = Object.assign({}, this.props.oil, {
            count: this.props.oil.count + 1
        })

        this.props.editCount(currentCount)
    }

    render() {
        return(
            <div>
                <h2>Counter</h2>
                <div>
                    <span>{ this.props.oil.count }</span>
                    <button onClick={this.handleOnClick}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { editCount })(Counter);