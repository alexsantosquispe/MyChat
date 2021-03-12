import React from 'react'
import { shallow } from 'enzyme'
import ProfileEditable from '../../src/components/ProfileEditable'

describe('ProfileEditable', () => {
  it('Render default', () => {
    const user = {
      email: undefined,
      nickName: undefined,
      status: undefined
    }
    const profile = shallow(<ProfileEditable user={user} />)
    expect(profile).toMatchSnapshot()
  })

  it('Render with props', () => {
    const user = {
      email: 'test@test.com',
      nickName: 'test',
      status: true
    }
    const profile = shallow(<ProfileEditable user={user} />)
    expect(profile).toMatchSnapshot()
  })

  it('onPress', () => {
    const user = {
      email: 'test@test.com',
      nickName: 'test',
      status: true
    }
    const mockOnPress = jest.fn()

    const profile = shallow(
      <ProfileEditable user={user} onPressHandler={mockOnPress} />
    )
    expect(profile).toMatchSnapshot()
    profile.first().props().onPress()
    expect(mockOnPress).toHaveBeenCalled()
    expect(mockOnPress).toHaveBeenCalledTimes(1)
  })
})
