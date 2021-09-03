import App from './App';
import React from 'react';
import Home from './pages/Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('when the app renders', ()=>{
  it('displays a header', ()=>{
    // arrange
    const renderedApp = shallow(<App/>)
    // act
    const renderedHeader = renderedApp.find("Header") 
    // assert
    expect(renderedHeader.length).toEqual(1)
  })
  it('provides a route"/" to the home component', ()=>{
    // arrange
    const renderedApp = shallow(<App />)
    // act
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    //  console.log("rendered home route debug", renderedHomeRoute.debug())
    //  console.log("rendered home route props", renderedHomeRoute.props())
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})