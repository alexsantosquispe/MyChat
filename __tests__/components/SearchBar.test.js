import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../../src/components/SearchBar'

describe('SearchBar', () => {
  it('Render default', () => {
    const searchBar = shallow(<SearchBar />)
    expect(searchBar).toMatchSnapshot()
  })

  it('Render with props', () => {
    const searchBar = shallow(
      <SearchBar value="test" placeholder="placeholder test" />
    )
    expect(searchBar).toMatchSnapshot()
  })
})
