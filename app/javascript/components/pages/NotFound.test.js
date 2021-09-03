import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When the page renders", () => {
  it("displays a not found! message", () => {
    const notFound = shallow(<NotFound />)
    const renderedNotFoundMsg = notFound.find("h3")
    // console.log("not found msg debug", renderedNotFoundMsg.debug())
    // console.log("not found props,", renderedNotFoundMsg.props())
    expect(renderedNotFoundMsg.text()).toEqual('Not Found!')
    expect(renderedNotFoundMsg.props().className).toEqual('notFoundTitle')
  })
})