import React, { Component } from 'react';
import mockApts from '../mockApts';


class ApartmentShow extends Component {
    render() {
        console.log(mockApts)
        return (
            <div className="cards-container">
                <h2>Apartment SHOW Page!</h2>
                <br />
                <p>{ mockApts[0].street }</p>
                {/* <Col sm="6">
                    {this.props.apartments && this.props.apartments.map(apartment => {
                    return (
                        <Card body className="text-center" key={ apartment.id }>
                            <CardTitle>
                                <h4>{ `Location: ${apartment.street}, ${apartment.city}, ${apartment.state}` }</h4>
                            </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                { `${apartment.bedrooms} bedrooms and ${apartment.bathrooms} baths. Monthly Rent: ${apartment.price}` }
                            </CardSubtitle>
                            <CardBody>
                                <CardText>{ `If interested please contact ${apartment.manager} at ${apartment.email}` }</CardText>
                                <CardLink href="#">See Apt Details</CardLink>
                            </CardBody>
                        </Card>
                    )
                    })}
                </Col> */}
            </div>
        );
    }
}

export default ApartmentShow;
