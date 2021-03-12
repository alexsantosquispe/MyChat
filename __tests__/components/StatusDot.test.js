import React from 'react'
import { shallow } from 'enzyme'
import StatusDot from '../../src/components/StatusDot'

describe('StatusDot', () => {
  it('Render default', () => {
    const statusDot = shallow(<StatusDot />)
    expect(statusDot).toMatchSnapshot()
  })

  it('Render status true', () => {
    const statusDot = shallow(<StatusDot status={true} />)
    expect(statusDot).toMatchSnapshot()
  })
})
