import React, { Component } from 'react';
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchOil, editOil } from '../actions/oils';
import { updateOilFormData } from '../actions/oilForm';
import { OilFormTemplate } from '../components/OilFormTemplate';

class OilEditForm extends Component {

    componentWillMount() {
        const { id } = this.props.match.params

        this.props.fetchOil(id)
    }

    componentDidMount() {
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
                    <OilFormTemplate oil={ this.props.oil } handleOnSubmit={ this.handleOnSubmit } handleOnChange={ this.handleOnChange }/>
                    {/* <Form onSubmit={ this.handleOnSubmit }>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name:</Label>
                            <Col sm={10}>
                                <Input 
                                    onChange={ this.handleOnChange }
                                    type="text" 
                                    name="name"
                                    defaultValue={ this.props.oil.name }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={2}>Description:</Label>
                            <Col sm={10}>
                                <Input 
                                    onChange={ this.handleOnChange }
                                    type="textarea" 
                                    name="description"
                                    defaultValue={ this.props.oil.description }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="uses" sm={2}>Uses:</Label>
                            <Col sm={10}>
                                <Input 
                                    onChange={ this.handleOnChange }
                                    type="textarea" 
                                    name="uses"
                                    defaultValue={ this.props.oil.uses }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="fragrance_profile" sm={2}>Fragrance:</Label>
                            <Col sm={10}>
                                <Input 
                                    onChange={ this.handleOnChange }
                                    type="textarea" 
                                    name="fragrance_profile"
                                    defaultValue={ this.props.oil.fragrance_profile }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="medical_properties" sm={2}>Medical Properties:</Label>
                            <Col sm={10}>
                                <Input 
                                    onChange={ this.handleOnChange }
                                    type="textarea" 
                                    name="medical_properties" 
                                    defaultValue={ this.props.oil.medical_properties }
                                />
                            </Col>
                        </FormGroup>

                        <Button type="submit">Update Oil</Button>
                    </Form> */}
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