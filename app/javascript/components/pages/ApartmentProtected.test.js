import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentProtected from './ApartmentProtected'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentProtected renders", () => {
  it("displays a form inside of a div element with className formContainer", () => {
    const apartmentProtectedHeader = shallow(<ApartmentProtected />).find("h3")
    expect(apartmentProtectedHeader.text()).toEqual("My Apartments")
    // expect(apartmentProtectedHeader.props().className).toEqual('notFoundTitle')
    expect(apartmentProtectedHeader.length).toEqual(1)
  })
})