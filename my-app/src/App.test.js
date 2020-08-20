import React from 'react'
import { shallow } from 'enzyme'
// the shallow method from the Enzyme library ensures that
// tests aren't indirectly asserting on behavior of child components
import PersonList from './PersonList'
// we have to import the PersonList component
// however to assert its presence

import App from './App'

describe('App', () => {
  it('renders a PersonList', () => {
    const appWrapper = shallow(<App />)
    const childElement = appWrapper.find(PersonList)

    expect(expectedElement).toHaveLength(1)
  })
})