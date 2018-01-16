import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Counter from '../containers/Counter';

const OilsList = ({ oils }) => {
    const renderOils = oils.map(oil =>
        <ListGroupItem key={ oil.id }>
            <Link key={ oil.id } to={`/oils/${oil.id}`}>{ oil.name }</Link>
            <Counter oil={ oil }/>
        </ListGroupItem>
    );

    return (
        <ListGroup>
            { renderOils }
        </ListGroup>
    );
};

export default OilsList;