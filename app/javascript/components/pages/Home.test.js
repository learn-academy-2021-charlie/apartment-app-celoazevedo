import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays a h2 element", () => {
    const homeTitle = shallow(<Home />).find("h2")
    expect(homeTitle.length).toEqual(1)
  })
})