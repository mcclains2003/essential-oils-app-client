***ACTION CREATORS && API CALL***

const setOil = oil => {
    return {
        type: 'GET_OIL_SUCCESS',
        oil
    }
}

export const fetchOil = id => {
    return dispatch => {
        return fetch(`${ API_URL }/oils/${ id }`)
            .then(response => response.json())
            .then(oil => dispatch(setOil(oil)))
            .catch(error => console.log(error));
    }
}

***OIL CARD***

import React from 'react';
import { Card, Button, CardTitle, CardText,
 CardSubtitle, CardBody } from 'reactstrap';

const OilCard = ({ oil }) => (
    <Card key={ oil.id } className="OilsCard">
        <CardBody>
            <CardTitle>{ oil.name }</CardTitle>
            <CardText>{ oil.description }</CardText>
            <CardSubtitle>Uses:</CardSubtitle>
            <CardText>{ oil.uses }</CardText>
            <CardSubtitle>Scent Profile:</CardSubtitle>
            <CardText>{ oil.fragrance_profile }</CardText>
            <CardSubtitle>Medical Properties:</CardSubtitle>
            <CardText>{ oil.medical_properties }</CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
);

export default OilCard;

***OIL SHOW***

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardTitle, CardText,
  CardSubtitle, CardBody } from 'reactstrap';

import OilCard from '../components/OilsList';
import { fetchOil } from '../actions/oils';

class OilShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchOil(id)
  }

  render() {
    return (
        <OilCard oil={ this.props.oil }/>
    );
  }

}

const mapStateToProps = (state) => {
    return ({
      oil: state.oil
    })
  }

export default connect(mapStateToProps, { fetchOil })(OilShow);

***OILS CONTAINER WITH ROUTES***

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchOils } from '../actions/oils';
import OilsList from '../components/OilsList';

class Oils extends Component {

  componentDidMount() {
    this.props.fetchOils();
  }

  render() {
    const { oils } = this.props;

    return (
      <div>
        <OilsList oils={oils} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    oils: state.oils
  };
}

export default connect(mapStateToProps, { fetchOils })(Oils);

*** EDIT OIL FORM ***
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { updateOilFormData } from '../actions/oilForm';
import { fetchOil, editOil } from '../actions/oils';

class OilEditForm extends Component {

    componentDidMount() {
        this.props.fetchOil(this.props.match.params.id)
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
        const { name, description, uses, fragrance_profile, medical_properties } = this.props.oil;

        return (
            <div>
                <div>
                    <h1>Edit Oil</h1>
                </div>
                <div>
                    <Form onSubmit={ this.handleOnSubmit }>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name:</Label>
                            <Col sm={10}>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    defaultValue={ name }
                                    onChange={ this.handleOnChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="description" sm={2}>Description:</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    defaultValue={ description }
                                    onChange={ this.handleOnChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="uses" sm={2}>Uses:</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="uses" 
                                    defaultValue={ uses }
                                    onChange={ this.handleOnChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="fragrance_profile" sm={2}>Fragrance:</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="fragrance_profile" 
                                    defaultValue={ fragrance_profile }
                                    onChange={ this.handleOnChange }
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="medical_properties" sm={2}>Medical Properties:</Label>
                            <Col sm={10}>
                                <Input 
                                    type="textarea" 
                                    name="medical_properties" 
                                    defaultValue={ medical_properties }
                                    onChange={ this.handleOnChange }
                                />
                            </Col>
                        </FormGroup>

                        <Button type="submit">Update Oil</Button>
                    </Form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
      oil: state.oil,
      oilFormData: state.oilFormData
    })
  }

export default connect(mapStateToProps, { fetchOil, updateOilFormData, editOil })(OilEditForm);