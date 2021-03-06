import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentNew from './ApartmentNew'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentNew renders", () => {
  it("displays a form inside of a div element with className formContainer", () => {
    const apartmentNewForm = shallow(<ApartmentNew />).find(".formContainer")
    expect(apartmentNewForm.length).toEqual(1)
  })
})