import React from 'react';
import { Card, CardTitle, CardText,
 CardSubtitle, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const OilCard = ({ oil, deleteButton }) => (
    <Card key={ oil.id }>
        <CardBody>
            <CardTitle>{ oil.name }</CardTitle>
            <CardText>{ oil.description }</CardText>
            <CardSubtitle>Uses:</CardSubtitle>
            <CardText>{ oil.uses }</CardText>
            <CardSubtitle>Scent Profile:</CardSubtitle>
            <CardText>{ oil.fragrance_profile }</CardText>
            <CardSubtitle>Medical Properties:</CardSubtitle>
            <CardText>{ oil.medical_properties }</CardText>
            <Button 
                color="danger" 
                size="sm"
                style={{ float: "right" }}
                onClick={() => deleteButton(oil.id) }>
            Delete
            </Button>
            <Button
                color="warning"
                size="sm"
                style={{ 
                    float: "right"
                }}
            >
                <Link 
                    to={{
                        pathname: `/oils/${ oil.id }/edit`,
                        state: { oil: oil }
                    }} >
                    Edit
                </Link>
            </Button>
        </CardBody>
    </Card>
);

