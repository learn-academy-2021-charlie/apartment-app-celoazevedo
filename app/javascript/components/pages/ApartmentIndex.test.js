import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentIndex renders", () => {
  it("displays cards elements in a cards-container", () => {
    const apartmentIndexCards = shallow(<ApartmentIndex />).find("div")
    expect(apartmentIndexCards.length).toEqual(1)
  })
})


/// testing was not passing. I think that this is due to the fact that .map executes on the ApartmentIndex page before it has access to the data. Maybe try conditional rendering...Nice! This test works!