import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'


class ApartmentEdit extends Component {

    constructor(props){
        super(props)
        this.state = {
          form:{
            street: "",
            city: "",
            state: "",
            manager: "",
            email: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            pets: ""
          },
          success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }
  
    handleSubmit = () => {
        this.props.apartmentUpdate(this.state.form, this.props.apartment.id)
        this.setState({ success: true })
    }

    render() {

        return (
            <>
                {/* <h3>Edit Appartment Page!</h3> */}
                    <Form className="formEdit">
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                            <Label for="email">Email</Label>
                                <Input
                                    className='inputs'
                                    type="email"
                                    name="email"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.email }/>
                            </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="manager">Manager</Label>
                                    <Input
                                        className='inputs'
                                        type="text"
                                        name="manager"
                                        onChange={ this.handleChange }
                                        value={ this.state.form.manager }/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="street">Street</Label>
                                <Input
                                    className='inputs'
                                    type="text"
                                    name="street"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.street }/>
                            </FormGroup>
                        </Col>
                        <Row form>
                            <Col md={6}>
                            <FormGroup>
                                <Label for="age">City</Label>
                                <Input
                                    className='inputs'
                                    type="text"
                                    name="city"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.city }/>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="state">State</Label>
                                    <Input
                                        className='inputs'
                                        type="text"
                                        name="state"
                                        onChange={ this.handleChange }
                                        value={ this.state.form.state }/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="street">Bedrooms</Label>
                                    <Input
                                        className='inputs'
                                        type="text"
                                        name="bedrooms"
                                        onChange={ this.handleChange }
                                        value={ this.state.form.bedrooms }/>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="bathrooms">Bathrooms</Label>
                                    <Input
                                        className='inputs'
                                        type="number"
                                        name="bathrooms"
                                        onChange={ this.handleChange }
                                        value={ this.state.form.bathrooms }/>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="pets">Pets</Label>
                                    <Input
                                        className='inputs'
                                        type="text"
                                        name="pets"
                                        onChange={ this.handleChange }
                                        value={ this.state.form.pets }/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input
                                    className='inputs'
                                    type="text"
                                    name="price"
                                    onChange={ this.handleChange }
                                    value={ this.state.form.price }/>
                            </FormGroup>
                        </Col>
                    <div className="button">
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}>
                        Update Apartment
                    </Button>
                    </div>
                </Form>
                { this.state.success && <Redirect to={`/apartmentShow/${this.props.apartment.id}` }/>}
            </>
        );
    }
}

export default ApartmentEdit;
