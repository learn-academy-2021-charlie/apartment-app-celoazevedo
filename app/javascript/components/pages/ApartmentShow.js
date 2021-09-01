import React, { Component } from 'react';
import { Card, CardTitle, Col, CardSubtitle, CardText, CardBody, CardLink} from 'reactstrap'
import mockApts from '../mockApts';


class ApartmentShow extends Component {
    // http://localhost:3000/apartmentShow/1
   

    render() {
        // destructure props to access apartment
        const {apartment} = this.props

        return (
            <div className="cards-container">
                <h2>Apartment SHOW Page!</h2>
                <br />
                <p>{ apartment && apartment.city }</p>
                <Card body className="text-center">
                    <CardTitle>
                                <h4>{ `Location: ${apartment && apartment.street}, ${apartment && apartment.city}, ${apartment && apartment.state}` }</h4>
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                { `${apartment && apartment.bedrooms} bedrooms and ${apartment && apartment.bathrooms} baths. Monthly Rent: ${apartment && apartment.price}` }
                    </CardSubtitle>
                    <CardBody>
                        <CardText>{ `If interested please contact ${apartment && apartment.manager} at ${apartment && apartment.email}` }</CardText>
                        <CardLink href="#">See Apt Details</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ApartmentShow;
