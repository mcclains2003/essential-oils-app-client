import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOil, editOil } from '../actions/oils';
import { updateOilFormData } from '../actions/oilForm';
import { OilFormTemplate } from '../components/OilFormTemplate';

class OilEditForm extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        
        this.props.fetchOil(id)
        this.props.updateOilFormData(this.props.oil)
    }

    handleOnChange = event => {
        const { name, value } = event.target
        const currentOilFormData = Object.assign({}, this.props.oilFormData, {
            [name]: value
        })

        this.props.updateOilFormData(currentOilFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { history, editOil } = this.props
        
        editOil(this.props.oilFormData, history);
    }


    render() {
        return(
            <div>
                <div>
                    <h1>Edit Oil</h1>
                </div>
                <div>
                    <OilFormTemplate oil={ this.props.oil } 
                                     handleOnSubmit={ this.handleOnSubmit }
                                     handleOnChange={ this.handleOnChange }
                                     buttonText="Update Oil" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      oil: state.oil,
      oilFormData: state.oilFormData
    }
}

export default connect(mapStateToProps, { fetchOil, updateOilFormData, editOil })(OilEditForm);