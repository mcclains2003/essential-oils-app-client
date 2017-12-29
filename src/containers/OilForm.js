import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateOilFormData } from '../actions/oilForm';
import { createOil } from '../actions/oils';
import { OilFormTemplate } from '../components/OilFormTemplate';

class OilForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target
        const currentOilFormData = Object.assign({}, this.props.oilFormData, {
            [name]: value
        })

        this.props.updateOilFormData(currentOilFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const { history, createOil } = this.props

        createOil(this.props.oilFormData, history);
    }

    render() {
        const initialState = {
            name: '',
            description: '',
            uses: '',
            fragrance_profile: '',
            medical_properties: ''
        }

        return (
            <div>
                <div>
                    <h1>New Oil Form</h1>
                </div>
                <div>
                    <OilFormTemplate oil={ initialState } 
                                     handleOnSubmit={ this.handleOnSubmit }
                                     handleOnChange={ this.handleOnChange }
                                     buttonText="Add Oil" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
      oilFormData: state.oilFormData
    })
  }

export default connect(mapStateToProps, { updateOilFormData, createOil })(OilForm);