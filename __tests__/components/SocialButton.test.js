import React from 'react'
import { shallow } from 'enzyme'
import SocialButton from '../../src/components/SocialButton'

describe('Social Button', () => {
  it('Rende default', () => {
    const socialButton = shallow(<SocialButton />)
    expect(socialButton).toMatchSnapshot()
  })

  it('Rende with props', () => {
    const socialButton = shallow(
      <SocialButton title="social button" type="facebook" />
    )
    expect(socialButton).toMatchSnapshot()
  })
})
