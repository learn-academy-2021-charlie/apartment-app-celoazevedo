import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardLink, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'
// import mockApts from '../mockApts';


class ApartmentShow extends Component {
    // http://localhost:3000/apartmentShow/1
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }
   

    handleSubmit = () => {
        console.log(this.props.apartment.id)
        this.props.deleteApartment(this.props.apartment.id)
        this.setState({ success: true })
    }

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
                        <CardText>{ `Contact ${apartment && apartment.manager} at ${apartment && apartment.email}` }</CardText>
                        <CardText>{ ` ${apartment && apartment.pets} Pets`}</CardText>
                        {/* <CardLink href="#">See Apt Details</CardLink> */}
                        <NavLink to="/apartmentIndex" >
                            <Button onClick={ this.handleSubmit }>
                                Delete Apt
                            </Button>
                        </NavLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ApartmentShow;
