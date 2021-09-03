import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardHeader, Button, Col, CardFooter, NavItem} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentProtected extends Component {
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
        // console.log(this.props.apartment.id);
        console.log(this.props.user_id);
 
        return (
            <div className="cards-container">
                <h2>Apartment Protected!</h2>
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
                                <NavItem className="nav-link">    <a href={`/apartmentShow/${apartment.id}`}>See Apt Details</a>
                                </NavItem>
                                {/* <CardLink href={`/apartmentShow/${apartment.id}`}>See Apt Details</CardLink> */}
                                <NavItem className="nav-link"><a href={`/apartmentEdit/${apartment.id}`}>Edit Apt</a></NavItem>
                            </CardFooter>
                            <NavLink to="/apartmentProtected" >
                            <Button onClick={ this.handleSubmit }>
                                Delete Apt
                            </Button>
                        </NavLink>
                        </Card>
                    )
                    })}
                </Col>
            </div>
        );
    }
}

export default ApartmentProtected;
