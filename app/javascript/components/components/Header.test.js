import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("When the Header renders", () => {
  it("displays the navigation bar", () => {
    const header = shallow(<Header />)
    const headerNav = header.find("header")
    expect(headerNav.length).toEqual(1)
  })
})