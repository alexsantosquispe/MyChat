import React from 'react'
import { shallow } from 'enzyme'
import WarningMessage from '../../src/components/WarningMessage'

describe('WarningMessage', () => {
  it('Render default', () => {
    const warnignMessage = shallow(<WarningMessage />)
    expect(warnignMessage).toMatchSnapshot()
  })

  it('Render with props', () => {
    const warnignMessage = shallow(<WarningMessage message="test" />)
    expect(warnignMessage).toMatchSnapshot()
  })
})
