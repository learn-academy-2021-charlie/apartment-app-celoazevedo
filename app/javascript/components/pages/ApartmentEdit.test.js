import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentEdit from './ApartmentEdit'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentEdit renders", () => {
  it("displays a form inside of a div element with className formContainer", () => {
    const apartmentEditForm = shallow(<ApartmentEdit />).find(".formContainer")
    expect(apartmentEditForm.length).toEqual(1)
  })
})