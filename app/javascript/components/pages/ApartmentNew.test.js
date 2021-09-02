import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentNew from './ApartmentNew'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentNew renders", () => {
  it("displays a form inside of a div element", () => {
    const apartmentNewForm = shallow(<ApartmentNew />).find("h3")
    expect(apartmentNewForm.text()).toEqual("Add an Appartment Page!")
  })
})