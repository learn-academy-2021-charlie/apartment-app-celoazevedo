import React, { Component } from 'react';
import { Card, CardTitle, Col, CardSubtitle } from 'reactstrap'

class ApartmentIndex extends Component {
    render() {
        return (
            <div>
                <h2>Apartment Index Page!</h2>
                <br />
                <Col sm="6">
                    { this.props.apartments.map(apartment => {
                    return (
                        <Card body key={ apartment.id }>
                            <CardTitle>
                                <h4>{ apartment.street }</h4>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                <p>{ apartment.city }</p>
                            </CardSubtitle>
                        </Card>
                    )
                    })}
                </Col>
            </div>
        );
    }
}

export default ApartmentIndex;
