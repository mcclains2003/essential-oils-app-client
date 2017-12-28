import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const OilFormTemplate = ({ oil, handleOnChange, handleOnSubmit }) => (
    <Form onSubmit={() => this.handleOnSubmit }>
        <FormGroup row>
            <Label for="name" sm={2}>Name:</Label>
            <Col sm={10}>
                <Input
                    onChange={(event) => this.handleOnChange }
                    type="text" 
                    name="name"
                    defaultValue={ oil.name }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="description" sm={2}>Description:</Label>
            <Col sm={10}>
                <Input 
                    onChange={(event) => this.handleOnChange }
                    type="textarea" 
                    name="description"
                    defaultValue={ oil.description }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="uses" sm={2}>Uses:</Label>
            <Col sm={10}>
                <Input 
                    onChange={(event) => this.handleOnChange }
                    type="textarea" 
                    name="uses"
                    defaultValue={ oil.uses }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="fragrance_profile" sm={2}>Fragrance:</Label>
            <Col sm={10}>
                <Input 
                    onChange={(event) => this.handleOnChange }
                    type="textarea" 
                    name="fragrance_profile"
                    defaultValue={ oil.fragrance_profile }
                />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="medical_properties" sm={2}>Medical Properties:</Label>
            <Col sm={10}>
                <Input 
                    onChange={(event) => this.handleOnChange }
                    type="textarea" 
                    name="medical_properties" 
                    defaultValue={ oil.medical_properties }
                />
            </Col>
        </FormGroup>

        <Button type="submit">Update Oil</Button>
    </Form>  
);