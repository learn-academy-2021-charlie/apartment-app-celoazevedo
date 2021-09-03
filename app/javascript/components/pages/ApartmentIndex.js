import React, { Component } from 'react';
import { Card, CardTitle, Col, CardSubtitle, CardText, CardBody, CardLink, CardHeader, CardFooter} from 'reactstrap'

class ApartmentIndex extends Component {
    render() {
        return (
            <div className="cards-container">
                <h2>Apartment Index Page!</h2>
                <br />
                <Col sm="6" id="cards">
                    {this.props.apartments && this.props.apartments.map(apartment => {
                    return (
                        <Card body className="text-center" key={ apartment.id }>
                            <CardHeader className="text-success" size="lg" ><h2>{`Apartment for rent in ${apartment.city}`}</h2></CardHeader>
                            <CardTitle>
                                { `Location: ${apartment.street}, ${apartment.city}, ${apartment.state}` }
                            </CardTitle>
                            <CardSubtitle tag="h3" className="mb-2 text-muted">
                                { `${apartment.bedrooms} bedrooms and ${apartment.bathrooms} baths. Monthly Rent: ${apartment.price}` }
                            </CardSubtitle>
                            <CardBody>
                                <CardText>{ `If interested please contact ${apartment.manager} at ${apartment.email}` }</CardText>
                            </CardBody>
                            <CardFooter className="text-muted">
                                <CardLink href={`/apartmentShow/${apartment.id}`}>See Apt Details</CardLink>
                                <CardLink href={`/apartmentEdit/${apartment.id}`}>Edit Apt</CardLink>
                            </CardFooter>
                        </Card>
                    )
                    })}
                </Col>
            </div>
        );
    }
}

export default ApartmentIndex;
