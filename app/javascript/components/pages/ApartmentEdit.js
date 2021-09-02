import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
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
            <div className="formContainer">
                <h3>Edit Appartment Page!</h3>
                <Form>
                    <FormGroup>
                        <Label for="street">Street</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="street"
                            onChange={ this.handleChange }
                            value={ this.state.form.street }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">City</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="city"
                            onChange={ this.handleChange }
                            value={ this.state.form.age }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="state"
                            onChange={ this.handleChange }
                            value={ this.state.form.state }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="manager">Manager</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="manager"
                            onChange={ this.handleChange }
                            value={ this.state.form.manager }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            className='inputs'
                            type="email"
                            name="email"
                            onChange={ this.handleChange }
                            value={ this.state.form.email }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="price"
                            onChange={ this.handleChange }
                            value={ this.state.form.price }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bedrooms">Bedrooms</Label>
                        <Input
                            className='inputs'
                            type="number"
                            name="bedrooms"
                            onChange={ this.handleChange }
                            value={ this.state.form.bedrooms }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bathrooms">Bathrooms</Label>
                        <Input
                            className='inputs'
                            type="number"
                            name="bathrooms"
                            onChange={ this.handleChange }
                            value={ this.state.form.bathrooms }/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="pets">Pets</Label>
                        <Input
                            className='inputs'
                            type="text"
                            name="pets"
                            onChange={ this.handleChange }
                            value={ this.state.form.pets }/>
                    </FormGroup>
                    <div className="button">
                    <Button
                        name="submit"
                        onClick={this.handleSubmit}>
                        Add your Apartment
                    </Button>
                    </div>
                </Form>
                {/* remember to redirect to the show page for this appartment */}
                { this.state.success && <Redirect to="/apartmentIndex" />}
            </div>
        );
    }
}

export default ApartmentEdit;
