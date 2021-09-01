import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentShow from './ApartmentShow'

Enzyme.configure({adapter: new Adapter()})

describe("When apartmentShow renders", () => {
  it("displays card element in a cards-container", () => {
    const apartmentShowCard = shallow(<ApartmentShow />).find("div")
    expect(apartmentShowCard.length).toEqual(1)
  })
})